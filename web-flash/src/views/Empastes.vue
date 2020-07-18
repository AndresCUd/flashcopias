<template>
  <v-main fluid>
    <title-page title="Empastes" />
    <v-main style="padding-top: 2%;padding-left: 10%;padding-right: 12%">
      <carruseles v-bind:items="items" />
    </v-main>
  </v-main>
</template>

<script>
import carruseles from "../components/carrusel";
import title_page from "../components/title_page";
export default {
  name: "carruseal",
  components: {
    carruseles,
    "title-page": title_page,
  },
  data() {
    return {
      items: [
        {
          title: "Espiral",
          text:
            "Anillo plástico, caratula plástica policover, ideal hasta 150 hojas",
          img: require("@/assets/empastes/espirales.png"),
          diabled: false,
          index: 0,
        },
        {
          title: "Doble O ",
          text:
            "Anillo metálico, caratula plástica policover, ideal hasta 80 hojas",
          img: require("@/assets/empastes/doble _o.png"),
          diabled: false,
          index: 1,
        },
        {
          title: "Velobind",
          text:
            "Banda plástica con 4 pines, caratula plástica policover, ideal hasta 50 hojas",
          img: require("@/assets/empastes/velobind.png"),
          diabled: true,
          index: 2,
        },
        {
          title: "Rústico",
          text: "Tapa plástica policover, cosido y pegado, lomo en percalina.",
          img: require("@/assets/empastes/rustico.png"),
          diabled: true,
          index: 3,
        },
        {
          title: "Catálogo colores empastes",
          text:
            "Con esta diversidad de tapas plásticas policover, le darás un toque personal a tus trabajos",
          img: require("@/assets/empastes/catalogo_colores.png"),
          diabled: false,
          index: 4,
        },
      ],
    };
  },
};
</script>

<style scoped>
div {
  margin: 0%;

  background-color: white;
}
.container-fluid {
  position: absolute;
}
</style>
