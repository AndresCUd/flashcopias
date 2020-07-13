<template>
  <div id="app">
    <navbar />
    <router-view />
    <footer-baner />
  </div>
</template>
<script>
import navbar from "./components/navbar";
import footer_baner from "./components/footer_2";
export default {
  components: {
    navbar,
    "footer-baner": footer_baner,
  },
};
</script>

<style>
#app {
  text-align: center;
  padding: 0%;
  margin: 0%;
  height: 100%;

  background-image: url("./assets/fondo.png");
}
html,
body,
#app {
  height: 100%;
}
html {
  min-height: 100%;
  position: sticky;
}
body {
  margin: 0;
  margin-bottom: 0px;
  resize: none;
}

.container-fluid {
  padding: 0%;
  margin: 0%;
  position: absolute;
}
#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
