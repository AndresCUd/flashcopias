<template>
  <b-container fluid style="min-height: 33vw;">
    <b-row align-v="stretch">
      <title-page title="IMPRESIÓN DE PLANOS" />
    </b-row>
    <b-row>
      <b-col sm="4">
        <img src="../assets/ploter.png" style="margin-top: 25%;width: 20em" />
      </b-col>
      <b-col sm="4">
        <p class="hola">
          Sabemos lo valioso que es tu tiempo por eso envíanos tus archivos para
          impresión vía email
        </p></b-col
      >
      <b-col sm="4">
        <b-img
          fluid
          thumbnail
          src="../assets/planos.png"
          style="margin-top: 25%;margin-bottom: 5%;width: 25em"
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
  background-color: white;
}
.hola {
  font-weight: 400;
  margin-top: 30%;
  font-size: 1.5rem;
  color: #3f3f3f;
}

.container-fluid {
  position: sticky;
}
</style>
