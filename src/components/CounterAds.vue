<template>
<h2>{{title}} {{num}}</h2>
  <div>
    {{ counter }} <button @click="counter++" class="counter">Counter +</button>
  </div>
</template>

<script>
export default {
  name: "CounterAds",
  data() {
    return {
      counter: 0,
    };
  },
  props: {
    title: String,
    num: Number
  }
};
</script>

<style scoped>
.counter {
  background-color: #fef595;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
  border: #fef595 1px solid;
  cursor: pointer;
}
</style>
