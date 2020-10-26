const {description} = require('../../package')

module.exports = {
    title: 'VUEPRESS-THEME',
    description: description,
    head: [
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/images/favicon.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/images/favicon.png"}],
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}]
    ],
    themeConfig: {
        logo: '/assets/images/icone.png',
        smoothScroll: true,
        editLinks: false,
        docsDir: '',
        lastUpdated: false,
        nav: [
            {
                text: 'Documentation',
                link: '/documents/bestpratices',
            },
            {
                text: 'Protect',
                link: '/protect/',
            },
            {
                text: 'Produto',
                items: [
                    { text: 'Group1', items: [
                            { text: 'SubGroup1', link: '/product/' },
                            { text: 'SubGroup1', link: '/product/' }
                        ] },
                    { text: 'Group2', items: [
                            { text: 'SubGroup1', link: '/config/' },
                            { text: 'SubGroup1', link: '/config/' }
                        ] }
                ]
            },
            {
                text: 'Config',
                link: '/config/'
            },
            {
                text: 'API Reference',
                link: '/api/'
            }
        ],
        sidebar: [
            {
                title: 'Overview',
                collapsable: false,
                children: [
                    ['/overview/content','About'],
                    ['/overview/faqs' , 'FAQs' ]
                ]
            },
            {
                title: 'Documentation',
                collapsable: false,
                children: [
                    ['/documents/bestpratices','About'],
                    ['/documents/markdown','Markdown'],
                    ['/documents/mkdocs' , 'MKDocs' ]
                ]
            }
        ],
    },
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom'
    ]
}
