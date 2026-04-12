<template>
  <div class="max-w-5xl mx-auto space-y-8" v-if="data">
    <header class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-800">Welcome back, {{ data.user.name }}! 👋</h1>
        <p class="text-gray-500 mt-1">Here's what's happening with your alumni account.</p>
      </div>
      <div class="mt-4 md:mt-0 bg-yellow-100 border border-yellow-200 p-4 rounded-lg flex items-center gap-4">
        <div>
          <p class="text-sm font-semibold text-yellow-800">Profile Strength: {{ data.user.profileStrength }}%</p>
          <div class="w-32 h-2 bg-yellow-200 rounded-full mt-1">
            <div class="h-2 bg-yellow-500 rounded-full" :style="`width: ${data.user.profileStrength}%`"></div>
          </div>
        </div>
        <NuxtLink to="/profile" class="text-sm bg-yellow-500 text-white px-3 py-1.5 rounded font-medium hover:bg-yellow-600">Complete</NuxtLink>
      </div>
    </header>

    <section>
      <h2 class="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <NuxtLink to="/events" class="bg-blue-600 text-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center flex flex-col items-center">
          <span class="text-2xl mb-2">📅</span>
          <span class="font-medium">Events</span>
        </NuxtLink>
        <button class="bg-purple-600 text-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center flex flex-col items-center">
          <span class="text-2xl mb-2">📄</span>
          <span class="font-medium">Documents</span>
        </button>
        <button class="bg-green-600 text-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center flex flex-col items-center">
          <span class="text-2xl mb-2">💼</span>
          <span class="font-medium">Jobs</span>
        </button>
        <button class="bg-red-500 text-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center flex flex-col items-center">
          <span class="text-2xl mb-2">❤️</span>
          <span class="font-medium">Donate</span>
        </button>
      </div>
    </section>

    <section>
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-semibold text-gray-800">Upcoming Events</h2>
        <NuxtLink to="/events" class="text-blue-600 text-sm hover:underline">View All</NuxtLink>
      </div>
      <div class="space-y-3">
        <div v-for="event in data.events.slice(0,2)" :key="event.id" class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div class="bg-blue-50 text-blue-700 p-3 rounded-lg text-center min-w-[70px]">
            <div class="text-xs font-bold uppercase">{{ event.date.split(' ')[0] }}</div>
            <div class="text-xl font-bold">{{ event.date.split(' ')[1].replace(',', '') }}</div>
          </div>
          <div>
            <h3 class="font-bold text-gray-800">{{ event.title }}</h3>
            <p class="text-sm text-gray-500">{{ event.time }} • {{ event.location }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Fetching data from our mock backend API route
const { data } = await useFetch('/api/data')
</script>