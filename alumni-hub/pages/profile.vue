<template>
  <div class="max-w-5xl mx-auto space-y-6" v-if="data">
    
    <div class="bg-[#0a1f44] text-white rounded-2xl p-8 shadow-lg flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden">
      <div class="absolute right-0 top-0 w-64 h-64 bg-yellow-400 rounded-full blur-3xl opacity-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div class="w-28 h-28 bg-white rounded-full flex items-center justify-center text-[#0a1f44] text-4xl font-bold border-4 border-yellow-400 shadow-md shrink-0 z-10">
        {{ data.user.name.charAt(0) }}
      </div>
      <div class="flex-1 text-center md:text-left z-10">
        <h1 class="text-3xl font-bold flex items-center justify-center md:justify-start gap-3">
          {{ data.user.name }}
          <span v-if="data.user.verified" class="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider shadow-sm">Verified</span>
        </h1>
        <p class="text-yellow-400 font-medium mt-1">{{ data.user.currentJob }} at {{ data.user.company }}</p>
      </div>
      <button class="z-10 bg-white/10 hover:bg-white/20 border border-white/30 px-6 py-2.5 rounded-lg text-sm font-medium transition backdrop-blur-sm">Edit Profile</button>
    </div>

    <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <h2 class="font-bold text-[#0a1f44] mb-4 text-lg border-b pb-2">Personal Information</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p class="text-xs text-gray-500 uppercase tracking-wider mb-1">Email Address</p>
          <p class="font-medium text-gray-800">{{ data.user.email }}</p>
        </div>
        <div>
          <p class="text-xs text-gray-500 uppercase tracking-wider mb-1">Phone Number</p>
          <p class="font-medium text-gray-800">{{ data.user.phone }}</p>
        </div>
        <div class="md:col-span-2">
          <p class="text-xs text-gray-500 uppercase tracking-wider mb-1">Home Address</p>
          <p class="font-medium text-gray-800">{{ data.user.address }}</p>
        </div>
        <div class="md:col-span-2 mt-2">
          <p class="text-xs text-gray-500 uppercase tracking-wider mb-2">Top Skills</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in data.user.skills" :key="skill" class="bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full text-xs font-medium">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <NuxtLink to="/academic-records" class="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#0a1f44] hover:shadow-md transition flex items-center justify-between cursor-pointer">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 bg-blue-50 text-[#0a1f44] rounded-full flex items-center justify-center text-xl">🎓</div>
          <div>
            <h3 class="font-bold text-lg text-gray-800 group-hover:text-[#0a1f44] transition">Academic Records</h3>
            <p class="text-sm text-gray-500">View your degree and student info</p>
          </div>
        </div>
        <span class="text-gray-400 group-hover:text-yellow-500 group-hover:translate-x-1 transition text-xl">➔</span>
      </NuxtLink>

      <NuxtLink to="/career-milestones" class="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#0a1f44] hover:shadow-md transition flex items-center justify-between cursor-pointer">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center text-xl">💼</div>
          <div>
            <h3 class="font-bold text-lg text-gray-800 group-hover:text-[#0a1f44] transition">Career Milestones</h3>
            <p class="text-sm text-gray-500">Track your professional journey</p>
          </div>
        </div>
        <span class="text-gray-400 group-hover:text-yellow-500 group-hover:translate-x-1 transition text-xl">➔</span>
      </NuxtLink>
    </div>

  </div>
</template>

<script setup>
const { data } = await useFetch('/api/data')
</script>