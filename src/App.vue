<template>
  <div class="container">
    <NavBar />
    <Card />
  </div>
</template>

<script>
import Card from "./components/Cards/Card";
import NavBar from "./components/Navbar/NavBar";

export default {
  name: "App",
  components: {
    Card,
    NavBar
  },
};
</script>
<style>
body {
  background-color: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>