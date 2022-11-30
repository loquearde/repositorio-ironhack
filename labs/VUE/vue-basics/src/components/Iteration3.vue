<template>
  <h1>Iteration 3</h1>
  <div>
    <h4 v-if="conditional">
      Mostramos este elemento dependiendo del valor del booleano que se le
      asigna al directivo v-if
    </h4>
    <h4 v-else>Y este si fuese falso</h4>
  </div>
</template>

<script setup>
import { ref } from "vue";

const conditional = ref(true);
</script>

<style></style>
