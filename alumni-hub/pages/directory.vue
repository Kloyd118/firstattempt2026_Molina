<template>
  <div class="max-w-5xl mx-auto space-y-6" v-if="data">
    <div class="flex items-center justify-between border-b pb-4">
      <h1 class="text-2xl font-bold text-[#0a1f44]">Alumni Directory</h1>
    </div>

    <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-wrap gap-4 items-center">
      <input v-model="searchQuery" type="text" placeholder="Search by name..." class="flex-1 min-w-[200px] border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a1f44]"/>
      <select class="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a1f44]">
        <option value="">All Batches</option>
        <option value="2015">Class of 2015</option>
        <option value="2018">Class of 2018</option>
        <option value="2020">Class of 2020</option>
      </select>
      <select class="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a1f44]">
        <option value="">All Industries</option>
        <option value="Tech">Tech</option>
        <option value="Finance">Finance</option>
        <option value="Marketing">Marketing</option>
      </select>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div v-for="alumni in filteredDirectory" :key="alumni.id" class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
        <div class="w-16 h-16 bg-blue-100 text-[#0a1f44] rounded-full flex items-center justify-center text-xl font-bold mb-3">
          {{ alumni.name.charAt(0) }}
        </div>
        <h3 class="font-bold text-gray-800">{{ alumni.name }}</h3>
        <p class="text-xs text-gray-500 mb-1">Class of {{ alumni.batch }} • {{ alumni.course }}</p>
        <p class="text-xs text-gray-500 mb-4">{{ alumni.industry }} | {{ alumni.location }}</p>
        
        <NuxtLink to="/chat" class="mt-auto w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 rounded-lg transition text-sm">
          Connect & Message
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const { data } = await useFetch('/api/data')
const searchQuery = ref('')

const filteredDirectory = computed(() => {
  if (!data.value) return []
  return data.value.directory.filter(a => a.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
})
</script>