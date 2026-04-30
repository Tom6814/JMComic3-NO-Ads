# JMComic-NO-Ads
自用，JMComic3 的去广告/纯净版构建仓库。

## 下载
- Releases 页面下载 `jmcomic3_adfree_<版本>.apk`

## 自动化
- 手动执行：`python scripts/pipeline.py`
- 自动执行：每小时检查上游 `hect0x7/JMComic-APK` 最新 Release，有新版本则自动下载→解包→去广/小美化→重打包签名→发布 Release，并将解包后的修改文件提交到仓库
- 失败日志：`artifacts/logs/<upstream_tag>.json`

## 说明
- 该仓库保存的是解包后的 APK 文件（React chunks、资源等）及自动化脚本
- APK 使用新签名重新签名，仅保证“纯净版→纯净版”可覆盖升级，不保证覆盖官方签名包
