import type { PlanConfig } from "@/types/plan";

export const planConfig: PlanConfig = {
	plans: [
		{
			id: "1",
			title: "博客系统搭建",
			description: "基于 Astro + Firefly 主题搭建个人博客，完成基础配置和个性化定制",
			status: "completed",
			createdAt: "2026-10-11",
			updatedAt: "2026-10-11",
			tags: ["博客", "Astro"],
			likes: 0,
		},
		{
			id: "2",
			title: "学习 Python 数据处理",
			description: "掌握 pandas 数据处理，向爬虫 / 运维 / 数据处理方向进阶",
			status: "in_progress",
			createdAt: "2026-10-11",
			tags: ["Python", "学习"],
			likes: 0,
		},
		{
			id: "3",
			title: "更多功能规划中...",
			description: "持续迭代和优化博客功能",
			status: "planned",
			createdAt: "2026-10-11",
			tags: ["规划"],
			likes: 0,
		},
	],
};
