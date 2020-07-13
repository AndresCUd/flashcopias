<template>
  <b-row style="min-height: 33vw;">
    <title-page title="ENCUADERNACION FINA" />
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
          title: "TRADICIONAL",
          text:
            "Cartón forrado en Percalina, marcado en letra dorada, blanca o  Plateada",
          img: require("@/assets/empastes/libros_tradicional.png"),
          diabled: false,
          index: 0,
        },
        {
          title: "PERSONALIZADO",
          text:
            "Pasta Dura o Blanda, plastificada al calor. Imprimimos a COLOR laser el diseño  que le quiere dar a su trabajo.",
          img: require("@/assets/empastes/libros_pasta_blanda.png"),
          diabled: false,
          index: 1,
        },
        {
          title: "MDF",
          text:
            "Nos traes tu diseño y nosotros lo plasmamos en madera, con lomo en percalina",
          img: require("@/assets/empastes/mdf.png"),
          diabled: true,
          index: 2,
        },
        {
          title: "CUERO",
          text:
            "Tapa Dura, forrada en Cuero, letras doradas, con incrustación de la portada que desee a color.",
          img: require("@/assets/empastes/libros_cuero.png"),
          diabled: true,
          index: 3,
        },
        {
          title: "ARCHIVO EMPRESARIAL",
          text:
            "Tapa Dura, forrado en Percalina, letras doradas. Recogemos o vamos a su empresa.",
          img: require("@/assets/empastes/lirbos_empresarial.png"),
          diabled: false,
          index: 4,
        },
        {
          title: "TRADICIONAL",
          text:
            "Cartón forrado en Percalina, marcado en letra dorada, blanca o  Plateada",
          img: require("@/assets/empastes/libros_tradicional.png"),
          diabled: false,
          index: 5,
        },
        {
          title: "PERSONALIZADO",
          text:
            "Pasta Dura o Blanda, plastificada al calor. Imprimimos a COLOR laser el diseño  que le quiere dar a su trabajo.",
          img: require("@/assets/empastes/libros_pasta_blanda.png"),
          diabled: false,
          index: 6,
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
