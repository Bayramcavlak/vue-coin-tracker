<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h4>Antalya Developer Topluluğu</h4>
          <p>
            Antalya Developer Topluluğu, Antalya'da yazılım geliştiricileri bir
            araya getirmek amacıyla kurulmuştur.
          </p>
        </div>
        <div class="col-md-4">
          <h3>İletişim</h3>
          <p>
            <a href="mailto:info@antalya.dev">info@antalya.dev </a>
          </p>
          <p>
            <a href="#">Twitter</a>
          </p>
          <p>
            <a href="#">Facebook</a>
          </p>
        </div>
        <div class="col-md-4">
          <h4>Biz kimiz?</h4>
          <p>
            Yazılım geliştiricilerini ve yazılım girişimcilerini bir araya
            getirmek ve Antalya'da yazılım sektörünü geliştirmek amacıyla
            kurulmuş bir topluluktur.
          </p>
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
