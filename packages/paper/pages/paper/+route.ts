import type { RouteSync } from 'vike/types'

export function route(pageContext): ReturnType<RouteSync> {
  const urlPathname = pageContext.urlPathname

  if (!urlPathname.startsWith('/paper/')) {
    return false
  }

  return {
    routeParams: {
      pathname: urlPathname,
    },
  }
}
