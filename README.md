# PathPass｜途照

PathPass｜途照是一个面向中文用户的全球身份路径信息工具，整理发达国家和高收入地区的长期居留、永居、入籍、护照和签证路径，帮助用户根据个人背景初步判断适合探索的合法路径。

## 当前版本

这是首版静态内容版本：

- Next.js App Router + TypeScript + Tailwind CSS。
- 首页展示全部国家 / 地区概览。
- 每个国家 / 地区有独立详情页：`/countries/[slug]`。
- 内容数据暂存在 `lib/countries.ts`。
- 后续可迁移到 Supabase 作为内容后台。

## 功能范围

当前包含：

- 发达国家 / 高收入地区概览卡片。
- 路径类型分类：
  - 留学转永居
  - 技术移民
  - 雇主担保
  - 高技能人才签证
  - 创业 / 投资路径
  - 数字游民签证
  - 长期居留转永居
  - 入籍路径
- 国家详情页：
  - 国家 / 地区概览
  - 可探索身份路径
  - 适合人群
  - 长期居留 / 永居概览
  - 入籍 / 护照概览
  - 具体要求核验清单
  - 数据来源名称

## 数据口径

首版按以下来源建立内容结构：

- 各国移民、内政、司法或签证主管部门
- 各国外交部、签证与领事服务页面
- OECD International Migration Outlook
- IMF advanced economies classification
- UN M49 regional classification

注意：本项目用于信息整理和路径初筛，不构成移民、法律、税务或投资建议。正式申请前必须核验官方文件，并咨询持牌专业人士。

## 本地开发

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

默认访问：

```text
http://localhost:3000
```

如果 3000 端口被占用，Next.js 会自动使用下一个可用端口。

## 常用命令

```bash
npm run lint
npm run build
npm run start
```

## 项目结构

```text
app/
  countries/[slug]/page.tsx   国家 / 地区详情页
  globals.css                  全局样式
  layout.tsx                   根布局和 metadata
  page.tsx                     首页概览
lib/
  countries.ts                 国家 / 地区与路径数据
```

## 上线步骤

### 1. 推送到 GitHub

创建 GitHub 仓库后，添加远程地址并推送：

```bash
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

如果使用 GitHub CLI，也可以运行：

```bash
gh repo create pathpass --private --source=. --remote=origin --push
```

### 2. 部署到 Vercel

在 Vercel 中选择 GitHub 仓库：

- Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: 由 Vercel 自动识别
- Install Command: `npm install`

首版静态内容不需要环境变量。

### 3. 后续接入 Supabase

建议 Supabase 后续用于：

- 国家 / 地区表
- 路径类型表
- 项目级要求表
- 来源链接和更新时间
- 管理端内容更新

首版上线可以先不接 Supabase，等静态版确认信息结构后再迁移数据。
