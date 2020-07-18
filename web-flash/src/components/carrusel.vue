<template>
  <v-row>
    <v-col v-for="(item, index) in items" cols="12" sm="4" :key="index">
      <v-img
        style="margin-rigth:0;display:block;margin:auto;"
        :src="item.img"
      />
      <h2>{{ item.title }}</h2>
      <v-flex class="separador"> </v-flex>
      <p class="hola">{{ item.text }}</p>
      <v-divider class="mx-4" inset vertical></v-divider>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
    },
  },
};
</script>

<style>
h2 {
  text-align: center;
  color: #2f2f2f;
}
.separador {
  background-image: url("../assets/fondo_top.png");
  margin-left: 40%;
  margin-right: 40%;
  height: 5px;
  align-self: center;
}
.hola {
  font-weight: 500;
  margin-top: 10%;
  font-size: 1rem;
  color: #3f3f3f;
  padding-left: 4%;
  padding-right: 4%;
  text-align: center;
}
</style>
