<template>
  <NuxtLink class="underline font-medium" :href="firstLesson.path">
    Go to first Lesson
  </NuxtLink>
</template>
<script setup>
const firstLesson = await useFirstLesson();
</script>
