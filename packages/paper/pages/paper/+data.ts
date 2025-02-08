import { usePageContext } from 'vike-react/usePageContext'
import type { PageContext } from 'vike/types'
import { client } from '../../lib/client'

export const data = async (pageContext: PageContext) => {
  const [, , ...url] = pageContext.routeParams.pathname.split('/')

  const res = await client.paper.getPaper({
    body: {
      url: url.join('/'),
    },
  })

  //  await new Promise((resolve) => setTimeout(resolve, 1000))

  if (res.status !== 200) {
    return {
      html: 'Not found',
    }
  }

  return {
    html: res.body.html,
    data: ['test', 'test2', pageContext.routeParams.id],
  }
}
