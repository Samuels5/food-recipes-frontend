<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold">My Recipes</h1>
      <NuxtLink
        to="/create-recipe"
        class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Create New Recipe
      </NuxtLink>
    </div>

    <div v-if="pending" class="text-center py-8">
      <p>Loading your recipes...</p>
    </div>

    <div v-else-if="error" class="text-center py-8 text-red-500">
      <p>Error loading recipes: {{ error.message }}</p>
    </div>

    <div v-else-if="!data?.recipes?.length" class="text-center py-8">
      <p class="text-gray-500 mb-4">You haven't created any recipes yet.</p>
      <NuxtLink
        to="/create-recipe"
        class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Create Your First Recipe
      </NuxtLink>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="recipe in data.recipes" 
        :key="recipe.id" 
        class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
      >
        <img 
          :src="recipe.image_url" 
          :alt="recipe.title"
          class="w-full h-48 object-cover"
          @error="$event.target.src = 'https://via.placeholder.com/400x300?text=Recipe+Image'"
        />
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">{{ recipe.title }}</h3>
          <p class="text-gray-600 mb-4 line-clamp-2">{{ recipe.description }}</p>
          <div class="flex gap-2">
            <button class="text-blue-500 hover:text-blue-700 px-3 py-1 rounded border border-blue-500 hover:bg-blue-50">
              Edit
            </button>
            <button class="text-red-500 hover:text-red-700 px-3 py-1 rounded border border-red-500 hover:bg-red-50">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuery } from "@vue/apollo-composable";
import GetMyRecipesQuery from "~/queries/my-recipes.gql";

definePageMeta({
  middleware: "auth",
});

const { result: data, loading: pending, error } = useQuery(GetMyRecipesQuery);
</script>
