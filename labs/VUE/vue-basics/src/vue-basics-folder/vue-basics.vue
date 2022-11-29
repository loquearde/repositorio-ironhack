<template>
  <nav></nav>
  <div id="maths">{{ twoPlusTwo }}</div>
  <button id="print" :on-click="printAsString()">Click here</button>
  <div v-if="boolean === true">Show this if boolean is true</div>
  <div v-else>The boolean ain't true!</div>
  <div v-for="(records, index) in dataExample" :key="index"></div>
  <footer></footer>
</template>

<script>
const twoPlusTwo = ref(2 + 2);

const printAString = () => {
  console.log("Print this in the console!");
};

const boolean = ref(true);

const dataExample = [
  {
    title: "Sonic Youth - Daydream Nation",
    description: "released in 1988",
    content: "14 tracks",
  },
  {
    title: "Pixies - Doolittle",
    description: "released in 1989",
    content: "12 tracks",
  },
  {
    title: "Dinosaur Jr. - Bug",
    description: "released in 1990",
    content: "9 tracks",
  },
];
</script>

<style></style>
