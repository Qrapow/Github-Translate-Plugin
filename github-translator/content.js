/**
 * ===================================================================================
 * 页面翻译配置
 * 结构：{'页面路径片段': {翻译词典}}
 * ===================================================================================
 */
const pageTranslations = {
    // ===================================================================
    // 全局词典 (适用于所有页面)
    // ===================================================================
    'global': {
        // --- 左侧全局导航 ---
        "Home": "首页",
        "Issues": "议题",
        "Pull requests": "拉取请求",
        "Discussions": "讨论",
        "Projects": "项目",
        "Wiki": "百科",
        "Security": "安全",
        "Insights": "洞察",
        "Settings": "设置",
        "Explore": "探索",
        "Marketplace": "市场",
        "Repositories": "仓库",
        "Show more": "显示更多",
        "Codespaces": "云工作区",
        "Copilot": "开发助手",

        // --- 右侧用户菜单 ---
        "Your profile": "您的个人资料",
        "Your repositories": "您的仓库",
        "Your Copilot": "您的 Copilot",
        "Your projects": "您的项目",
        "Your stars": "您的星标",
        "Your gists": "您的 Gist",
        "Your organizations": "您的组织",
        "Your enterprises": "您的企业版",
        "Your sponsors": "您的赞助",
        "Try Enterprise": "试用企业版",
        "Feature preview": "功能预览",
        "GitHub Website": "GitHub 官网",
        "GitHub Docs": "GitHub 文档",
        "GitHub Support": "GitHub 支持",
        "GitHub Community": "GitHub 社区",
        "Sign out": "退出登录",
        "At School": "在校",

        // --- 页脚 ---
        "Terms": "服务条款",
        "Privacy": "隐私政策",
        "Status": "状态",
        "Docs": "文档",
        "Contact": "联系我们",
        "Manage cookies": "管理 Cookies",
        "Do not share my personal information": "不要分享我的个人信息",
        
        // --- 通用 ---
        "Code": "代码",
        "Actions": "工作流",
        "Type / to search": "输入 / 以搜索",
        "Cancel": "取消",
        "Preview": "预览",
        " copied!": " 已复制!",
        "Copied!": "已复制!",
        "Go to file": "转到文件",
        "Add file": "添加文件",
        "History": "历史",
        "Latest commit": "最新提交"
    },
    // ===================================================================
    // 仓库主页 (Code 页面)
    // ===================================================================
    '/': {
        "main": "主分支",
        "master": "主分支",
        "README": "自述文件",
        "Code of conduct": "行为准则",
        "License": "许可证",
        "Name": "名称",
        "Last commit message": "最新提交信息",
        "Last commit date": "最新提交日期",
        "About": "关于",
        "No description, website, or topics provided.": "未提供描述、网站或主题。",
        "Edit repository metadata": "编辑仓库元数据",
        "Readme": "自述文件",
        "Activity": "动态",
        "Stars": "收藏",
        "stars": "星标",
        "Watching": "正在关注",
        "watching": "关注",
        "Forks": "分支",
        "forks": "分支",
        "Releases": "发行版",
        "Latest": "最新",
        "Packages": "软件包",
        "No packages published": "未发布任何软件包",
        "Publish your first package": "发布您的第一个软件包",
        "Languages": "语言",
        "Branch": "分支",
        "Tags": "标签",
        "Commits": "次提交",
        "Commit": "提交",
        "Public": "公开",
        "Pin": "置顶",
        "Watch": "关注",
        "Unwatch": "取消关注",
        "Fork": "分支",
        "Star": "收藏",
        "Starred": "已收藏",
        "Unstar": "取消收藏",
        "Add this repository to a list": "将此仓库添加到列表",
        "View all files": "查看所有文件",
        "Suggested workflows": "建议的工作流",
        "Based on your tech stack": "基于您的技术栈",
        "Publish Python Package": "发布 Python 包",
        "Configure": "配置",
        "SLSA Generic generator": "SLSA 通用生成器",
        "Generate SLSA3 provenance for your existing release workflows": "为您现有的发布工作流生成 SLSA3 源数据",
        "Python application": "Python 应用程序",
        "Create and test a Python application.": "创建并测试一个 Python 应用程序。",
        "More workflows": "更多工作流",
        "Dismiss suggestions": "关闭建议",
        "Initial commit": "初始提交",
        "Update README.md": "更新 README.md",
        "Fix some chat problem and add requirements file": "修复聊天问题并添加依赖文件",
        "commits": "次提交",
        "month ago": "个月前",
        "months ago": "个月前",
        "Latest commit": "最新提交",
        "Switch branches/tags": "切换分支/标签",
        "Find or create a branch…": "查找或创建一个分支…",
        "View all branches": "查看所有分支",
        "View all tags": "查看所有标签",
        "Clone": "克隆",
        "HTTPS": "HTTPS协议",
        "SSH": "SSH协议",
        "GitHub CLI": "GitHub命令行",
        "Use a password-protected SSH key.": "使用受密码保护的SSH密钥。",
        "Add a new SSH key to your account.": "将新的SSH密钥添加到您的帐户。",
        "Open with GitHub Desktop": "使用 GitHub Desktop 打开",
        "Download ZIP": "下载ZIP压缩包"
    },
    // ===================================================================
    // 个人主页
    // ===================================================================
    '/profile': {
        "Overview": "概览",
        "Packages": "软件包",
        "Stars": "星标",
        "You unlocked new Achievements with private contributions! Show them off by including private contributions in your Profile in settings.": "您通过私有贡献解锁了新的成就！在“设置”中将私有贡献包含进来以展示它们。",
        "Popular repositories": "热门仓库",
        "Customize your pins": "自定义您的置顶项",
        "Edit profile": "编辑个人资料",
        "follower": "关注者",
        "following": "正在关注",
        "Achievements": "成就",
        "Organizations": "组织",
        "contributions in the last year": "过去一年的贡献",
        "Contribution settings": "贡献设置",
        "Learn how we count contributions": "了解我们如何计算贡献",
        "Less": "较少",
        "More": "更多",
        "Contribution activity": "贡献活动",
        "Created 1 repository": "创建了 1 个仓库",
        "Show more activity": "显示更多活动",
        "Seeing something unexpected? Take a look at the GitHub profile guide.": "看到预期之外的内容？请查看 GitHub 个人资料指南。",
        "Edit status": "编辑状态",
        "What's happening?": "在忙什么？",
        "On vacation": "度假中",
        "Out sick": "生病了",
        "Working from home": "在家办公",
        "Focusing": "专注中",
        "Suggestions": "建议",
        "Busy": "忙碌",
        "When others mention you, assign you, or request your review, GitHub will let them know that you have limited availability.": "当其他人提及、指派或请求您审查时，GitHub会让他们知道您的可用时间有限。",
        "Clear status": "清除状态",
        "Never": "从不",
        "in 30 minutes": "30分钟后",
        "in 1 hour": "1小时后",
        "in 4 hours": "4小时后",
        "after today": "今天之后",
        "after this week": "本周之后",
        "after a month": "一个月后",
        "How long until this status will automatically clear.": "状态将在此时间后自动清除。",
        "Set status": "设置状态",
        "Bio": "简介",
        "Add a bio": "添加简介",
        "You can @mention other users and organizations to link to them.": "您可以 @提及 其他用户和组织以链接他们。",
        "Pronouns": "代词",
        "Don't specify": "不指定",
        "Custom": "自定义",
        "Company": "公司",
        "Location": "位置",
        "Display current local time": "显示当前本地时间",
        "Social accounts": "社交账户",
        "Link to social profile": "链接到社交资料",
        "Save": "保存",
        "Edit pinned items": "编辑置顶项",
        "Save pins": "保存置顶",
        "Jan": "一月", "Feb": "二月", "Mar": "三月", "Apr": "四月", "May": "五月", "Jun": "六月", "Jul": "七月", "Aug": "八月", "Sep": "九月", "Oct": "十月", "Nov": "十一月", "Dec": "十二月",
        "Mon": "一", "Tue": "二", "Wed": "三", "Thu": "四", "Fri": "五", "Sat": "六", "Sun": "日"
    },
    // ===================================================================
    // Issues (议题) 页面
    // ===================================================================
    '/issues': {
        "Labels": "标签",
        "Milestones": "里程碑",
        "New issue": "新建议题",
        "Open": "开启",
        "Closed": "已关闭",
        "Author": "作者",
        "Assignees": "指派人",
        "Sort": "排序",
        "Newest": "最新",
        "Oldest": "最旧",
        "Most commented": "最多评论",
        "Least commented": "最少评论",
        "Recently updated": "最近更新",
        "Least recently updated": "最少更新",
        "No results": "无结果",
        "Try adjusting your search filters.": "尝试调整您的搜索过滤器。"
    },
    // ===================================================================
    // Pull requests (拉取请求) 页面
    // ===================================================================
    '/pulls': {
        "New pull request": "新建拉取请求",
        "Welcome to pull requests!": "欢迎来到拉取请求！",
        "Pull requests help you collaborate on code with other people.": "拉取请求可帮助您与他人协作处理代码。",
        "As pull requests are created, they’ll appear here in a searchable and filterable list.": "创建拉取请求后，它们将显示在此处的可搜索和可筛选列表中。",
        "To get started, you should": "要开始使用，您应该",
        "create a pull request": "创建一个拉取请求",
        "Filters": "筛选",
        "Filter Issues": "筛选拉取请求", // GitHub复用了组件，但此处应为PR语境
        "Open issues and pull requests": "开启的议题和拉取请求",
        "Your issues": "您的议题",
        "Your pull requests": "您的拉取请求",
        "Everything assigned to you": "所有分配给您的",
        "Everything mentioning you": "所有提及您的",
        "View advanced search syntax": "查看高级搜索语法",
        "Search all issues": "搜索所有拉取请求",
        "Label issues and pull requests for new contributors": "为新贡献者标记议题和拉取请求",
        "discover issues": "发现议题",
        "Good for newcomers": "适合新手",
        "ProTip!": "专业提示!",
        "Filter pull requests by the default branch with": "使用 ... 筛选默认分支的拉取请求"
    },
    // ===================================================================
    // Projects (项目) 页面
    // ===================================================================
    '/projects': {
        "Welcome to projects": "欢迎使用项目",
        "Built like a spreadsheet, project tables give you a live canvas to filter, sort, and group issues and pull requests. Tailor them to your needs with custom fields and saved views.": "项目功能类似于电子表格，为您提供了一个实时画布，用于筛选、排序和分组议题和拉取请求。您可以使用自定义字段和保存的视图来根据需要进行定制。",
        "Learn more": "了解更多",
        "Search all projects": "搜索所有项目",
        "Link a project": "链接项目",
        "New project": "新建项目",
        "Provide quick access to relevant projects.": "提供对相关项目的快速访问。",
        "Add projects to view them here.": "在此处添加项目以进行查看。",
        "Link projects": "链接项目",
        "Link a project to this repository": "将一个项目链接到此仓库",
        "Filter": "筛选"
    },
    // ===================================================================
    // Insights/Pulse (洞察/概览) 页面
    // ===================================================================
    '/pulse': {
        "Pulse": "概览",
        "Contributors": "贡献者",
        "Community": "社区",
        "Traffic": "流量",
        "Commits": "提交",
        "Code frequency": "代码频率",
        "Dependency graph": "依赖关系图",
        "Network": "关系网络",
        "Forks": "分支",
        "Actions Usage Metrics": "工作流使用指标",
        "Actions Performance Metrics": "工作流性能指标",
        "Period:": "时间段:",
        "1 week": "一周",
        "24 hours": "24小时",
        "3 days": "3天",
        "1 month": "一个月",
        "Overview": "总览",
        "Active pull requests": "活跃的拉取请求",
        "Active issues": "活跃的议题",
        "Merged pull requests": "已合并的拉取请求",
        "Open pull requests": "开放的拉取请求",
        "Closed issues": "已关闭的议题",
        "New issues": "新议题",
        "Excluding merges": "排除合并提交",
        "author has pushed": "位作者推送了",
        "authors have pushed": "位作者推送了",
        "commits to all branches": "次提交到所有分支",
        "commits to": "次提交到",
        "and": "以及",
        "On main": "在 main 分支上",
        "file has changed and there have been": "个文件被更改，包含",
        "files have changed and there have been": "个文件被更改，包含",
        "addition": "行新增",
        "additions": "行新增",
        "deletion": "行删除",
        "deletions": "行删除"
    },
    // ===================================================================
    // Security (安全) 页面
    // ===================================================================
    '/security': {
        "Security overview": "安全总览",
        "Reporting": "报告",
        "Policy": "策略",
        "Advisories": "安全建议",
        "Vulnerability alerts": "漏洞警报",
        "Code scanning": "代码扫描",
        "Secret scanning": "密钥扫描",
        "Security policy": "安全策略",
        "Disabled": "已禁用",
        "Define how users should report security vulnerabilities for this repository": "定义用户应如何为此仓库报告安全漏洞",
        "Set up a security policy": "设置安全策略",
        "Security advisories": "安全建议",
        "Enabled": "已启用",
        "View or disclose security advisories for this repository": "查看或公开此仓库的安全建议",
        "View security advisories": "查看安全建议",
        "Private vulnerability reporting": "私有漏洞报告",
        "Allow users to privately report potential security vulnerabilities": "允许用户私下报告潜在的安全漏洞",
        "Enable vulnerability reporting": "启用漏洞报告",
        "Dependabot alerts": "Dependabot 警报",
        "Get notified when one of your dependencies has a vulnerability": "当您的某个依赖项存在漏洞时获得通知",
        "Enable Dependabot alerts": "启用 Dependabot 警报",
        "Code scanning alerts": "代码扫描警报",
        "Needs setup": "需要设置",
        "Automatically detect common vulnerability and coding errors": "自动检测常见的漏洞和编码错误",
        "Set up code scanning": "设置代码扫描",
        "Secret scanning alerts": "密钥扫描警报",
        "Get notified when a secret is pushed to this repository": "当密钥被推送到此仓库时获得通知",
        "View detected secrets": "查看检测到的密钥"
    },
    // ===================================================================
    // Wiki (百科) 页面
    // ===================================================================
    '/wiki': {
        "Welcome to the": "欢迎来到",
        "wiki!": "的百科！",
        "Wikis provide a place in your repository to lay out the roadmap of your project, show the current status, and document software better, together.": "百科为您的仓库提供了一个用于规划项目路线图、展示当前状态以及更好地共同编写软件文档的地方。",
        "Create the first page": "创建第一个页面"
    },
    // ===================================================================
    // Settings (设置) 页面
    // ===================================================================
    '/settings': {
        "General": "通用", "Access": "访问", "Collaborators": "协作者", "Moderation options": "管理选项", "Interaction limits": "交互限制", "Code review limits": "代码审查限制",
        "Code and automation": "代码和自动化", "Branches": "分支", "Tags": "标签", "Rules": "规则", "Rulesets": "规则集", "Runners": "运行器",
        "Webhooks": "Webhooks", "Environments": "环境", "Pages": "页面", "Advanced Security": "高级安全", "Deploy keys": "部署密钥",
        "Secrets and variables": "密钥和变量", "Integrations": "集成", "GitHub Apps": "GitHub 应用", "Email notifications": "邮件通知",
        "Save changes": "保存更改", "Repository name": "仓库名称", "Rename": "重命名", "Renaming...": "重命名中…", "was not changed": "未被更改",
        "Template repository": "模板仓库", "Learn more about template repositories": "了解更多关于模板仓库的信息",
        "Require contributors to sign off on web-based commits": "要求贡献者对网页版提交进行签名",
        "Enabling this setting will require contributors to sign off on commits made through GitHub’s web interface.": "启用此设置将要求贡献者对通过 GitHub 网页界面进行的提交进行签名",
        "Signing off is a way for contributors to affirm that their commit complies with the repository's terms, commonly the": "签名是贡献者确认其提交符合仓库条款的一种方式，通常是",
        "Developer Certificate of Origin (DCO)": "开发者原创证书 (DCO)", "Learn more about signing off on commits": "了解更多关于提交签名的信息",
        "Default branch": "默认分支", "The default branch is considered the “base” branch in your repository, against which all pull requests and code commits are automatically made, unless you specify a different branch.": "默认分支是您仓库中的“基础”分支，所有的拉取请求和代码提交都会自动以此为目标，除非您指定了其他分支",
        "Rename branch": "重命名分支", "Switch to another branch": "切换到其他分支",
        "Social preview": "社交媒体预览", "Upload an image to customize your repository’s social media preview.": "上传一张图片来自定义您仓库的社交媒体预览",
        "Images should be at least 640×320px (1280×640px for best display).": "图片尺寸应至少为 640×320像素 (为获得最佳显示效果，建议使用 1280×640像素)",
        "Upload an image...": "上传图片…", "Edit": "编辑", "Download template": "下载模板", "Features": "功能", "Wikis": "百科", "Wikis host documentation for your repository.": "百科为您的仓库提供文档托管",
        "Restrict editing to collaborators only": "仅限协作者编辑", "Public wikis will still be readable by everyone.": "公开的百科对所有人依然可见",
        "Issues integrate lightweight task tracking into your repository.": "议题将轻量级任务追踪集成到您的仓库中",
        "Keep projects on track with issue labels and milestones, and reference them in commit messages.": "通过议题的标签和里程碑来保持项目同步，并在提交信息中引用它们",
        "Get organized with issue templates": "通过议题模板变得井然有序", "Set up templates": "设置模板",
        "Give contributors issue templates that help you cut through the noise and help them push your project forward.": "为贡献者提供议题模板，能帮您减少干扰信息，并帮助他们推动您的项目前进",
        "Sponsorships": "赞助", "Help your community know how to financially support this repository.": "帮助您的社区了解如何为该仓库提供财务支持",
        "Display a \"Sponsor\" button": "显示“赞助”按钮", "Edit funding links": "编辑赞助链接",
        "Add links to GitHub Sponsors or third-party methods your repository accepts for financial contributions to your project.": "添加指向 GitHub Sponsors 或您的仓库接受财务贡献的第三方途径的链接",
        "Preserve this repository": "保存此仓库", "Include this code in the": "将此代码纳入", "GitHub Archive Program": "GitHub存档计划",
        "Discussions is the space for your community to have conversations, ask questions and post answers without opening issues.": "“讨论”是您的社区进行对话、提出问题和发布答案的地方，而无需创建议题",
        "Get started with Discussions": "开始使用“讨论”", "Set up discussions": "设置讨论",
        "Engage your community by having discussions right in your repository, where your community already lives": "在您的社区已经所在的仓库中直接进行讨论，以吸引他们参与进来",
        "Projects on GitHub are created at the repository owner's level (organization or user) and can be linked to a repository's Projects tab.": "GitHub 上的“项目”是在仓库所有者（组织或用户）级别创建的，可以链接到仓库的“项目”选项卡",
        "Projects are suitable for cross-repository development efforts such as feature work, complex product roadmaps or even Issue triage.": "项目适用于跨仓库的开发工作，例如功能开发、复杂的产品路线图，甚至是议题分类",
        "Pull Requests": "拉取请求", "When merging pull requests, you can allow any combination of merge commits, squashing, or rebasing.": "在合并拉取请求时，您可以允许合并提交、压缩合并或变基合并的任意组合",
        "At least one option must be enabled.": "必须至少启用一个选项", "If you have linear history requirement enabled on any protected branch, you must enable squashing or rebasing.": "如果您在任何受保护的分支上启用了线性历史记录要求，则必须启用压缩或变基合并",
        "Allow merge commits": "允许合并提交", "Add all commits from the head branch to the base branch with a merge commit.": "通过一次合并提交，将头部分支的所有提交添加到基础分支",
        "Default commit message": "默认提交信息", "Presented when merging a pull request with merge.": "在使用“合并提交”方式合并拉取请求时显示", "Default message": "默认消息",
        "Pull request title": "拉取请求标题", "Pull request title and description": "拉取请求标题和描述", "Pull request title and commit details": "拉取请求标题和提交详情",
        "Allow squash merging": "允许压缩合并", "Combine all commits from the head branch into a single commit in the base branch.": "将头部分支的所有提交合并为基础分支中的单个提交",
        "Presented when merging a pull request with squash.": "在使用“压缩合并”方式合并拉取请求时显示",
        "Allow rebase merging": "允许变基合并", "Add all commits from the head branch onto the base branch individually.": "将头部分支的所有提交逐个添加到基础分支上",
        "Control how and when users are prompted to update their branches if there are new changes available in the base branch.": "控制当基础分支有新更改时，如何以及何时提示用户更新其分支",
        "Always suggest updating pull request branches": "总是建议更新拉取请求分支", "Whenever there are new changes available in the base branch, present an “update branch” option in the pull request.": "当基础分支有新更改可用时，在拉取请求中显示“更新分支”选项",
        "You can allow setting pull requests to merge automatically once all required reviews and status checks have passed.": "您可以允许拉取请求在所有必需的审查和状态检查通过后自动合并",
        "Allow auto-merge": "允许自动合并", "Waits for merge requirements to be met and then merges automatically.": "等待合并要求满足后自动合并", "Learn more": "了解更多",
        "After pull requests are merged, you can have head branches deleted automatically.": "在拉取请求合并后，您可以让头部分支自动删除",
        "Automatically delete head branches": "自动删除头部分支", "Deleted branches will still be able to be restored.": "被删除的分支仍然可以恢复",
        "Archives": "存档", "When creating source code archives, you can choose to include files stored using Git LFS in the archive.": "在创建源代码存档时，您可以选择将使用 Git LFS 存储的文件包含在存档中",
        "Include Git LFS objects in archives": "在存档中包含 Git LFS 对象", "Git LFS usage in archives is billed at the same rate as usage with the client.": "存档中 Git LFS 的使用费用与客户端的使用费率相同",
        "Pushes": "推送", "Limit how many branches and tags can be updated in a single push": "限制单次推送可更新的分支和标签数量",
        "Pushes will be rejected if they attempt to update more than this.": "如果推送试图更新超过此限制的分支和标签，将会被拒绝",
        "Learn more about this setting": "了解有关此设置的更多信息", "and send us your": "并向我们发送您的", "feedback": "反馈",
        "Auto-close issues with merged linked pull requests": "自动关闭与已合并的拉取请求相关联的议题",
        "After merging a pull request, linked issues can be closed automatically.": "合并拉取请求后，可以自动关闭关联的议题",
        "Whenever linked pull requests have merged, auto-close the issue.": "当关联的拉取请求合并后，自动关闭此议题",
        "Danger Zone": "危险区域", "Change repository visibility": "更改仓库可见性", "For security reasons, you cannot change the visibility of a fork.": "出于安全原因，您无法更改一个 Fork 仓库的可见性","Change visibility": "更改可见性",
        "Disable branch protection rules": "禁用分支保护规则", "Disable branch protection rules enforcement and APIs": "禁用分支保护规则的强制执行和API",
        "Transfer ownership": "转移所有权", "Transfer this repository to another user or to an organization where you have the ability to create repositories.": "将此仓库转移给其他用户或您有权创建仓库的组织", "Transfer": "转移",
        "Leave fork network": "离开分支网络", "Unlink this repository from the fork network and make it standalone.": "将此仓库从分支网络中解绑，使其成为一个独立的仓库",
        "Archive this repository": "存档此仓库", "Mark this repository as archived and read-only.": "将此仓库标记为已存档和只读",
        "Delete this repository": "删除此仓库", "Once you delete a repository, there is no going back. Please be certain.": "一旦删除仓库，将无法恢复。请务必确认",
    }
};

/**
 * ===================================================================================
 * 核心翻译逻辑
 * ===================================================================================
 */

// 辅助函数：转义正则表达式特殊字符
const escapeRegex = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const translateNode = (node, dictionary, sortedKeys) => {
    // 安全检查：如果父元素是代码区、用户内容区或不可翻译区域，则跳过
    if (node.parentElement && node.parentElement.closest('pre, code, kbd, .markdown-body, .blob-code-content, .commit-title, .commit-desc, .branch-name, [data-original-text], .notranslate, script, style, .repo')) {
        return;
    }
    
    let text = node.nodeValue;
    for (const key of sortedKeys) {
        // 使用带有单词边界 \b 的正则表达式进行替换，确保只替换独立的单词
        const regex = new RegExp(`\\b${escapeRegex(key)}\\b`, 'g');
        if (regex.test(text)) {
            text = text.replace(regex, dictionary[key]);
        }
    }
    if (node.nodeValue !== text) {
       node.nodeValue = text;
    }
};

const translateAttributes = (element, dictionary, sortedKeys) => {
    ['placeholder', 'aria-label', 'title', 'data-content'].forEach(attr => {
        if (element.hasAttribute(attr)) {
            let originalText = element.getAttribute(attr);
            for (const key of sortedKeys) {
                const regex = new RegExp(`\\b${escapeRegex(key)}\\b`, 'g');
                 if (regex.test(originalText)) {
                    originalText = originalText.replace(regex, dictionary[key]);
                }
            }
            if (element.getAttribute(attr) !== originalText) {
                element.setAttribute(attr, originalText);
            }
        }
    });
};

// 主翻译函数
const runTranslation = () => {
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split('/').filter(p => p);
    let activeDictionary = { ...pageTranslations.global };

    // 确定当前页面类型并加载相应词典
    if (pathParts.length === 1 && document.querySelector('.vcard-names-container')) {
        Object.assign(activeDictionary, pageTranslations['/profile']);
    } else if (pathParts.length >= 2) {
        const repoPage = pathParts[2];
        if (repoPage === 'issues') {
             Object.assign(activeDictionary, pageTranslations['/issues']);
        } else if (repoPage === 'pulls') {
            Object.assign(activeDictionary, pageTranslations['/pulls']);
        } else if (repoPage === 'projects') {
             Object.assign(activeDictionary, pageTranslations['/projects']);
        } else if (repoPage === 'settings') {
             Object.assign(activeDictionary, pageTranslations['/settings']);
        } else if (repoPage === 'pulse') {
             Object.assign(activeDictionary, pageTranslations['/pulse']);
        } else if (repoPage === 'security') {
             Object.assign(activeDictionary, pageTranslations['/security']);
        } else if (repoPage === 'wiki') {
             Object.assign(activeDictionary, pageTranslations['/wiki']);
        } else if (pathParts.length === 2 && !repoPage) {
             Object.assign(activeDictionary, pageTranslations['/']);
        }
    } else if (pathParts.length === 0) {
        // 可能是 Dashboard, 暂时只应用全局翻译
    }


    const sortedKeys = Object.keys(activeDictionary).sort((a, b) => b.length - a.length);
    if (sortedKeys.length === 0) return;

    // 翻译文本节点
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while(node = walker.nextNode()) {
        translateNode(node, activeDictionary, sortedKeys);
    }

    // 翻译属性
    document.querySelectorAll('[placeholder], [aria-label], [title], [data-content]').forEach(el => translateAttributes(el, activeDictionary, sortedKeys));
};


// 使用 setInterval 持续执行翻译，以对抗SPA的动态内容覆盖
setInterval(runTranslation, 300);

console.log('GitHub 汉化插件已加载');