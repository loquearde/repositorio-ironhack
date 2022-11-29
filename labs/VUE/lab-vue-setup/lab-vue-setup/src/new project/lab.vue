<template>
  <h2>Text example for lab.vue</h2>
  <div v-text="exampleLab"></div>
  <button id="hello-world-btn" v-on:click="helloWorld()">Click here</button>
</template>

<script setup>
import { ref } from "vue";

let exampleLab = ref("este es un ejemplo creado para el lab.");

function helloWorld() {
  console.log("Hello world!");
}
</script>

<style scoped></style>
