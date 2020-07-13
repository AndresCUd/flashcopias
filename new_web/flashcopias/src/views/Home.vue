<template>
  <b-container fluid style="min-height: 33vw;">
    <b-row align-v="stretch">
      <b-col md="auto">
        <title-page title="FOTOCOPIAS E IMPRESIONES" />
      </b-col>
    </b-row>
    <b-row align-v="stretch">
      <b-col align-self="center">
        <br /><br />
        <b-img
          fluid
          style="  width: 80%; height: 80%;"
          src="../assets/home/left.png"
        ></b-img
      ></b-col>
      <b-col>
        <b-img
          fluid-grow
          src="../assets/home/colors.png"
          alt="Center image"
        ></b-img>
      </b-col>
      <b-col style="margin:2%">
        <br /><br /><br /><br />
        <p class="hola">
          Sabemos lo valioso que es tu tiempo por eso envíanos tus archivos para
          impresión y encuadernación vía email.
        </p>
      </b-col>
    </b-row>
    <b-row align-v="stretch">
      <b-col md="auto">
        <p class="font-title-30">
          30 AÑOS LO DICEN TODO
        </p>
        <p class="font-title-20">
          “CALIDAD Y SERVICIO AL MEJOR PRECIO”
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
  resize: both;
  margin: 0%;
  padding: 0%;
  background-color: cornsilk;
}
.hola {
  font-weight: 600;
  font-size: 4vh;
}

.font-title-30 {
  color: #0070c0;
  font-family: "Aharoni";
  font-weight: 900;
  font-size: 4vh;
  font-style: italic;
}
.font-title-20 {
  color: #c55a11;
  font-family: "Aharoni";
  font-weight: 900;
  font-size: 4vh;
  font-style: italic;
}
@font-face {
  font-family: "Aharoni";
  src: url("../assets/fonts/ahronbd.ttf") format("truetype");
}

p {
  font-size: 3vh;
}
.container-fluid {
  position: sticky;
}
</style>
