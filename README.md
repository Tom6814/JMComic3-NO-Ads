# JMComic-NO-Ads
自用，JMComic3的去广告版。

## 特性说明
- **完全去除广告**：移除了所有应用内广告、等待页面、浮动广告。
- **暗色模式修复**：重写了暗色模式的状态同步逻辑，完美适配系统的深色主题切换。
- **移除游戏板块**：精简了底部导航栏，移除了游戏相关的路由和入口。
- **防封处理**：修改了包名为 `com.jmcomic3.qqq` 以防止相关检测和拦截。

## 如何使用 / 下载
 [Releases](../../releases) 页面下载 `jmcomic3_adfree_<版本>.apk` 安装包。

## 源码说明
此仓库包含的是解包并经过修改后的 APK 内部文件（React Chunks, 资源文件等），您可以使用 `jar c0Mf` 打包，再用 `zipalign` 进行对齐，并使用 `apksigner` 进行 V2 签名后安装。

## 自动化
- 手动执行：`python scripts/pipeline.py`
- 需要发布 Release 时，优先提供 `GITHUB_TOKEN`（未提供则尝试使用仓库 origin 的 x-access-token）
- 失败日志：`artifacts/logs/<upstream_tag>.json`
