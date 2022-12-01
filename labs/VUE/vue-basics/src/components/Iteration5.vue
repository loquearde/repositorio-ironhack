<template>
  <h1>Iteration 5</h1>

  <div class="container" :class="colorBoolean ? 'is-red' : 'is-orange'">
    <h1>Toggleamos entre 2 colores usando un operador ternario</h1>
    <button @click="changeColorFunction()">Click me to toggle color</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const colorBoolean = ref(true);

const changeColorFunction = () => {
  colorBoolean.value = !colorBoolean.value;
};
</script>

<style scoped>
section {
  padding: 3rem 0;
}
.container {
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.is-red {
  background: red;
}
.is-orange {
  background: orange;
}
</style>
