import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'ru-RU',
  title: 'TgBotSender',
  description: 'Библиотека для отправки сообщений в телеграм в вашего бота',

  theme: defaultTheme({
    navbar: ['/', '/nodejs', '/python'],
  }),

  bundler: viteBundler(),
})
