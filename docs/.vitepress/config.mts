import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Qingyuan Lu",
  description: "Personal site and portfolio",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Projects', link: '/projects' }
    ],

    sidebar: [
      //TODO: how to have sidebar item that's just a direct link and not a list? send to abt page
      {
        text: 'General',
        items: [
          { text: 'Home', link: '/' },
          { text: 'About', link: '/about' },
        ]
      },

      {
        text: 'Project samples',
        items: [
          { text: 'Project directory', link: '/projects'},
          {
            text: 'Work projects', items: [
              {}
            ]
          },
          {
            text: 'Course projects', items: [
              {text: 'MIT 9.60 Machine-Motivated Human Vision', link: '/960'}
            ]
          }
        ]
      }

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/qylu4156' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/qingyuanlu/' }
    ]
  }
})
