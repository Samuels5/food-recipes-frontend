<template>
  <header class="bg-gray-800 text-white p-4 flex justify-between items-center">
    <nav>
      <NuxtLink to="/" class="text-xl font-bold mr-4">Food Recipes</NuxtLink>
      <NuxtLink
        v-if="isAuthenticated"
        to="/my-recipes"
        class="hover:text-gray-300"
        >My Recipes</NuxtLink
      >
    </nav>
    <nav class="space-x-4">
      <template v-if="!isAuthenticated">
        <NuxtLink to="/login" class="hover:text-gray-300">Login</NuxtLink>
        <NuxtLink to="/register" class="hover:text-gray-300">Register</NuxtLink>
      </template>
      <template v-else>
        <button @click="logout" class="hover:text-gray-300">Logout</button>
      </template>
    </nav>
  </header>
</template>

<script setup>
import { useCookie, useRouter } from "#app";

const authToken = useCookie("auth-token");
const isAuthenticated = computed(() => !!authToken.value);
const router = useRouter();

const logout = () => {
  authToken.value = null; // Clear the cookie
  router.push("/");
};
</script>
