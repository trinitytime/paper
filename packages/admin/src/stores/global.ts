interface SidebarItemType {
  title: string
  url: string
}

interface SidebarType {
  title: string
  items: SidebarItemType[]
}

export const useGlobalStore = defineStore('global', () => {
  const isDark = useDark()
  const sidebar = ref<SidebarType[]>([])

  function setSidebar(value: SidebarType[]) {
    sidebar.value = value
  }

  return { isDark, sidebar, setSidebar }
})
