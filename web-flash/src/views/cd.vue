<template>
  <v-main fluid style="min-height: 33vw;">
    <title-page title="Impresión sobre CD y Quemado CD" />
    <v-main style="padding-left: 10%;padding-right: 12%">
      <v-row align="center">
        <v-col cols="12" sm="4">
          <v-img
            style="margin-rigth:0;display:block;margin:auto;"
            src="../assets/cd/maquina.png"
            max-width="17rem"
          />
          <p class="hola">
            Label y Quemado CD.
          </p>
        </v-col>
        <v-col cols="12" sm="4">
          <v-img
            style="margin-rigth:0;display:block;margin:auto;"
            src="../assets/cd/cd.png"
            max-width="24rem"
          />
        </v-col>
        <v-col cols="12" sm="4">
          <p class="hola">
            Grabamos en CD o DVD ya sea texto, video, o tus fotos favoritas;
            adicional le puedes dar un toque personal con el diseño que desees
            imprimirle al disco.
          </p></v-col
        >
      </v-row>
    </v-main>
  </v-main>
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
.hola {
  font-weight: 500;
  margin-top: 10%;
  font-size: 1.2rem;
  color: #3f3f3f;
  padding: 2%;
  text-align: center;
}
</style>
