<script setup>
import { useHead } from '#imports'

useHead({
  title: 'AdDU Alumni Career Hub',
  link: [
    { rel: 'manifest', href: '/manifest.webmanifest' }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
