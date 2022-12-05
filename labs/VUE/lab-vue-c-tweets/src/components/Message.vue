<template>
  <p class="message">
    {{ props.message }}
  </p>
</template>

<script setup>
const props = defineProps({
  message: String,
});
</script>
