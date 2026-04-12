<template>
  <div class="max-w-5xl mx-auto" v-if="data">
    
    <div v-if="currentView === 'list'" class="space-y-6">
      <div class="flex items-center justify-between border-b pb-4">
        <h1 class="text-3xl font-bold text-[#0a1f44]">Networking & Events</h1>
      </div>

      <div class="flex flex-wrap gap-6 border-b border-gray-200">
        <button @click="activeTab = 'upcoming'" :class="['pb-3 px-1 font-medium text-sm transition', activeTab === 'upcoming' ? 'border-b-2 border-yellow-500 text-[#0a1f44] font-bold' : 'text-gray-500 hover:text-[#0a1f44]']">Upcoming</button>
        <button @click="activeTab = 'past'" :class="['pb-3 px-1 font-medium text-sm transition', activeTab === 'past' ? 'border-b-2 border-yellow-500 text-[#0a1f44] font-bold' : 'text-gray-500 hover:text-[#0a1f44]']">Past</button>
        <button @click="activeTab = 'seminar'" :class="['pb-3 px-1 font-medium text-sm transition', activeTab === 'seminar' ? 'border-b-2 border-yellow-500 text-[#0a1f44] font-bold' : 'text-gray-500 hover:text-[#0a1f44]']">Teaching & Seminars</button>
        <button @click="activeTab = 'directory'" :class="['pb-3 px-1 font-medium text-sm transition', activeTab === 'directory' ? 'border-b-2 border-yellow-500 text-[#0a1f44] font-bold' : 'text-gray-500 hover:text-[#0a1f44]']">Directory</button>
      </div>

      <div v-if="activeTab !== 'directory'" class="grid grid-cols-1 gap-4 mt-6">
        <div v-for="event in filteredEvents" :key="event.id" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row p-4 gap-4 hover:shadow-md transition">
          <div class="w-full md:w-48 h-40 bg-[#0a1f44] rounded-xl flex items-center justify-center text-white relative shrink-0">
             <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             <span class="z-10 text-4xl">🎟️</span>
          </div>
          
          <div class="flex-1 flex flex-col justify-between py-1">
            <div>
              <h3 class="text-xl font-bold text-[#0a1f44]">{{ event.title }}</h3>
              <div class="mt-2 space-y-1">
                <p class="text-sm text-gray-600 flex items-center gap-2"><span>📅</span> {{ event.date }} | {{ event.time }}</p>
                <p class="text-sm text-gray-600 flex items-center gap-2"><span>📍</span> {{ event.location }}</p>
              </div>
            </div>
            <div class="flex justify-end mt-4">
              <button @click="goToDetails(event)" class="bg-[#0a1f44] hover:bg-blue-900 text-white font-semibold py-2 px-6 rounded-lg transition shadow-sm text-sm">
                View Details
              </button>
            </div>
          </div>
        </div>

        <div v-if="filteredEvents.length === 0" class="text-center py-12 text-gray-500 bg-white rounded-xl border border-gray-100">
          No events found for this category at the moment.
        </div>
      </div>

      <div v-if="activeTab === 'directory'" class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div v-for="alumni in data.directory" :key="alumni.id" class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div class="w-14 h-14 bg-blue-100 text-[#0a1f44] rounded-full flex items-center justify-center text-xl font-bold shrink-0">
            {{ alumni.name.charAt(0) }}
          </div>
          <div class="flex-1">
            <h3 class="font-bold text-gray-800">{{ alumni.name }}</h3>
            <p class="text-xs text-gray-500">Class of {{ alumni.batch }} • {{ alumni.course }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ alumni.industry }} | {{ alumni.location }}</p>
          </div>
          <button @click="openChat(alumni)" class="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg transition text-sm shadow-sm flex items-center gap-2 cursor-pointer">
            <span>💬</span> Connect
          </button>
        </div>
      </div>
    </div>

    <div v-else-if="currentView === 'details' && selectedEvent" class="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col min-h-[80vh]">
      <div class="h-48 bg-[#0a1f44] relative flex items-start p-4">
        <button @click="goToList" class="w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur rounded-full flex items-center justify-center text-white text-xl transition">←</button>
        <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
      </div>
      <div class="p-6 flex-1 bg-white -mt-6 rounded-t-3xl relative z-10 flex flex-col">
        <h2 class="text-2xl font-bold text-[#0a1f44] mb-4">{{ selectedEvent.title }}</h2>
        <div class="space-y-4 mb-6">
          <div class="flex items-start gap-3">
            <div class="w-10 h-10 bg-blue-50 text-[#0a1f44] rounded-full flex items-center justify-center shrink-0">📅</div>
            <div>
              <p class="text-xs text-gray-500 font-medium">Date & Time</p>
              <p class="font-bold text-gray-800">{{ selectedEvent.date }}, {{ selectedEvent.time }}</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-10 h-10 bg-blue-50 text-[#0a1f44] rounded-full flex items-center justify-center shrink-0">📍</div>
            <div>
              <p class="text-xs text-gray-500 font-medium">Location</p>
              <p class="font-bold text-gray-800">{{ selectedEvent.location }}</p>
            </div>
          </div>
        </div>
        <div class="mb-6">
          <h3 class="font-bold text-gray-800 mb-2">About Event</h3>
          <p class="text-gray-600 text-sm leading-relaxed">{{ selectedEvent.description }}</p>
        </div>
        <div class="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
          <div>
            <p class="text-xs text-gray-500">Available Seats</p>
            <p class="font-bold text-lg text-yellow-500">{{ selectedEvent.seats || 50 }}</p>
          </div>
          <button @click="registerForEvent" class="bg-[#0a1f44] hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-xl shadow-md transition">
            Register Now
          </button>
        </div>
      </div>
    </div>

    <div v-else-if="currentView === 'success' && selectedEvent" class="max-w-md mx-auto flex flex-col items-center justify-center min-h-[80vh] text-center space-y-6">
      <div class="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-4xl shadow-sm">✓</div>
      <div>
        <h2 class="text-2xl font-bold text-[#0a1f44]">Registration Successful!</h2>
        <p class="text-gray-500 text-sm mt-2 px-4">You have successfully registered for the event. Here is your digital ticket.</p>
      </div>
      <div class="w-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden relative">
        <div class="p-6 border-b border-dashed border-gray-300 flex justify-center bg-gray-50">
          <img :src="`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Ticket123456789`" alt="QR Code" class="w-32 h-32 rounded-lg mix-blend-multiply" />
        </div>
        <div class="p-6 text-left space-y-4">
          <div>
            <p class="text-xs text-gray-500 uppercase tracking-wider">Event</p>
            <p class="font-bold text-[#0a1f44]">{{ selectedEvent.title }}</p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-xs text-gray-500 uppercase tracking-wider">Date</p>
              <p class="font-semibold text-gray-800 text-sm">{{ selectedEvent.date }}<br>{{ selectedEvent.time }}</p>
            </div>
            <div>
              <p class="text-xs text-gray-500 uppercase tracking-wider">Location</p>
              <p class="font-semibold text-gray-800 text-sm">{{ selectedEvent.location }}</p>
            </div>
          </div>
        </div>
        <div class="absolute top-[170px] -left-3 w-6 h-6 bg-gray-50 rounded-full border-r border-gray-200"></div>
        <div class="absolute top-[170px] -right-3 w-6 h-6 bg-gray-50 rounded-full border-l border-gray-200"></div>
      </div>
      <div class="w-full space-y-3 pt-4">
        <button class="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3.5 rounded-xl transition shadow-sm">Download Ticket</button>
        <button @click="goToList" class="w-full border-2 border-gray-200 text-gray-600 hover:bg-gray-50 font-bold py-3.5 rounded-xl transition">Back to Events</button>
      </div>
    </div>

    <div v-else-if="currentView === 'chat' && selectedAlumni" class="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-[75vh]">
      
      <div class="bg-[#0a1f44] text-white p-4 flex items-center gap-3 relative">
        <button @click="goToList" class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition z-10 text-xl">←</button>
        <div class="w-10 h-10 bg-white text-[#0a1f44] rounded-full flex items-center justify-center font-bold text-lg z-10">
          {{ selectedAlumni.name.charAt(0) }}
        </div>
        <div class="z-10">
          <h3 class="font-bold leading-tight">{{ selectedAlumni.name }}</h3>
          <p class="text-xs text-yellow-400 font-medium">{{ selectedAlumni.industry }}</p>
        </div>
        <div class="absolute right-0 top-0 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-10 translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div class="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-4">
        <div class="text-center text-xs text-gray-400 my-2">Today</div>
        
        <div v-for="msg in chatMessages" :key="msg.id" :class="['max-w-[80%] p-3 text-sm flex flex-col shadow-sm', msg.sender === 'me' ? 'bg-[#0a1f44] text-white self-end rounded-2xl rounded-tr-sm' : 'bg-white border border-gray-100 text-gray-800 self-start rounded-2xl rounded-tl-sm']">
          <span>{{ msg.text }}</span>
        </div>
      </div>

      <div class="p-4 bg-white border-t border-gray-100 flex gap-2 items-center">
        <input 
          v-model="newMessage" 
          @keyup.enter="sendMessage" 
          type="text" 
          placeholder="Type a message..." 
          class="flex-1 bg-gray-50 border border-gray-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-yellow-500 transition"
        >
        <button @click="sendMessage" class="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center hover:bg-yellow-600 transition shadow-sm">
          <span class="transform rotate-45 -mt-1 -ml-1 text-lg">➤</span>
        </button>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Fetch the data
const { data } = await useFetch('/api/data')

// View & Tab State
const activeTab = ref('upcoming')
const currentView = ref('list') // 'list', 'details', 'success', 'chat'
const selectedEvent = ref(null)

// Chat State
const selectedAlumni = ref(null)
const chatMessages = ref([])
const newMessage = ref('')

// Computed Filter
const filteredEvents = computed(() => {
  if (!data.value) return []
  return data.value.events.filter(e => e.type === activeTab.value)
})

// Navigation Methods
const goToDetails = (event) => {
  selectedEvent.value = event
  currentView.value = 'details'
}

const goToList = () => {
  selectedEvent.value = null
  selectedAlumni.value = null
  currentView.value = 'list'
}

const registerForEvent = () => {
  currentView.value = 'success'
}

// Chat Methods
const openChat = (alumni) => {
  selectedAlumni.value = alumni
  // Load initial dummy conversation
  chatMessages.value = [
    { id: 1, sender: 'them', text: `Hi there! I saw we are both in the ${alumni.industry} space.` },
    { id: 2, sender: 'me', text: `Hello ${alumni.name}! Yes, I'd love to connect and share experiences.` }
  ]
  currentView.value = 'chat'
}

const sendMessage = () => {
  if (!newMessage.value.trim()) return
  
  // Add user's message
  chatMessages.value.push({ 
    id: Date.now(), 
    sender: 'me', 
    text: newMessage.value 
  })
  
  newMessage.value = ''

  // Simulate an automated reply from the other alumni after 1 second
  setTimeout(() => {
    chatMessages.value.push({ 
      id: Date.now() + 1, 
      sender: 'them', 
      text: 'That sounds great! Let us set up a quick call sometime next week.' 
    })
  }, 1000)
}
</script>