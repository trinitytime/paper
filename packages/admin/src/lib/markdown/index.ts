import { tocPlugin } from '@mdit-vue/plugin-toc'
import markdownItAbbr from 'markdown-it-abbr'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItAttrs from 'markdown-it-attrs'
import markdownItContainer from 'markdown-it-container'
import markdownItDeflist from 'markdown-it-deflist'
import markdownItFootnote from 'markdown-it-footnote'
import markdownItIns from 'markdown-it-ins'
import markdownItMark from 'markdown-it-mark'
import markdownItSub from 'markdown-it-sub'
import markdownItSup from 'markdown-it-sup'
import markdownItTaskLists from 'markdown-it-task-lists'
import Markdown from 'unplugin-vue-markdown/vite'
import { linkPlugin } from './link'

export default () => {
  return Markdown({
    wrapperComponent: 'Markdown',
    markdownItSetup: (md) => {
      md.use(markdownItAnchor)
        .use(markdownItAttrs)
        .use(tocPlugin)
        .use(markdownItSub)
        .use(markdownItSup)
        .use(markdownItFootnote)
        .use(markdownItDeflist)
        .use(markdownItAbbr)
        .use(markdownItIns)
        .use(markdownItMark)
        .use(markdownItTaskLists)
        .use(markdownItContainer)
        .use(linkPlugin)
    },
  })
}
