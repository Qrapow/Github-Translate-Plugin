# GitHub 汉化插件

一个简单的浏览器插件，致力于为 GitHub 网站提供一个非官方的中文界面，优化国内用户的浏览和使用体验。

## 注意

本插件使用了AI(70%)编写和人力(30%)编写 (Readme也是AI写的())

本人对汉化的审查不多

而且有些内容我加上去死活没法翻译上，我也不知道为什么

希望有大神来提交个PR(xwx)

## ✨ 主要功能

本插件通过在前端动态翻译页面内容，实现了对 GitHub 多个核心页面的汉化，目前已覆盖：

- **全局导航**：包括顶部导航栏、左侧全局菜单和右侧用户菜单。
- **个人主页**：包括概览、热门仓库、贡献图和活动流。
- **仓库主页 (Code)**：包括文件列表、右侧边栏信息 (Releases, Packages, Languages) 等。
- **议题 (Issues)**：议题列表、筛选器和操作按钮。
- **拉取请求 (Pull Requests)**：PR 列表、欢迎语和筛选器。
- **项目 (Projects)**：项目列表页和欢迎界面。
- **洞察 (Insights)**：Pulse 概览页面。
- **安全 (Security)**：安全概览页面。
- **设置 (Settings)**：部分通用设置选项。

## 🚀 安装说明

您可以将此项目作为“未打包的扩展”在您的浏览器中本地安装。

1.  **准备文件**：
    创建一个文件夹（例如 `github-chinese-plugin`），并将以下两个文件放入其中：
    - `manifest.json` (您已提供)
    - `content.js` (您正在编写的 JavaScript 脚本)

    文件结构如下：
    ```
    /github-chinese-plugin
    ├── manifest.json
    └── content.js
    ```

2.  **在浏览器中安装**：

    - **对于 Google Chrome / Microsoft Edge**:
        1.  在地址栏输入 `chrome://extensions` (Chrome) 或 `edge://extensions` (Edge) 并回车。
        2.  在页面右上角，打开 **“开发者模式”** 的开关。
        3.  点击 **“加载已解压的扩展程序”** 按钮。
        4.  在弹出的文件选择窗口中，选择您刚刚创建的 `github-chinese-plugin` 文件夹。
        5.  插件安装完成！现在访问 GitHub 应该就能看到汉化效果了。

## 🌐 支持的浏览器

此插件基于 Manifest V3 标准，理论上支持所有主流的 Chromium 内核浏览器。

-   ✅ **完全支持**:
    -   Google Chrome
    -   Microsoft Edge
-   ✅ **理论上支持** (需要打包或微调):
    -   Mozilla Firefox (需要将 `manifest.json` 稍作修改并作为 "临时附加组件" 加载)
    -   Opera, Brave, Vivaldi 等其他 Chromium 浏览器。
-   ❌ **不支持**:
    -   Safari (需要完全不同的打包和分发流程)

## 🤝 贡献

我们非常欢迎您为这个项目做出贡献！如果您发现翻译不准确或有未覆盖的页面，请：
-   创建 Issue 进行反馈。
-   提交 Pull Request 帮助我们完善翻译。

## 📄 许可证

本项目采用 [MIT License](./LICENSE) 授权。