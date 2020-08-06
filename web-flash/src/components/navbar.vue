<template>
  <v-main style="position: fixed;" class="float-left boton-flotante ">
    <v-btn
      v-if="$route.path != '/cotiza'"
      color="purple"
      dark
      rounded
      to="/cotiza"
    >
      Envía Aqui !</v-btn
    >
  </v-main>
</template>
<script>
export default {
  data() {
    return {
      disebledButton: false,
      direction: "top",
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: "slide-y-reverse-transition",
    };
  },
};
</script>
<style scoped>
.boton-flotante {
  bottom: 3vh;
  right: 7%;
}
</style>
