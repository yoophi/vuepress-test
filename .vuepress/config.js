module.exports = {
    title: 'Sample Site',
    description: 'This is a simple description.',
    themeConfig: {
        logo: '/assets/img/logo.jpeg',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Archive', link: '/archive/' },
            { text: 'Tags', link: '/tag/' },
        ],
        sidebar: [
            {
                title: 'Group 1',   // required
                path: '/foo/',      // optional, which should be a absolute path.
                collapsable: false, // optional, defaults to true
                sidebarDepth: 1,    // optional, defaults to 1
                children: [
                    '/'
                ]
            },
            {
                title: 'Group 2',
                children: [ /* ... */]
            }
        ]

    }
}