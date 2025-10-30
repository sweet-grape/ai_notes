# ComfyUI 学习站（静态网站）

这是一个用于托管在 Gitee Pages 的静态网站，包含：
- 首页（index.html）
- 学习教程（tutorial.html）
- 案例展示（cases.html）
- 404 回退页（404.html）
- 基础样式与脚本（style.css, main.js）

## 本地预览
直接用浏览器打开 `index.html` 即可（或使用任意本地静态服务器）。

## 推送到 Gitee 并启用 Pages
1. 新建 Gitee 仓库（公开）。
2. 将本目录所有文件提交并推送到默认分支（如 `master`）。
3. 在仓库页面 → 服务 → Gitee Pages：
   - 源：选择默认分支
   - 发布目录：根目录（`/`）
   - 点击发布
4. 发布成功后获得你的 `*.gitee.io` 访问地址。

## 自定义域名（可选）
- 在域名 DNS 添加 CNAME 解析到 Gitee 提供的域名
- 在 Gitee Pages 设置中绑定该域名

## 前端路由说明
本项目为多页面静态站点（MPA），无需额外 404 回退作为前端路由。`404.html` 仅用于兜底错误页。

---
如需在服务器部署可在线运行的 ComfyUI（GPU 推理），请使用独立的后端环境并通过 Nginx/HTTPS 对外提供访问，静态站点仅作文档/展示用途。
