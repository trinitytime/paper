<script setup lang="ts">
import { useGlobalStore } from './stores/global'
const { setSidebar } = useGlobalStore()

// 사이드바 설정
setSidebar([{
  title: 'Admin',
  items: [
    { title: 'Dashboard', url: '/admin' },
    { title: 'Users', url: '/admin/users' },
    { title: 'Settings', url: '/admin/settings' },
  ],
}])

</script>

<template>
  <div class="bg-background text-foreground">
    <RouterView />
  </div>
</template>