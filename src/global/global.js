// 全局变量

// 系统根路径，请勿在最后加入'/'
const helpRootPath = "/help"
const newsRootPath = "/news"
const mirrorRootPath = "/"
const helpMarkDownRootPath = "/help/_posts"
const newsMarkDownRootPath = "/news/_posts"
const distrosRequestPath = "/distros.json"
const newsListRequestPath = "/news-list.json"
const infoRequestPath = "/info.json"
const homeTitle = "吉林大学开源镜像站"
const helpTitle = "帮助 - 吉林大学开源镜像站"
const newsTitle = "新闻 - 吉林大学开源镜像站"
const sidePanelLinks = [
    {
        i18nName: "side-panel.mirror-request",
        href: "https://github.com/jlulug/issues/issues/new/choose",
    },
    {
        i18nName: "side-panel.report-problem",
        href: "https://github.com/jlulug/issues/issues/new/choose",
    },
    {
        i18nName: "side-panel.jlulug",
        href: "https://jlulug.org",
    },
    {
        i18nName: "side-panel.jlunic",
        href: "https://nic.jlu.edu.cn",
    },
]

export default {
    helpRootPath,
    newsRootPath,
    mirrorRootPath,
    helpMarkDownRootPath,
    newsMarkDownRootPath,
    distrosRequestPath,
    newsListRequestPath,
    infoRequestPath,
    homeTitle,
    helpTitle,
    newsTitle,
    sidePanelLinks
}