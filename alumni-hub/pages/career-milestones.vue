<template>
  <div class="max-w-3xl mx-auto space-y-6" v-if="data">
    <div class="flex items-center justify-between border-b pb-4">
      <div class="flex items-center gap-4">
        <NuxtLink to="/profile" class="text-gray-500 hover:text-[#0a1f44] transition text-xl font-bold">←</NuxtLink>
        <h1 class="text-2xl font-bold text-[#0a1f44]">Career Milestones</h1>
      </div>
      <button class="text-yellow-600 font-bold hover:underline bg-yellow-50 px-4 py-2 rounded-lg text-sm transition">+ Add Experience</button>
    </div>

    <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <div class="relative border-l-2 border-gray-200 ml-4 space-y-10 py-4">
        
        <div class="relative pl-8">
          <div class="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-yellow-400 border-4 border-white shadow-sm flex items-center justify-center"></div>
          <div class="bg-gray-50 p-5 rounded-xl border border-gray-100 hover:border-yellow-200 transition">
            <div class="flex justify-between items-start mb-1">
              <h3 class="font-bold text-gray-800 text-xl">{{ data.user.currentJob }}</h3>
              <span class="bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-bold uppercase">Current</span>
            </div>
            <p class="text-[#0a1f44] font-medium mb-1">{{ data.user.company }}</p>
            <p class="text-xs text-gray-500 mb-3">2022 - Present • Full-time</p>
            <p class="text-sm text-gray-600 leading-relaxed">Leading the front-end development team to build modern web applications using Nuxt 3 and TailwindCSS. Mentoring junior developers and conducting code reviews.</p>
          </div>
        </div>

        <div class="relative pl-8">
          <div class="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-gray-300 border-4 border-white shadow-sm"></div>
          <div class="bg-gray-50 p-5 rounded-xl border border-gray-100">
            <h3 class="font-bold text-gray-800 text-xl">Junior Developer</h3>
            <p class="text-[#0a1f44] font-medium mb-1">Local Davao Startup</p>
            <p class="text-xs text-gray-500 mb-3">2018 - 2022 • Full-time</p>
            <p class="text-sm text-gray-600 leading-relaxed">Maintained legacy codebase and implemented new user interfaces based on Figma designs. Collaborated closely with the UI/UX team.</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/data')
</script>