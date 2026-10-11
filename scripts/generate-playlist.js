/**
 * 扫描 public/assets/music/*.mp3，自动生成播放列表写入 musicConfig.ts
 * node scripts/generate-playlist.js
 */
import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join, dirname, basename, extname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const MUSIC_DIR = join(ROOT, "public", "assets", "music");
const CONFIG_PATH = join(ROOT, "src", "config", "musicConfig.ts");

// 拆分 "歌手A; 歌手B - 歌名.mp3" → { artist, name }
function parseSong(filename) {
	const base = basename(filename, extname(filename));
	const idx = base.indexOf(" - ");
	if (idx === -1) {
		return { name: base, artist: "未知艺术家" };
	}
	return {
		name: base.slice(idx + 3).trim(),
		artist: base.slice(0, idx).trim().replace(/;/g, " /").replace(/,/g, " /"),
	};
}

const files = readdirSync(MUSIC_DIR).filter((f) =>
	f.toLowerCase().endsWith(".mp3"),
);
const playlist = files
	.map((f) => {
		const { name, artist } = parseSong(f);
		// encodeURI 保留分号（Vite dev 对 %3B 会 404），只手动处理 # 和 ?
		const url =
			"/assets/music/" +
			encodeURI(f).replace(/#/g, "%23").replace(/\?/g, "%3F");
		return { name, artist, url, cover: "", lrc: "" };
	})
	.sort((a, b) => a.name.localeCompare(b.name, "zh-Hans-CN"));

// 生成 TS 对象字面量
function literal(item) {
	return `\t\t\t{
\t\t\t\tname: ${JSON.stringify(item.name)},
\t\t\t\tartist: ${JSON.stringify(item.artist)},
\t\t\t\turl: ${JSON.stringify(item.url)},
\t\t\t\tcover: "",
\t\t\t\tlrc: "",
\t\t\t},`;
}

const newLocal = `\tlocal: {\n\t\tplaylist: [\n${playlist
	.map(literal)
	.join("\n")}\n\t\t],\n\t},`;

let content = readFileSync(CONFIG_PATH, "utf-8");
// 替换 local 块（从 "\tlocal: {" 到其后第一个 "\n\t},"）
const start = content.indexOf("\tlocal: {");
if (start === -1) throw new Error("musicConfig.ts 中找不到 local 块");
const endMarker = "\n\t},";
const end = content.indexOf(endMarker, start);
if (end === -1) throw new Error("local 块结尾没找到");
content = content.slice(0, start) + newLocal + content.slice(end + endMarker.length);

// mode 切到 local
content = content.replace(
	/mode:\s*"(meting|local)"/,
	'mode: "local"',
);

writeFileSync(CONFIG_PATH, content, "utf-8");
console.log(`playlist ok: ${playlist.length} songs written to musicConfig.ts`);
