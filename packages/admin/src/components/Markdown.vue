<script setup lang="ts">
const router = useRouter()
const content = ref<HTMLElement>()

// 모든 내부 link를 router-link로 변경
watchEffect(() => {
  if (content.value) {
    const links = content.value.querySelectorAll("a[router-link]")

    for (const aTag of Array.from(links)) {
      const url = aTag.getAttribute("router-link")
      if (url) {
        aTag.addEventListener("click", (e) => {
          e.preventDefault()
          router.push(url)
        })
      }
    }
  }
})


onMounted(() => {

})
</script>

<template>
  <div ref="content" class="prose dark:prose-invert max-w-none">
    <slot></slot>
  </div>
</template>