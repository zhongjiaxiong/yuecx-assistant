# 粤出行城际出行助手

基于 LLM Function Calling 的广东省城际巴士智能查询推荐系统。

## 功能

- 支持粤出行全网约 89 个城市的城际巴士班次查询
- LLM (qwen-max) 自然语言对话交互
- 多因子评分推荐（时间、价格、站点就近、余票）
- 按需实时验证班次状态
- 分层定时爬取保持数据新鲜

## 技术栈

- **运行时**: Node.js 18+
- **Web 框架**: Express
- **数据库**: PostgreSQL (Supabase)
- **LLM**: DashScope qwen-max
- **定时任务**: GitHub Actions
- **部署**: Render

## 环境变量

```
DATABASE_URL    — PostgreSQL 连接串
LLM_API_KEY     — DashScope API key
LLM_BASE_URL    — DashScope endpoint (default: https://dashscope.aliyuncs.com/compatible-mode/v1)
LLM_MODEL       — 模型名 (default: qwen-max)
```

## 快速开始

```bash
npm install
# 建表
DATABASE_URL=... node db.js --migrate
# 同步城市+路线元数据
DATABASE_URL=... node crawler.js --mode meta
# 启动服务
DATABASE_URL=... LLM_API_KEY=... node server.js
```

## 部署

1. Supabase 创建项目，复制连接串
2. 运行 `node db.js --migrate` 建表
3. 推到 GitHub
4. Render 创建 Web Service，配环境变量
5. GitHub Actions 配 `DATABASE_URL` secret
6. 手动触发 `crawl-full` workflow 初始化数据

