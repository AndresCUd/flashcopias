<template>
  <b-container fluid style="min-height: 33vw;">
    <title-page title="Fotocopias e impresiones" />
    <b-row>
      <b-col sm="4" align-self="center">
        <br /><br />
        <b-img fluid-grow src="../assets/home/left.png"></b-img
      ></b-col>
      <b-col sm="4" style="padding-top:3rem">
        <p class="font-title-30">
          30 AÑOS LO DICEN TODO
        </p>
        <p class="font-title-20">
          “CALIDAD Y SERVICIO AL MEJOR PRECIO”
        </p>
      </b-col>
      <b-col sm="3" style="margin:2%">
        <br /><br /><br /><br />
        <p class="hola">
          Sabemos lo valioso que es tu tiempo por eso envíanos tus archivos para
          impresión y encuadernación vía email.
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import title_page from "../components/title_page";
export default {
  name: "Home",
  components: {
    "title-page": title_page,
  },
};
</script>

<style scoped>
div {
  width: 100%;
  background-color: white;
  margin: 0%;
}
.hola {
  font-weight: 400;
  font-size: 1.5rem;
  color: #3f3f3f;
}

.font-title-30 {
  color: #0070c0;
  font-family: "Aharoni";
  font-weight: 900;
  font-size: 1.8rem;
  font-style: italic;
}
.font-title-20 {
  color: #c55a11;
  font-family: "Aharoni";
  font-weight: 900;
  font-size: 1.8rem;
  font-style: italic;
}
@font-face {
  font-family: "Aharoni";
  src: url("../assets/fonts/ahronbd.ttf") format("truetype");
}

p {
  font-size: 11.5rem;
}
.container-fluid {
  position: sticky;
}
</style>
