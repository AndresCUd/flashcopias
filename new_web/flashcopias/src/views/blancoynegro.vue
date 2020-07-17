<template>
  <b-container fluid style="min-height: 33vw;">
    <b-row align-v="stretch">
      <title-page title="Fotocopias e impresiones lasser B&N - Color" />
    </b-row>
    <b-row>
      <b-col style="margin-top:5em;" sm="4">
        <img
          src="../assets/maquina.png"
          alt="Kitten"
          style="width: 15em;padding: 2%;"
        />
      </b-col>
      <b-col sm="4">
        <p class="hola">
          Dale un toque especial a tus proyectos imprimiendo en diferentes tipos
          y tamaños de papel <br />
          <br />
          Tamaño: Carta, Oficio, Tabloide. A3 <br />
          <br />
          Papeles: Bond 75 grs, Opalina, Cartulina, propalcote, Fotográfico
        </p>
      </b-col>
      <b-col sm="4">
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
  margin-top: 10%;
  font-size: 1.5rem;
  color: #3f3f3f;
  padding: 2%;
}
.container-fluid {
  position: sticky;
}
</style>
