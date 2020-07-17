<template>
  <b-container fluid style="min-height: 33vw;">
    <b-row align-v="stretch">
      <title-page title="Impresión sobre CD y Quemado CD" />
    </b-row>
    <b-row>
      <b-col sm="3">
        <img
          src="../assets/cd/maquina.png"
          alt="Kitten"
          style="margin-top: 30%; margin-left: 20%;width: 15em;"
        />
        <p class="hola">
          Label y Quemado CD.
        </p>
      </b-col>
      <b-col sm="3">
        <img
          src="../assets/cd/cd.png"
          class=" align-left"
          alt="Kitten"
          style="margin-top: 20%; margin-left:20%;width: 18em;"
        />
      </b-col>
      <b-col sm="5">
        <p class="hola" style=" padding:20% ;">
          Sabemos lo valioso que es tu tiempo por eso envíanos tus archivos para
          impresión vía email
        </p></b-col
      >
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
  font-weight: 500;
  font-size: 1.5rem;
  color: #3f3f3f;
  padding: 2%;
}

.container-fluid {
  position: sticky;
}
</style>
