/**
 * 用头像图生成 favicon（32/128/180/192 PNG + ICO）
 * node scripts/make-favicon.js
 */
import sharp from "sharp";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SRC = join(ROOT, "src", "assets", "images", "avatar.jpg");
const OUT_DIR = join(ROOT, "public", "favicon");

const sizes = [32, 128, 180, 192];

async function main() {
	const pngs = {};
	for (const s of sizes) {
		const buf = await sharp(SRC)
			.resize(s, s, { fit: "cover" })
			.png()
			.toBuffer();
		pngs[s] = buf;
		// light / dark 同图
		writeFileSync(join(OUT_DIR, `favicon-light-${s}.png`), buf);
		writeFileSync(join(OUT_DIR, `favicon-dark-${s}.png`), buf);
		console.log(`favicon-${s}.png ok`);
	}
	// 手工包一个 ICO（内嵌 32px PNG，现代浏览器均支持）
	const png32 = pngs[32];
	const header = Buffer.alloc(6);
	header.writeUInt16LE(0, 0); // reserved
	header.writeUInt16LE(1, 2); // type: ico
	header.writeUInt16LE(1, 4); // count
	const entry = Buffer.alloc(16);
	entry.writeUInt8(32, 0); // width
	entry.writeUInt8(32, 1); // height
	entry.writeUInt8(0, 2); // palette
	entry.writeUInt8(0, 3);
	entry.writeUInt16LE(1, 4); // planes
	entry.writeUInt16LE(32, 6); // bpp
	entry.writeUInt32LE(png32.length, 8);
	entry.writeUInt32LE(22, 12); // offset
	writeFileSync(join(OUT_DIR, "favicon.ico"), Buffer.concat([header, entry, png32]));
	console.log("favicon.ico ok");
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
