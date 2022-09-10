<script setup>
import { ref, onMounted } from "vue";

// reactive state
const count = ref(0);
const label = ref("Click me");

// functions that mutate state and trigger updates
function increment() {
  count.value++;
  label.value = "Clicked";
}

function decrement() {
  count.value--;
}
// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`);
});
</script>

<template>
  <div class="col-6">
    <div class="card">
      <div class="header">{{ label }}</div>
      <div class="card-body">
        <h5 class="card-title">Number of clicks: {{ count }}</h5>
        <button class="btn btn-primary" @click="increment">+</button>
        <button class="btn btn-danger" @click="decrement">-</button>
      </div>
    </div>
    <div class="card">
      <div class="header">List Of Users</div>
      <div class="card-body">
        <table class="table table-md">
          <tr>
            <td>Test</td>
            <td>
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
            </td>
          </tr>
          <tr>
            <td>Test</td>
            <td>
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
