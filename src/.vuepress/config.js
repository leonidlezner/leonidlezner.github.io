const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Leonid\'s Digital Garden',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#faca30' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],

  dest: 'dist/',

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'leonidlezner/leonidlezner.github.io',
    editLinks: true,
    docsDir: '',
    editLinkText: 'Bearbeiten',
    docsDir: 'src',
    docsBranch: 'main',
    lastUpdated: true,
    displayAllHeaders: true,
    nav: [
      {
        text: 'Twitter',
        link: 'https://twitter.com/leonidlezner',
      },
      {
        text: 'Blog',
        link: 'https://leonidlezner.de',
      },
      {
        text: 'Impressum',
        link: 'https://leonidlezner.de/impressum',
      },
    ],
    sidebar: [
        {
          title: 'Themen',
          collapsable: false,
          children: [
            '/de/coaching/',
            '/de/podcasting/',
            '/de/socialmedia/',
            '/de/business/',
          ]
        }
      ],
    logo: '/logo.png',
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
  /*
  locales: {
    '/de/': {
      lange: 'de-DE',
      title: 'Leonids Digitaler Garten'
    }
  },*/
}
