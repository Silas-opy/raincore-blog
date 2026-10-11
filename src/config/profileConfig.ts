import type { ProfileConfig } from "../types/config";

export const profileConfig: ProfileConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.webp"
	// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/avatar.webp"
	// 3. 远程 URL："https://example.com/avatar.jpg"
	avatar: "assets/images/avatar.jpg",

	// 名字
	name: "Silas若虚生",

	// 个人签名
	bio: "Welcome to my personal blog.",

	// GitHub 用户名
	githubUsername: "Silas-opy",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
		{
			name: "QQ",
			icon: "fa7-brands:qq",
			url: "tencent://message/?uin=3450717842&Site=&Menu=yes",
			showName: false,
		},
		{
			name: "微信 xmzxmz963852",
			icon: "fa7-brands:weixin",
			// 微信没有可点击的在线链接，悬停/名称中展示微信号
			url: "#",
			showName: true,
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/Silas-opy",
			showName: false,
		},
		{
			name: "哔哩哔哩 若虚生P",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/",
			showName: true,
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:3450717842@qq.com",
			showName: false,
		},
	],
};
