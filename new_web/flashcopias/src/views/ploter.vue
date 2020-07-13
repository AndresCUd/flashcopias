<template>
  <b-container fluid style="min-height: 33vw;">
    <b-row align-v="stretch">
      <title-page title="IMPRESIÓN DE PLANOS" />
    </b-row>
    <b-row>
      <b-col style="margin-top: 5%;">
        <img src="../assets/ploter.png" style="width: 25vw" />
      </b-col>
      <b-col style="margin-top: 5%;" cols="2">
        <p class="hola">
          Sabemos lo valioso que es tu tiempo por eso envíanos tus archivos para
          impresión vía email
        </p></b-col
      >
      <b-col style="padding: 0px;" md="auto">
        <b-img
          fluid-grow
          src="../assets/planos.png"
          alt="Kitten"
          style="width: 20vw;"
      /></b-col>
    </b-row>
  </b-container>
</template>

<script>
import title_page from "../components/title_page";
export default {
  name: "CD",
  components: {
    "title-page": title_page,
  },
};
</script>

<style scoped>
div {
  margin: 0%;
  background-color: cornsilk;
}
.hola {
  font-weight: 400;
  margin-top: 30%;
  font-size: 3vh;
}

.container-fluid {
  position: sticky;
}
</style>
