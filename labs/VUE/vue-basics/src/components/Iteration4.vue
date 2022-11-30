<template>
  <h1>Iteration 4</h1>
  <div v-for="(record, index) in records" :key="index">
    <h4>{{ index }} - {{ record.artist }}</h4>
    <h3>{{ record.title }}</h3>
    <h5>{{ record.tracks }}</h5>
  </div>
</template>
<script setup>
import { reactive } from "vue;";

const records = reactive([
  {
    title: "Daydream Nation",
    artist: "Sonic Youth",
    tracks: "14 tracks",
  },
  {
    title: "Doolittle",
    artist: "Pixies",
    tracks: "12 tracks",
  },
  {
    title: "Bug",
    artist: "Dinosaur Jr.",
    tracks: "9 tracks",
  },
]);
</script>

<style></style>
