<template>
  <div class="min-h-screen bg-gray-50 flex flex-col md:flex-row font-sans">
    <aside v-if="!isLoginPage" class="w-full md:w-64 bg-[#0a1f44] text-white flex flex-col shadow-xl z-20">
      <div class="p-6 text-center border-b border-blue-900/50">
        <h1 class="text-xl font-bold text-yellow-400">Alumni Career Hub</h1>
        <p class="text-sm text-blue-200">Ateneo de Davao</p>
      </div>
      <nav class="flex-1 p-4 space-y-1">
        <NuxtLink to="/" class="block px-4 py-3 rounded-lg hover:bg-white/10 transition" exact-active-class="bg-blue-800/50 text-yellow-400 font-bold border-l-4 border-yellow-400">Home</NuxtLink>
        <NuxtLink to="/profile" class="block px-4 py-3 rounded-lg hover:bg-white/10 transition" exact-active-class="bg-blue-800/50 text-yellow-400 font-bold border-l-4 border-yellow-400">My Profile</NuxtLink>
        <NuxtLink to="/events" class="block px-4 py-3 rounded-lg hover:bg-white/10 transition" exact-active-class="bg-blue-800/50 text-yellow-400 font-bold border-l-4 border-yellow-400">Networking & Events</NuxtLink>
        
        <a href="#" class="block px-4 py-3 rounded-lg text-gray-400 cursor-default hover:text-gray-300">News & Updates</a>
        <a href="#" class="block px-4 py-3 rounded-lg text-gray-400 cursor-default hover:text-gray-300">Document Request</a>
        <a href="#" class="block px-4 py-3 rounded-lg text-gray-400 cursor-default hover:text-gray-300">Job Opportunity</a>
        <a href="#" class="block px-4 py-3 rounded-lg text-gray-400 cursor-default hover:text-gray-300">Career Opportunities</a>
        <a href="#" class="block px-4 py-3 rounded-lg text-gray-400 cursor-default hover:text-gray-300">Donations</a>
      </nav>
      <div class="p-4 border-t border-blue-900/50">
        <NuxtLink to="/login" class="block w-full text-center px-4 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition font-medium">Sign Out</NuxtLink>
      </div>
    </aside>

    <main class="flex-1 p-6 md:p-8 overflow-y-auto">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const isLoginPage = computed(() => route.path === '/login')
</script>