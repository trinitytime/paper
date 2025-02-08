import parse from 'html-react-parser'
import { useData } from 'vike-react/useData'
import { usePageContext } from 'vike-react/usePageContext'

function CustomComponent() {
  return <div>Hello I'm Custom Component</div>
}

// 동적 컴포넌트 맵
const componentMap: Record<string, () => React.ReactNode> = {
  customcomponent: CustomComponent,
}

export default function Page(what) {
  const data = useData<{ html: string }>()

  console.log('data', data)

  const context = usePageContext()

  console.log('i am page')
  console.log(context.routeParams)

  console.log(what)

  const html = parse(data.html, {
    trim: true,
    replace: (domNode) => {
      if (domNode.type === 'tag' && componentMap[domNode.name]) {
        const Component = componentMap[domNode.name]
        return <Component />
      }
    },
  })

  return (
    <>
      <div>Hello World</div>
      {html}
    </>
  )
}
