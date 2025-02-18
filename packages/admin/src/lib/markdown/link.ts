// markdown-it plugin for:
// 1. adding target="_blank" to external links
// 2. normalize internal links to end with `.html`

import { URL } from 'node:url'
import type MarkdownIt from 'markdown-it'

const indexRE = /(^|.*\/)index.md(#?.*)$/i
export const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i

export function isExternal(path: string): boolean {
  return EXTERNAL_URL_RE.test(path)
}

export const linkPlugin = (md: MarkdownIt, externalAttrs: Record<string, string>, base: string) => {
  md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    const target = token.attrGet('target')
    const url = token.attrGet('href')

    if (null === target && url && !isExternal(url)) {
      token.attrSet('router-link', url)
    }

    return self.renderToken(tokens, idx, options)
  }
}
