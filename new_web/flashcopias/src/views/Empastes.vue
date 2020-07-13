<template>
  <b-row style="min-height: 33vw;">
    <title-page title="EMPASTES" />
    <carruseles v-bind:items="items" />
  </b-row>
</template>

<script>
import carruseles from "../components/carruseles";
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
          title: "ESPIRAL",
          text:
            "Anillo plástico, caratula plástica policover, ideal hasta 150 hojas",
          img: require("@/assets/empastes/espirales.png"),
          diabled: false,
          index: 0,
        },
        {
          title: "DOBLE O ",
          text:
            "Anillo metálico, caratula plástica policover, ideal hasta 80 hojas",
          img: require("@/assets/empastes/doble _o.png"),
          diabled: false,
          index: 1,
        },
        {
          title: "VELOBIND",
          text:
            "Banda platica con 4 pines, caratula plástica policover, ideal hasta 50 hojas",
          img: require("@/assets/empastes/velobind.png"),
          diabled: true,
          index: 2,
        },
        {
          title: "RUSTICO",
          text: "Tapa plástica policover. Cosido, lomo en Percalina.",
          img: require("@/assets/empastes/rustico.png"),
          diabled: true,
          index: 3,
        },
        {
          title: "DOBLE O ",
          text:
            "Anillo metálico, caratula plástica policover, ideal hasta 80 hojas",
          img: require("@/assets/empastes/doble _o.png"),
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
  background-color: cornsilk;
}
.container-fluid {
  position: absolute;
}
</style>
