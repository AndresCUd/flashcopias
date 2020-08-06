<template>
  <v-main fluid style="min-height: 33vw;">
    <title-2 title="Fotocopias e impresiones B&N  y color laser" />
    <v-main style="padding-left: 10%;padding-right: 12%;padding-top: 3%">
      <p class="font-title-30">
        30 AÑOS LO DICEN TODO
      </p>
      <p class="font-title-20">
        “CALIDAD Y SERVICIO AL MEJOR PRECIO”
      </p>
      <p class="text-1">
        Contamos con 30 años de experiencia prestando servicio de fotocopias e
        impresiones en equipo de tecnología avanzada, encuadernación de
        cualquier tipo de documento, destacándonos por calidad, cumplimiento,
        servicio y rapidez.
      </p>
      <v-flex class="separador"> </v-flex>

      <v-row class="d-flex justify-space-around" color="lighten-2" cols>
        <v-col outlined cols="12" sm="4">
          <v-row align="center">
            <v-col align="center">
              <h2>Alianza</h2>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col align="center">
              <v-img src="../assets/fenalco.png" width="10rem"></v-img
            ></v-col> </v-row
        ></v-col>
        <v-col outlined cols="12" sm="4">
          <v-row align="center">
            <v-col align="center">
              <p class="text-2">
                Sabemos lo valioso que es tu tiempo por eso envíanos tus
                archivos para impresión y encuadernación vía email.<br /><br />
              </p>
              <h1 style="color:red">Servicio a Domicilio</h1>
            </v-col>
          </v-row>
          <v-row align="center"> <v-col align="center"></v-col> </v-row
        ></v-col>
        <v-col outlined cols="12" sm="4">
          <v-row align="center">
            <v-col align="center">
              <h2>Autorización</h2>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col align="center">
              <v-img src="../assets/cdr.png" width="15rem"></v-img
            ></v-col> </v-row
        ></v-col>
      </v-row>
    </v-main>
  </v-main>
</template>
<script>
import title from "../components/title_page";
export default {
  components: { "title-2": title },
};
</script>

<style scoped>
.separador {
  background-image: url("../assets/fondo_top.png");
  margin-left: 40%;
  margin-right: 40%;
  height: 5px;
  align-self: center;
}
.text-1 {
  color: grey;
  padding-left: 15%;
  padding-right: 15%;
  font-size: 1rem;
}
.text-2 {
  color: grey;
  padding-left: 5%;
  padding-right: 5%;
  font-size: 1rem;
}
.font-title-30 {
  color: #0070c0;
  font-family: "Aharoni";
  font-weight: 900;
  font-size: 2rem;
  font-style: italic;
  line-height: 0.8;
}
.font-title-20 {
  color: #c55a11;
  font-family: "Aharoni";
  font-weight: 900;
  font-size: 1.1rem;
  font-style: italic;
  line-height: 0.8;
}
p {
  text-align: center;
}
@font-face {
  font-family: "Aharoni";
  src: url("../assets/fonts/ahronbd.ttf") format("truetype");
}
</style>
