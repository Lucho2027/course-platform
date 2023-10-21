<template>
  <NuxtLink class="underline font-medium" :href="firstLesson.path">
    Go to first Lesson
  </NuxtLink>
</template>
<script setup lang="ts">
const firstLesson = useFirstLesson();
</script>
