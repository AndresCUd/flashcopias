<template>
  <v-main>
    <title-page title="Impresión de Planos" />
    <v-main>
      <v-row>
        <v-col cols="12" sm="4">
          <v-img
            style="margin-top:3rem;display:block;margin:auto;"
            src="../assets/ploter.png"
            
            max-width="20rem"
          />
        </v-col>
        <v-col cols="12" sm="4">
          <p class="hola" style="margin-top:5rem;">
            Una óptima calidad también depende del tipo de papel escogido, entre
            los cuales tenemos Bond, opalina y pergamino.
          </p></v-col
        >
        <v-col cols="12" sm="4" style="margin-top:3rem;">
          <v-img
            style="margin-top:3rem;margin-rigth:0;display:block;margin:auto;"
            src="../assets/planos.png"
            
            max-width="30rem"
          />
        </v-col>
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
  font-size: 1.5rem;
  color: #3f3f3f;
  padding: 2%;
  text-align: center;
}
</style>
