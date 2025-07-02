<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">My Recipes</h1>
    <!-- Recipe list will go here -->
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
</script>
