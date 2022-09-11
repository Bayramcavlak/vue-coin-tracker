<template>
  <div class="container">
    <Header />
    <LeftNav />
    <Counter />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header/AppHeader";
import Footer from "./components/Footer/AppFooter";
import LeftNav from "./components/Navbar/LeftNavbar";
import Counter from "./components/Counters/CounterNumber";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    LeftNav,
    Counter
  },
};
</script>
<style>
body {
  background: rgb(58, 171, 180);
  background: linear-gradient(
    90deg,
    rgba(58, 171, 180, 1) 0%,
    rgba(29, 143, 253, 1) 54%,
    rgba(69, 97, 252, 1) 100%
  );
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
