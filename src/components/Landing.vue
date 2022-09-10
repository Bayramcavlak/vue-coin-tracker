<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg6.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">This is our great company.</h1>
          <div class="text-center">
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-facebook-square"></i>
              <svg class="bi" width="32" height="32" fill="currentColor">
                <use xlink:href="bootstrap-icons.svg#heart-fill" />
              </svg>
            </a>
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-twitter"></i>
              <i class="bi bi-apple"></i>
            </a>
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-google-plus"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { Button, FormGroupInput } from '@/components';
export default {
  name: "landing_page",
  bodyClass: "landing-page",
  components: {
    //     [Button.name]: Button,
    //     [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      form: {
        firstName: "",
        email: "",
        message: "",
      },
    };
  },
};
</script>
<style>
.Card_link__RyP56 absolute inset-0 w-full h-full focus-outline {
  /* Font & Text */
  font-family: system-ui, -apple-system, "system-ui", Roboto, Helvetica, Ubuntu,
    "Segoe UI", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  font-size: 16px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 24px;
  text-decoration: none solid rgb(255, 255, 255);
  text-align: center;
  text-indent: 0px;
  text-transform: none;
  vertical-align: baseline;
  white-space: normal;
  word-spacing: 0px;

  /* Color & Background */
  background-attachment: scroll;
  background-color: rgba(0, 0, 0, 0);
  background-image: none;
  background-position: 0% 0%;
  background-repeat: repeat;
  color: rgb(255, 255, 255);

  /* Box */
  height: 376px;
  width: 318px;
  border: 0px solid rgb(255, 255, 255);
  border-top: 0px solid rgb(255, 255, 255);
  border-right: 0px solid rgb(255, 255, 255);
  border-bottom: 0px solid rgb(255, 255, 255);
  border-left: 0px solid rgb(255, 255, 255);
  margin: 0px;
  padding: 0px;
  max-height: none;
  min-height: 0px;
  max-width: none;
  min-width: 0px;

  /* Positioning */
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  float: none;
  display: block;
  clear: none;
  z-index: auto;

  /* List */
  list-style-image: none;
  list-style-type: disc;
  list-style-position: outside;

  /* Table */
  border-collapse: separate;
  border-spacing: 0px 0px;
  caption-side: top;
  empty-cells: show;
  table-layout: auto;

  /* Miscellaneous */
  overflow: visible;
  cursor: pointer;
  visibility: visible;

  /* Effects */
  transform: none;
  transition: all 0s ease 0s;
  outline: rgb(255, 0, 0) dashed 1px;
  outline-offset: 0px;
  box-sizing: border-box;
  resize: none;
  text-shadow: none;
  text-overflow: clip;
  word-wrap: normal;
  box-shadow: none;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
</style>
