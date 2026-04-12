<template>
  <div class="flex items-center justify-center min-h-[80vh]">
    <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-md border border-gray-100">
      <div class="text-center mb-8">
        <h2 class="text-2xl font-bold text-blue-900">Welcome Back</h2>
        <p class="text-gray-500 text-sm mt-1">Sign in to continue to your career passport</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input type="email" placeholder="Enter your email" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none" />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input type="password" placeholder="Enter your password" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none" />
        </div>

        <div class="flex items-center justify-between text-sm">
          <label class="flex items-center text-gray-600">
            <input type="checkbox" class="mr-2 rounded text-blue-600" /> Remember me
          </label>
          <a href="#" class="text-blue-600 hover:underline">Forgot Password?</a>
        </div>

        <button type="submit" class="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition shadow-sm">
          Sign In
        </button>
      </form>

      <div class="mt-6 text-center text-sm text-gray-500">
        Don't have an account? <a href="#" class="text-blue-600 font-semibold hover:underline">Create Account</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogin = () => {
  // Mock login action, redirect to dashboard
  router.push('/')
}
</script>