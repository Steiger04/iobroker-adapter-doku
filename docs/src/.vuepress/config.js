const { description } = require('../../package');

module.exports = {
    title: '[Name of the ioBroker adapter]',
    description: 'Documentation for the [name] adapter.',
    dest: 'dist', // Added for ioBroker

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        logo: '/images/ioBroker.svg',
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: 'Letzte Aktualisierung',
        nav: [
            { text: 'Release Notes', link: '/versions/' },
            { text: 'Admin', link: '/admin/' },
            { text: 'IoT', link: '/iot/' },
        ],
        sidebarDepth: 2,
        sidebar: [
            ['/versions/', 'Release Notes'],
            ['/admin/', 'Admin'],
            ['/iot/', 'IoT']
        ],
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        ['@vuepress/last-updated',
            {
                transformer: (timestamp) => {
                    // Don't forget to install moment yourself
                    const moment = require('moment');
                    moment.locale('de');
                    return moment(timestamp).fromNow();
                }
            }],
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
};
