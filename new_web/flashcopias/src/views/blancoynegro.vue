<template>
  <b-container fluid style="min-height: 33vw;">
    <b-row align-v="stretch">
      <title-page title="FOTOCOPIAS E IMPRESIÓN LASER B&N - COLOR" />
    </b-row>
    <b-row align-h="around">
      <b-col>
        <img src="../assets/maquina.png" alt="Kitten" style="width: 18vw;" />
      </b-col>
      <b-col>
        <p class="hola">
          Dale un toque especial a tus proyectos imprimiendo en diferentes tipos
          y tamaños de papel <br />
          <br />
          Tamaño: Carta, Oficio, Tabloide. A3 <br />
          <br />
          Papeles: Bond 75 grs, Opalina, Cartulina, propalcote, Fotográfico
        </p>
      </b-col>
      <b-col align-h="end" style="bottom:0px;">
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
  font-weight: 400;
  margin-top: 5%;
  font-size: 4vh;
}

.container-fluid {
  position: sticky;
}
</style>
