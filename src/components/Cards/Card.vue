<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6" v-for="n in comments" :key="n.id">
        <div class="card">
          <div class="card-header">{{ n.email }}</div>
          <div class="card-body">
            <h5 class="card-title">{{ n.name }}</h5>
            <p class="card-text">{{ n.body }}</p>
            <a
              :href="n.link"
              class="btn btn-sm btn-warning m-1"
              v-for="n in links"
              :key="n"
              >{{ n }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardBox",
  data() {
    return {
      color: "green",
      counter: 4,
      comments: [],
      links: [],
      endpoint: {
        url: "https://jsonplaceholder.typicode.com/comments",
        get: "GET",
        post: "POST",
      },
    };
  },
  methods: {
    async getComments() {
      const response = await fetch(this.endpoint.url, {
        method: this.endpoint.get,
      });
      if (response.ok && response.status == 200) {
        const data = await response.json();
        this.comments = data;
      }
    },
  },
  created() {
    this.getComments();
    // console.log("CounterAds created");
  },
  props: {
    title: String,
    num: Number,
  },
};
</script>

<style>
.card {
  --custom-color: v-bind("color");
  /* background-color: black; */
  border-radius: 10px;
  /* padding: 10px; */
  margin: 10px;
  /* border: #fef595 1px solid; */
  /* cursor: pointer; */
  color: var(--custom-color);
}
</style>
