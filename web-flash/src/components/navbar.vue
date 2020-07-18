<template>
  <v-speed-dial
    :top="top"
    :bottom="bottom"
    :right="right"
    :left="left"
    :direction="direction"
    :open-on-hover="hover"
    :transition="transition"
    style="position: fixed;"
    class="boton-flotante"
  >
    <template v-slot:activator>
      <v-btn v-model="fab" color="blue darken-2" dark fab> </v-btn>
    </template>
    <v-btn fab dark small color="green"> </v-btn>
    <v-btn fab dark small color="indigo"> </v-btn>
    <v-btn fab dark small color="red"> <v-icon>home</v-icon></v-btn>
  </v-speed-dial>
</template>
<script>
export default {
  data: () => ({
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
  }),
};
</script>
<style scoped>
.boton-flotante {
  bottom: 20%;
  right: 7%;
}
</style>
