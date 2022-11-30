<template>
  <nav>
    <img
      src="https://i.pinimg.com/originals/e5/44/02/e54402c3b6f3a8f09b0339fa29c30553.jpg"
      alt=""
    />
    <ul>
      <li><a href="">Link 1</a></li>
      <li><a href="">Link 2</a></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  position: sticky;
  bottom: 0;
}
nav,
ul {
  display: flex;
  justify-content: space-between;
}
img {
  width: 20%;
}
li {
  list-style: none;
  padding: 0 1.5rem;
}
</style>
