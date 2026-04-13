# 粤程助手

广东省城际巴士智能查询推荐系统，基于 LLM Function Calling。

## 功能

- 支持约 89 个城市的城际巴士班次实时查询
- LLM (qwen-max) 自然语言对话交互
- 多因子评分推荐（时间、价格、站点就近、余票）
- 一键生成订票跳转链接
- 实时验证班次状态

## 技术栈

- **运行时**: Node.js 18+
- **Web 框架**: Express
- **数据库**: PostgreSQL (Supabase)
- **LLM**: DashScope qwen-max
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
DATABASE_URL=... node crawler.js
# 启动服务
DATABASE_URL=... LLM_API_KEY=... node server.js
```

