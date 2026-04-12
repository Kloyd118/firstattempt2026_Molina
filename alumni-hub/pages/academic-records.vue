<template>
  <div class="max-w-3xl mx-auto space-y-6" v-if="data">
    <div class="flex items-center gap-4 border-b pb-4">
      <NuxtLink to="/profile" class="text-gray-500 hover:text-[#0a1f44] transition text-xl font-bold">←</NuxtLink>
      <h1 class="text-2xl font-bold text-[#0a1f44]">Academic Records</h1>
    </div>

    <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
      <div class="flex items-center justify-center mb-8">
        <div class="w-24 h-24 bg-blue-50 text-[#0a1f44] rounded-full flex items-center justify-center text-4xl">🎓</div>
      </div>

      <div class="space-y-6">
        <div class="bg-gray-50 p-4 rounded-xl border border-gray-100">
          <p class="text-xs text-gray-500 uppercase tracking-wider mb-1">Student ID Number</p>
          <p class="font-bold text-gray-800 text-lg">{{ data.user.studentId }}</p>
        </div>
        
        <div class="bg-gray-50 p-4 rounded-xl border border-gray-100">
          <p class="text-xs text-gray-500 uppercase tracking-wider mb-1">Degree Program</p>
          <p class="font-bold text-gray-800 text-lg">{{ data.user.degree }}</p>
        </div>
        
        <div class="bg-gray-50 p-4 rounded-xl border border-gray-100">
          <p class="text-xs text-gray-500 uppercase tracking-wider mb-1">Graduation Year</p>
          <p class="font-bold text-gray-800 text-lg">Class of {{ data.user.gradYear }}</p>
        </div>
      </div>

      <div class="pt-6 mt-6 border-t border-gray-100 flex justify-center">
        <button class="bg-[#0a1f44] hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-medium transition flex items-center gap-2 shadow-sm">
          <span>📄</span> Request Official Transcript
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/data')
</script>