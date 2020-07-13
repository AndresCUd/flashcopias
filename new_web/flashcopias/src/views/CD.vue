<template>
  <b-container fluid style="min-height: 33vw;">
    <b-row align-v="stretch">
      <title-page title="IMPRESIÓN y QUEMADO CD" />
    </b-row>
    <b-row align-h="around">
      <b-col>
        <img
          src="../assets/cd/maquina.png"
          alt="Kitten"
          style="margin-top: 20%; margin-left: 20%;width: 23vw;"
        />

        <p class="hola">
          Label y Quemado CD.
        </p>
      </b-col>
      <b-col>
        <img
          src="../assets/cd/cd.png"
          class=" align-left"
          alt="Kitten"
          style="margin-top: 10%; margin-left: 20%;width: 23vw;"
        />
      </b-col>
      <b-col align-h="end" style="bottom:0px;width:100%;">
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
  background-color: cornsilk;
}
.hola {
  font-weight: 600;

  font-size: 4vh;
}

.container-fluid {
  position: sticky;
}
</style>
