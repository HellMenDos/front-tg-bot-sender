import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-EN',
  title: 'TgBotSender',
  description: 'Library for sending messages in telegram to your bot',

  theme: defaultTheme({
    navbar: ['/', '/nodejs', '/python'],
  }),

  bundler: viteBundler(),
})
