const blogs = [
    {
        id: 1,
        title: "前端工程化入门：构建工具的选择",
        content: "在前端工程化中，构建工具是不可或缺的。Webpack、Rollup、Vite等工具各具优势，本文将详细介绍它们的特点和适用场景。",
        name: "张三",
        avatar: "https://wang-oss-study.oss-cn-nanjing.aliyuncs.com/upload/d0731bdf-a5e1-4c5a-b2ea-5dc31149ddb6_b_0bbb28f68ed4b40caa4b615407e50d42.jpg",
        likes: 120,
        views: 500,
        collections: 30,
        tags: ["Webpack", "Rollup", "Vite", "构建工具"],
        date: "2023-07-01"
    },
    {
        id: 2,
        title: "代码规范与自动化校验：ESLint的深度应用",
        content: "代码规范对于团队协作至关重要。ESLint是前端开发中常用的代码校验工具，本文将介绍如何配置ESLint以满足不同项目的需求。",
        name: "李四",
        avatar: "https://wang-oss-study.oss-cn-nanjing.aliyuncs.com/upload/d0731bdf-a5e1-4c5a-b2ea-5dc31149ddb6_b_0bbb28f68ed4b40caa4b615407e50d42.jpg",
        likes: 80,
        views: 300,
        collections: 20,
        tags: ["ESLint", "代码规范", "自动化校验"],
        date: "2023-07-02"
    },
    {
        id: 3,
        title: "前端性能优化：从加载到交互的全面策略",
        content: "性能优化是前端工程化的关键环节。本文将探讨如何通过代码分割、懒加载、缓存策略等手段提升页面性能。",
        name: "王五",
        avatar: "https://wang-oss-study.oss-cn-nanjing.aliyuncs.com/upload/d0731bdf-a5e1-4c5a-b2ea-5dc31149ddb6_b_0bbb28f68ed4b40caa4b615407e50d42.jpg",
        likes: 150,
        views: 800,
        collections: 40,
        tags: ["性能优化", "代码分割", "懒加载", "缓存策略"],
        date: "2023-07-03"
    },
    {
        id: 4,
        title: "前端工程化中的组件化开发",
        content: "组件化是前端工程化的基础，它能够提高代码复用性和项目的可维护性。本文将介绍如何通过React和Vue实现组件化开发。",
        name: "赵六",
        avatar: "https://wang-oss-study.oss-cn-nanjing.aliyuncs.com/upload/d0731bdf-a5e1-4c5a-b2ea-5dc31149ddb6_b_0bbb28f68ed4b40caa4b615407e50d42.jpg",
        likes: 100,
        views: 450,
        collections: 25,
        tags: ["组件化", "React", "Vue", "代码复用"],
        date: "2023-07-04"
    },
    {
        id: 5,
        title: "前端工程化中的版本控制：Git的最佳实践",
        content: "版本控制是团队协作的基石。本文将介绍Git的基本操作、分支管理策略以及如何避免常见的Git问题。",
        name: "孙七",
        avatar: "https://wang-oss-study.oss-cn-nanjing.aliyuncs.com/upload/d0731bdf-a5e1-4c5a-b2ea-5dc31149ddb6_b_0bbb28f68ed4b40caa4b615407e50d42.jpg",
        likes: 90,
        views: 380,
        collections: 18,
        tags: ["Git", "版本控制", "分支管理"],
        date: "2023-07-05"
    },
    {
        id: 6,
        title: "前端工程化中的自动化测试",
        content: "自动化测试是前端工程化的重要组成部分。本文将介绍如何使用Jest和Cypress实现单元测试和端到端测试。",
        name: "周八",
        avatar: "https://wang-oss-study.oss-cn-nanjing.aliyuncs.com/upload/d0731bdf-a5e1-4c5a-b2ea-5dc31149ddb6_b_0bbb28f68ed4b40caa4b615407e50d42.jpg",
        likes: 110,
        views: 420,
        collections: 22,
        tags: ["自动化测试", "Jest", "Cypress", "单元测试"],
        date: "2023-07-06"
    },
    {
        id: 7,
        title: "前端工程化的持续集成与持续部署（CI/CD）",
        content: "持续集成与持续部署是前端工程化的高级实践。本文将介绍如何使用GitHub Actions和Jenkins实现自动化部署。",
        name: "吴九",
        avatar: "https://wang-oss-study.oss-cn-nanjing.aliyuncs.com/upload/d0731bdf-a5e1-4c5a-b2ea-5dc31149ddb6_b_0bbb28f68ed4b40caa4b615407e50d42.jpg",
        likes: 130,
        views: 550,
        collections: 35,
        tags: ["CI/CD", "GitHub Actions", "Jenkins", "自动化部署"],
        date: "2023-07-07"
    },
    {
        id: 8,
        title: "前端工程化中的代码分割与懒加载",
        content: "代码分割和懒加载是提升前端性能的重要手段。本文将介绍如何在React和Vue中实现代码分割和懒加载。",
        name: "郑十",
        avatar: "https://wang-oss-study.oss-cn-nanjing.aliyuncs.com/upload/d0731bdf-a5e1-4c5a-b2ea-5dc31149ddb6_b_0bbb28f68ed4b40caa4b615407e50d42.jpg",
        likes: 140,
        views: 600,
        collections: 45,
        tags: ["代码分割", "懒加载", "React", "Vue"],
        date: "2023-07-08"
    },
    {
        id: 9,
        title: "前端工程化中的静态资源管理",
        content: "静态资源管理对于前端性能至关重要。本文将介绍如何通过Webpack和CDN优化静态资源的加载。",
        name: "钱伯",
        avatar: "https://wang-oss-study.oss-cn-nanjing.aliyuncs.com/upload/d0731bdf-a5e1-4c5a-b2ea-5dc31149ddb6_b_0bbb28f68ed4b40caa4b615407e50d42.jpg",
        likes: 100,
        views: 400,
        collections: 20,
        tags: ["静态资源", "Webpack", "CDN", "性能优化"],
        date: "2023-07-09"
    },
    {
        id: 10,
        title: "前端工程化中的多环境配置",
        content: "多环境配置是前端工程化的常见需求。本文将介绍如何通过Webpack和环境变量实现开发、测试和生产环境的配置管理。",
        name: "孔仲",
        avatar: "https://wang-oss-study.oss-cn-nanjing.aliyuncs.com/upload/d0731bdf-a5e1-4c5a-b2ea-5dc31149ddb6_b_0bbb28f68ed4b40caa4b615407e50d42.jpg",
        likes: 120,
        views: 480,
        collections: 28,
        tags: ["多环境配置", "Webpack", "环境变量", "开发流程"],
        date: "2023-07-10"
    }
];

export default blogs;