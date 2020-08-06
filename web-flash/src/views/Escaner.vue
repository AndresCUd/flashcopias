<template>
  <v-main fluid>
    <title-page title="Escaner" />
    <v-main style="padding-top: 2%;padding-left: 10%;padding-right: 12%">
      <v-row>
        <v-col cols="12" sm="3" style="margin-top: 5%">
          <v-img
            style="margin-rigth:0;display:block;margin:auto;"
            src="../assets/maquina_1.png"
            
            max-width="24rem"
          />
        </v-col>
        <v-col cols="12" sm="3">
          <p class="hola">
            Scanner alta velocidad hasta tamaño tabloide, a PDF, o JPG
          </p>
        </v-col>
        <v-col cols="12" sm="3" style="margin-top: 5% ">
          <v-img
            style="margin-rigth:0;display:block;margin:auto;"
            src="../assets/ploter.png"
            
            max-width="24rem"
          />
        </v-col>
        <v-col cols="12" sm="3">
          <p class="hola">Escanner Gran formato PDF o JPG</p>
        </v-col>
      </v-row>
    </v-main>
  </v-main>
</template>

<script>
import title_page from "../components/title_page";
export default {
  name: "Escaner",
  components: {
    "title-page": title_page,
  },
};
</script>

<style scoped>
.hola {
  font-weight: 500;
  margin-top: 10%;
  font-size: 1.5rem;
  color: #3f3f3f;
  padding: 2%;
  text-align: center;
}
</style>
