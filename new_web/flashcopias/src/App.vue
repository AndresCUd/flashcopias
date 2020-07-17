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
  margin: 0%;
  height: 100%;
  overflow: hidden;
  height: auto;
  word-wrap: break-word;
}
body {
  background-image: url("./assets/fondo.png");
}
.container-fluid {
  padding: 0%;
  margin: 0%;
  position: absolute;
}
#nav a.router-link-exact-active {
  color: #42b983;
}

.hola2 {
  min-height: 25em;
}
</style>
