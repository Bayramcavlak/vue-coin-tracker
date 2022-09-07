<template>
  <li class="nav-item">
    <a class="nav-link" :href="href">{{ title }}</a>
  </li>
</template>

<script>
export default {
  name: "NavbarLi",
  props: {
    href: String,
    title: String,
  },
};
</script>
