<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h4>Qrdesk.com</h4>
          <!-- <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quod, quia, voluptate quae voluptatem quas quibusdam
            voluptatum quidem natus quos. Quisquam, quae. Quisquam, quae.
          </p> -->
        </div>
       
        <div class="col-md-6">
          <h4>Menu Listesi</h4>
          <!-- <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quod, quia, voluptate quae voluptatem quas quibusdam
            voluptatum quidem natus quos. Quisquam, quae. Quisquam, quae.
          </p> -->
        </div>
      </div>
    </div>
    <p>Copyright &copy; {{ year }}</p>
  </footer>
</template>

<script>
import { computed } from "vue";

export default {
  setup() {
    const year = computed(() => new Date().getFullYear());
    return { year };
  },
};
</script>
<style>
footer {
  position: absolute;
  bottom: 0;
  width: 90%;
}
</style>
