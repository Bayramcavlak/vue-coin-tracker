<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App Bu bir örnek"/>
  <CounterAds title="Bu bir sayaç başlığıdır." num="10" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CounterAds from './components/CounterAds.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    CounterAds
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.counter {
  background-color: #fef595;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
  border: #fef595 1px solid;
  cursor: pointer;
}
</style>
