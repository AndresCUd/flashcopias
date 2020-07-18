<template>
  <v-main>
    <title-page title="Fotocopias e impresiones lasser B&N - Color" />
    <v-main style="padding-left: 10%;padding-right: 12%">
      <v-row align="center">
        <v-col style="margin-top:2em;" cols="12" sm="4">
          <v-img
            style="margin-rigth:0;display:block;margin:auto;"
            src="../assets/maquina.png"
            max-width="15rem"
          />
        </v-col>
        <v-col cols="12" sm="4">
          <p class="hola">
            Dale un toque especial a tus proyectos imprimiendo en diferentes
            tipos y tamaños de papel <br />
            <br />
            Tamaño: Carta, Oficio, Tabloide. A3 <br />
            <br />
            Papeles: Bond 75 grs, Opalina, Cartulina, propalcote, Fotográfico
          </p>
        </v-col>
        <v-col cols="12" sm="4">
          <p style=" padding:10% ;" class="hola">
            Sabemos lo valioso que es tu tiempo por eso envíanos tus archivos
            para impresión vía email
          </p></v-col
        >
      </v-row>
    </v-main>
  </v-main>
</template>

<script>
import title_page from "../components/title_page";
export default {
  name: "impresiones",
  components: {
    "title-page": title_page,
  },
};
</script>

<style scoped>
.hola {
  font-weight: 500;
  margin-top: 10%;
  font-size: 1.2rem;
  color: #3f3f3f;
  padding: 2%;
  text-align: center;
}
</style>
