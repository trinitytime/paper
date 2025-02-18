<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue'

</script>

<template>
  <div>
    <div>Sidebar</div>
    <Sidebar>
      <router-view />
    </Sidebar>
  </div>
</template>