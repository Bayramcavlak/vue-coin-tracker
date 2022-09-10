<template>
  <div>
    <div class="section section-team text-center">
      <div class="container">
        <h2 class="title">Here is our team {{ $route.params.id }}</h2>
        <div class="team">
          <div class="row">
            <div class="col-md-4">
              <div class="team-player">
                <img
                  src="img/avatar.jpg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Romina Hadid</h4>
                <p class="category text-primary">Model</p>
                <p class="description">
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#">links</a> for people to be able to follow
                  them outside the site.
                </p>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-instagram"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-facebook-square"></i
                ></a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="team-player">
                <img
                  src="img/ryan.jpg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Ryan Tompson</h4>
                <p class="category text-primary">Designer</p>
                <p class="description">
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#">links</a> for people to be able to follow
                  them outside the site.
                </p>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-linkedin"></i
                ></a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="team-player">
                <img
                  src="img/eva.jpg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Eva Jenner</h4>
                <p class="category text-primary">Fashion</p>
                <p class="description">
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#">links</a> for people to be able to follow
                  them outside the site.
                </p>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-google-plus"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-youtube"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-twitter"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { Button, FormGroupInput } from '@/components';
export default {
  name: "team_page",
  bodyClass: "team-page",
  components: {
    //     [Button.name]: Button,
    //     [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {};
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
