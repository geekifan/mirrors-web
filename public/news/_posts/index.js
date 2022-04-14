const news = [{'name': '2021-04-01-april-fools-day-cd-delivery', 'text': 'BFSU 推出“破镜重圆”服务', 'date': '2021-04-01'}, {'name': '2021-02-05-remove-nodesource', 'text': '关于移除 nodesource 镜像的通知', 'date': '2021-02-05'}, {'name': '2020-10-29-close-deepin', 'text': '关于移除 Deepin 镜像中部分内容的通知（已恢复）', 'date': '2020-10-29'}, {'name': '2020-10-21-opentuna-questionnaire', 'text': 'OpenTUNA 调查问卷', 'date': '2020-10-21'}, {'name': '2020-08-31-opentuna-mirror', 'text': 'OpenTUNA 镜像站上线', 'date': '2020-08-31'}, {'name': '2020-05-02-bfsu-mirror', 'text': '北京外国语大学镜像站上线', 'date': '2020-05-02'}, {'name': '2020-04-01-april-fool-2020', 'text': '镜像站服务器变更', 'date': '2020-04-01'}, {'name': '2020-03-03-dark-mode-and-more', 'text': '深色模式、更多和更少', 'date': '2020-03-03'}, {'name': '2019-07-26-release-logs', 'text': '本站访问日志现已公开发布', 'date': '2019-07-26'}, {'name': '2019-07-21-anaconda-restored', 'text': 'Anaconda 相关镜像已恢复', 'date': '2019-07-21'}, {'name': '2019-06-15-restore-anaconda', 'text': 'Anaconda 镜像即将恢复', 'date': '2019-06-15'}, {'name': '2019-04-16-close-anaconda-service', 'text': '关于停止Anaconda镜像服务的通知', 'date': '2019-04-16'}, {'name': '2018-04-01-oh-my-tuna', 'text': '号外：现推出“一键使用TUNA”服务', 'date': '2018-04-01'}, {'name': '2018-02-27-move-to-youngcow-yun', 'text': '镜像站扩容维护通知', 'date': '2018-02-27'}, {'name': '2017-12-25-bravo-no-space', 'text': '镜像站服务器故障通知', 'date': '2017-12-25'}, {'name': '2017-10-17-neomirrors-extend', 'text': '镜像站扩容维护通知', 'date': '2017-10-17'}, {'name': '2017-09-19-stop-https-on-ftp2-c-d', 'text': '停用 ftp2.cn.debian.org 的 HTTPS 访问', 'date': '2017-09-19'}, {'name': '2017-08-02-move-to-Lee-Shau-kee', 'text': '镜像站维护通知', 'date': '2017-08-02'}, {'name': '2017-05-28-llvm-repos', 'text': '新增 LLVM 编译器套件 Git 仓库镜像', 'date': '2017-05-28'}, {'name': '2017-05-11-lineage-and-adobe-fonts', 'text': '新增 Lineage 与 Adobe 开源字体镜像', 'date': '2017-05-11'}, {'name': '2017-04-01-april-fools-day', 'text': '我们做出了一个艰难的决定', 'date': '2017-04-01'}, {'name': '2017-03-14-ipv6-failure', 'text': '镜像站 IPv6 国际链路故障', 'date': '2017-03-14'}, {'name': '2016-12-27-chromiumos', 'text': '新增 Chromium OS 镜像', 'date': '2016-12-27'}, {'name': '2016-12-03-hardware-maintenance', 'text': '镜像站将于 12/4 10:30 进行停机维护', 'date': '2016-12-03'}, {'name': '2016-11-30-rsync-unrestricted', 'text': '不再对 rsync 服务磁盘 I/O 进行限制', 'date': '2016-11-30'}, {'name': '2016-11-17-rsync-restriction', 'text': '暂时对 rsync 服务磁盘 I/O 进行限制', 'date': '2016-11-17'}, {'name': '2016-11-06-tensorflow-and-others', 'text': '新增 Tensorflow 等一系列镜像', 'date': '2016-11-06'}, {'name': '2016-08-18-bunch-of-news', 'text': '新增一系列镜像', 'date': '2016-08-18'}, {'name': '2016-05-07-homebrew-bottles', 'text': '新增 Homebrew-bottles 镜像', 'date': '2016-05-07'}, {'name': '2016-05-06-homebrew', 'text': 'Homebrew 镜像结构调整', 'date': '2016-05-06'}, {'name': '2016-04-07-alpine-anaconda', 'text': '新增 Alpine, Anaconda 镜像', 'date': '2016-04-07'}, {'name': '2016-04-03-bananian', 'text': '新增 Bananian 镜像', 'date': '2016-04-03'}, {'name': '2016-04-01-openwrt-trunk', 'text': '暂停 OpenWRT Trunk 镜像', 'date': '2016-04-01'}, {'name': '2016-02-24-packman-mongodb-anaconda', 'text': 'Packman, MongoDB, Anaconda 镜像', 'date': '2016-02-24'}, {'name': '2015-12-21-aosp-monthly', 'text': 'AOSP 每月打包', 'date': '2015-12-21'}, {'name': '2015-11-11-gitlab-ce', 'text': 'Chakra, Mageia, gitlab-ce 镜像', 'date': '2015-11-11'}, {'name': '2015-11-04-cygwin', 'text': 'Cygwin 镜像', 'date': '2015-11-04'}, {'name': '2015-10-13-aosp-doc-fix', 'text': 'AOSP 文档更新', 'date': '2015-10-13'}, {'name': '2015-10-10-docker-update', 'text': 'Docker APT/YUM 镜像更新', 'date': '2015-10-10'}, {'name': '2015-10-09-aosp-maintenance', 'text': 'AOSP 镜像调整', 'date': '2015-10-09'}]