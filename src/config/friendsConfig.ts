import type { FriendLink, FriendsPageConfig } from "../types/config";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 是否显示底部自定义内容（friends.mdx 中的内容）
	showCustomContent: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: false,
};

// 友链配置
// ===== 怎么加自己的友链 =====
// 复制下面一段，替换成你朋友的信息即可：
//
// {
// 	title: "朋友的名字",                          // 站点名称
// 	imgurl: "https://example.com/avatar.png",   // 头像图片链接
// 	desc: "朋友的博客描述",                      // 一句话介绍
// 	siteurl: "https://example.com",             // 站点地址
// 	tags: ["Blog"],                             // 标签（可多个，如 ["Blog","Software"]）
// 	weight: 10,                                 // 权重：数字越大排越靠前
// 	enabled: true,                              // true=显示，false=隐藏
// },
//
// 加完后：git add -A && git commit -m "加友链" && git push
// 约 2 分钟后 Cloudflare 自动部署，线上就出现了。
export const friendsConfig: FriendLink[] = [
	{
		title: "HINS's Blog",
		imgurl: "https://avatars.githubusercontent.com/u/105108428?v=4",
		desc: "HINS的温馨小猫窝",
		siteurl: "https://blog.hinswu.top",
		tags: ["Blog"],
		weight: 10,
		enabled: true,
	},
	{
		title: "chuzouX Blog",
		imgurl: "https://q2.qlogo.cn/headimg_dl?dst_uin=3451860760&spec=0",
		desc: "技术分享与实践",
		siteurl: "https://chuzoux.top/",
		tags: ["Blog"],
		weight: 10,
		enabled: true,
	},
	{
		title: "皮梦 の 茶馆",
		imgurl:
			"http://thirdqq.qlogo.cn/ek_qqapp/AQBYdE3HOBBJWzCia3BjOePcJ5icmcwpTW0cEWXlZsib48hLvjwq5KYMmdBlpKtRB3cqt3Kmgfb5v69WGKRvB3Q6av6EV7Jfmc9n5SK9ZRxnAchmKJBILw/100",
		desc: "杂鱼皮梦的博客",
		siteurl: "https://blog.07210700.xyz",
		tags: ["Blog"],
		weight: 10,
		enabled: true,
	},
	{
		title: "Milk's Blog",
		imgurl:
			"https://upload.awmc.cc/uploads/20260330/c095b9df52d0c466ee38bdf202262176.png",
		desc: "喵喵咕噜咕噜～",
		siteurl: "https://blog.awmc.cc",
		tags: ["Blog"],
		weight: 10,
		enabled: true,
	},
	{
		title: "AWMC BBS",
		imgurl:
			"https://upload.awmc.cc/uploads/20260330/c095b9df52d0c466ee38bdf202262176.png",
		desc: "awmc论坛",
		siteurl: "https://awmc.cc",
		tags: ["Discussion"],
		weight: 9,
		enabled: true,
	},
	{
		title: "Dmocken的Phira下载站",
		imgurl: "https://phira.dmocken.top/Phira.png",
		desc: "只是一个普普通通的下载站~",
		siteurl: "https://phira.dmocken.top/",
		tags: ["Software"],
		weight: 8,
		enabled: true,
	},
	{
		title: "Chongxiの咖啡屋",
		imgurl: "https://xice.cx/images/14.webp",
		desc: "Lose yourself to find yourself",
		siteurl: "https://xice.cx/",
		tags: ["Blog"],
		weight: 10,
		enabled: true,
	},
	{
		title: "落雪咖啡屋",
		imgurl: "https://awmc.cc/media/image_1776709261927_32-png.242/",
		desc: "Score Tracker",
		siteurl: "https://lxns.net/",
		tags: ["Software"],
		weight: 10,
		enabled: true,
	},
	{
		title: "梦雨的主页",
		imgurl: "https://www.dreamrain.net/images/icon/logo.png",
		desc: "梦雨的后花园",
		siteurl: "https://www.dreamrain.net",
		tags: ["Blog"],
		weight: 10,
		enabled: true,
	},
	{
		title: "星网",
		imgurl: "https://www.google.com/s2/favicons?domain=gimovo.com&sz=64",
		desc: "星网",
		siteurl: "https://gimovo.com",
		tags: ["tools"],
		weight: 10,
		enabled: true,
	},
	{
		title: "找midi",
		imgurl: "https://www.google.com/s2/favicons?domain=midishow.com&sz=64",
		desc: "找midi",
		siteurl: "https://www.midishow.com/",
		tags: ["tools"],
		weight: 10,
		enabled: true,
	},
	{
		title: "galgame大全",
		imgurl: "https://www.google.com/s2/favicons?domain=gal.saop.cc&sz=64",
		desc: "galgame大全",
		siteurl: "https://gal.saop.cc/categories/android/",
		tags: ["tools"],
		weight: 10,
		enabled: true,
	},
	{
		title: "mc红石制作",
		imgurl: "https://www.google.com/s2/favicons?domain=mcpixelart.com&sz=64",
		desc: "mc红石制作",
		siteurl: "https://mcpixelart.com",
		tags: ["tools"],
		weight: 10,
		enabled: true,
	},
	{
		title: "音律屋",
		imgurl: "https://www.google.com/s2/favicons?domain=yinlvwu.com&sz=64",
		desc: "音律屋可搜索/资源严选下载插件，含肥波臭氧waves套装教学",
		siteurl: "http://yinlvwu.com/",
		tags: ["tools"],
		weight: 10,
		enabled: true,
	},
	{
		title: "miku社区（新）",
		imgurl: "https://www.google.com/s2/favicons?domain=vocakey.wiki&sz=64",
		desc: "miku社区（新）status.cyaniagent.com",
		siteurl: "https://vb.vocakey.wiki/",
		tags: ["tools"],
		weight: 10,
		enabled: true,
	},
	{
		title: "稣知",
		imgurl: "https://www.google.com/s2/favicons?domain=suzhi.cc&sz=64",
		desc: "稣知",
		siteurl: "https://suzhi.cc/",
		tags: ["tools"],
		weight: 10,
		enabled: true,
	},
	{
		title: "人声分离",
		imgurl: "https://www.google.com/s2/favicons?domain=vocalremover.org&sz=64",
		desc: "人声分离",
		siteurl: "https://vocalremover.org/",
		tags: ["tools"],
		weight: 10,
		enabled: true,
	},
	{
		title: "美化预设",
		imgurl: "https://www.google.com/s2/favicons?domain=re.xcdream.com&sz=64",
		desc: "美化预设",
		siteurl: "https://re.xcdream.com/",
		tags: ["tools"],
		weight: 10,
		enabled: true,
	},
	{
		title: "刘明野工具箱",
		imgurl: "https://www.google.com/s2/favicons?domain=cwo.cc&sz=64",
		desc: "刘明野工具箱",
		siteurl: "https://cwo.cc/",
		tags: ["tools"],
		weight: 10,
		enabled: true,
	},
	{
		title: "TryAllAI",
		imgurl: "https://www.google.com/s2/favicons?domain=tryallai.com&sz=64",
		desc: "AI 工具导航",
		siteurl: "https://www.tryallai.com/",
		tags: ["tools"],
		weight: 10,
		enabled: true,
	},
	{
		title: "找谱子",
		imgurl: "https://www.google.com/s2/favicons?domain=aitanqin.com&sz=64",
		desc: "找谱子",
		siteurl: "https://www.aitanqin.com/",
		tags: ["tools"],
		weight: 10,
		enabled: true,
	},
	{
		title: "网页设计",
		imgurl: "https://www.google.com/s2/favicons?domain=open-design.ai&sz=64",
		desc: "AI 网页设计",
		siteurl: "https://open-design.ai/zh/",
		tags: ["tools"],
		weight: 10,
		enabled: true,
	},
	{
		title: "找补丁",
		imgurl: "https://www.google.com/s2/favicons?domain=online-fix.me&sz=64",
		desc: "找补丁",
		siteurl: "https://online-fix.me/",
		tags: ["tools"],
		weight: 10,
		enabled: true,
	},
	{
		title: "游戏下载",
		imgurl: "https://www.google.com/s2/favicons?domain=koysobackup.com&sz=64",
		desc: "游戏下载 playzip.net",
		siteurl: "https://koysobackup.com/",
		tags: ["tools"],
		weight: 10,
		enabled: true,
	},
	{
		title: "转工程",
		imgurl: "https://www.google.com/s2/favicons?domain=utaformatix.phska.cn&sz=64",
		desc: "转工程",
		siteurl: "https://utaformatix.phska.cn/",
		tags: ["tools"],
		weight: 10,
		enabled: true,
	},
	{
		title: "IFIXIT维修",
		imgurl: "https://www.google.com/s2/favicons?domain=ifixit.com&sz=64",
		desc: "IFIXIT 维修指南",
		siteurl: "https://zh.ifixit.com/",
		tags: ["tools"],
		weight: 10,
		enabled: true,
	},
	{
		title: "FastDo工具网站",
		imgurl: "https://www.google.com/s2/favicons?domain=fastdo.tools&sz=64",
		desc: "FastDo 工具网站",
		siteurl: "https://fastdo.tools",
		tags: ["tools"],
		weight: 10,
		enabled: true,
	},
	{
		title: "deco官网",
		imgurl: "https://www.google.com/s2/favicons?domain=otoiro.co.jp&sz=64",
		desc: "DECO*27 官网",
		siteurl: "https://otoiro.co.jp",
		tags: ["tools"],
		weight: 10,
		enabled: true,
	},
	{
		title: "瑟狐",
		imgurl: "https://www.google.com/s2/favicons?domain=pan.vocaloid.world&sz=64",
		desc: "瑟狐",
		siteurl: "https://pan.vocaloid.world",
		tags: ["tools"],
		weight: 10,
		enabled: true,
	},
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};
