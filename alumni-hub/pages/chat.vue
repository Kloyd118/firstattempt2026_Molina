<template>
  <div class="max-w-5xl mx-auto h-[80vh] flex gap-6" v-if="data">
    <div class="w-1/3 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col overflow-hidden">
      <div class="p-4 bg-[#0a1f44] text-white">
        <h2 class="font-bold">Messages</h2>
      </div>
      <div class="flex-1 overflow-y-auto">
        <div v-for="chat in data.chats" :key="chat.id" class="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer flex items-center gap-3">
          <div class="w-10 h-10 bg-blue-100 text-[#0a1f44] rounded-full flex items-center justify-center font-bold shrink-0">
            {{ chat.contact.charAt(0) }}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex justify-between items-baseline mb-1">
              <h3 class="text-sm font-bold text-gray-800 truncate">{{ chat.contact }}</h3>
              <span class="text-xs text-gray-400">{{ chat.time }}</span>
            </div>
            <p class="text-xs text-gray-500 truncate" :class="{'font-semibold text-gray-800': chat.unread > 0}">{{ chat.lastMessage }}</p>
          </div>
          <div v-if="chat.unread > 0" class="w-5 h-5 bg-yellow-500 text-white text-xs rounded-full flex items-center justify-center shrink-0">
            {{ chat.unread }}
          </div>
        </div>
      </div>
    </div>

    <div class="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col overflow-hidden">
      <div class="p-4 border-b border-gray-100 flex items-center gap-3">
         <div class="w-10 h-10 bg-blue-100 text-[#0a1f44] rounded-full flex items-center justify-center font-bold">P</div>
         <div>
           <h2 class="font-bold text-gray-800">Peter Jay Torrefiel</h2>
           <p class="text-xs text-green-500">Online</p>
         </div>
      </div>
      
      <div class="flex-1 p-6 overflow-y-auto bg-gray-50 flex flex-col gap-4">
        <div class="self-start max-w-[70%]">
          <p class="bg-gray-200 text-gray-800 p-3 rounded-2xl rounded-tl-none text-sm">Hi! I saw you in the directory. I'm also working in the Tech industry in Davao.</p>
          <span class="text-xs text-gray-400 mt-1 ml-1">10:40 AM</span>
        </div>
        <div class="self-end max-w-[70%]">
          <p class="bg-[#0a1f44] text-white p-3 rounded-2xl rounded-tr-none text-sm">Hello! Yes, it's great to connect with fellow AdDU alumni.</p>
          <span class="text-xs text-gray-400 mt-1 mr-1 block text-right">10:41 AM</span>
        </div>
        <div class="self-start max-w-[70%]">
          <p class="bg-gray-200 text-gray-800 p-3 rounded-2xl rounded-tl-none text-sm">Let's connect after the homecoming event!</p>
          <span class="text-xs text-gray-400 mt-1 ml-1">10:42 AM</span>
        </div>
      </div>

      <div class="p-4 bg-white border-t border-gray-100 flex gap-2">
        <button class="text-gray-400 hover:text-[#0a1f44] transition px-2">📎</button>
        <input type="text" placeholder="Type a message..." class="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a1f44]"/>
        <button class="bg-yellow-500 hover:bg-yellow-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition shadow-sm">
          ➤
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/data')
</script>
