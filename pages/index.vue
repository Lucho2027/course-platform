<template>
  <NuxtLink class="underline font-medium" :href="firstLesson.slug">
    Go to first Lesson
  </NuxtLink>
</template>
<script setup lang="ts">
const firstLesson = await useFirstLesson();
</script>
