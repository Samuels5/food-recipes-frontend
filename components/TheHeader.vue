<template>
  <header class="bg-gray-800 text-white p-4 flex justify-between items-center">
    <nav>
      <NuxtLink to="/" class="text-xl font-bold mr-4">Food Recipes</NuxtLink>
    </nav>
    <nav class="space-x-4">
      <NuxtLink to="/login" class="hover:text-gray-300">Login</NuxtLink>
      <NuxtLink to="/register" class="hover:text-gray-300">Register</NuxtLink>
    </nav>
  </header>
</template>

<script setup></script>
