<script setup>
import { ref, onMounted, defineProps } from "vue";
const count = ref(0);
function increment() {
  count.value++;
}
onMounted(() => {
  console.log(`The initial count is ${count.value}.`);
});

const props = defineProps(["foo"]);

console.log(props.foo);
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="card col-lg-3" v-for="n in 10" :key="n">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">Some quick example text {{ count }}</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link" @click="increment">increment</a>
        </div>
      </div>
    </div>
  </div>
</template>