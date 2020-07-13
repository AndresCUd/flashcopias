<template>
  <div fluid style="min-height: 33vw;">
    <b-row>
      <title-page title="ESCANNER" />
    </b-row>
    <b-row>
      <b-col style="margin-top: 5%;width: 25vw">
        <b-img left src="../assets/maquina_1.png" style="width: 20vw" />
      </b-col>
      <b-col>
        <p class="hola">
          Scanner alta velocidad hasta tamaño tabloide, a PDF, o JPG
        </p>
      </b-col>
      <b-col style="margin-top: 5%;width: 25vw">
        <b-img left src="../assets/ploter.png" style="width: 20vw;" />
      </b-col>
      <b-col>
        <p class="hola">Escanner Gran formato PDF, o JPG</p>
      </b-col>
    </b-row>
  </div>
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
div {
  margin: 0%;
  background-color: cornsilk;
}
.hola {
  font-weight: 700;
  margin-top: 45%;
  font-size: 5vh;
  color: #7f7f7f;
}

.container-fluid {
  position: sticky;
}
</style>
