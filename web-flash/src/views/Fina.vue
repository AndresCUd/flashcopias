<template>
  <v-main fluid>
    <title-page title="Encuadernación fina" />
    <v-main style="padding-top: 2%;padding-left: 10%;padding-right: 12%">
      <carruseles v-bind:items="items" />
    </v-main>
  </v-main>
</template>

<script>
import title_page from "../components/title_page";
import carruseles from "../components/carrusel";
export default {
  name: "Escaner",
  components: {
    "title-page": title_page,
    carruseles,
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
      ],
    };
  },
};
</script>
