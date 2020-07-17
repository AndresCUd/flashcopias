<template>
  <b-row style="min-height: 33vw;">
    <title-page title="Encuadernación fina" />
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
          title: "Tradicional",
          text:
            "Cartón forrado en percalina, marcado con letra dorada, blanca o  plateada",
          img: require("@/assets/empastes/libros_tradicional.png"),
          diabled: false,
          index: 0,
        },
        {
          title: "Personalizado",
          text:
            "Pasta dura o blanda, puede incluir cualquier diseño que desee para su portada, nosotros la imprimimos en calidad láser, la plastificamos al calor y empastamos.",
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
          title: "Cuero",
          text:
            "Tapa dura, forrada en cuero, letras doradas, con incrustación de la portada que desee a color.",
          img: require("@/assets/empastes/libros_cuero.png"),
          diabled: true,
          index: 3,
        },
        {
          title: "Empresarial",
          text:
            "Tapa dura, forrado en percalina, letras doradas. Recogemos el archivo empresarial para empastar en nuestro taller o  realizamos el empaste en su empresa.",
          img: require("@/assets/empastes/lirbos_empresarial.png"),
          diabled: false,
          index: 4,
        },
        {
          title: "Tradicional",
          text:
            "Cartón forrado en percalina, marcado en letra dorada, blanca o  plateada",
          img: require("@/assets/empastes/libros_tradicional.png"),
          diabled: false,
          index: 5,
        },
        {
          title: "Personalizado",
          text:
            "Pasta dura o blanda, plastificada al calor. Imprimimos a COLOR laser el diseño  que le quiere dar a su trabajo.",
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
  background-color: white;
}
.container-fluid {
  position: absolute;
}
</style>
