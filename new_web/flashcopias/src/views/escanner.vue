<template>
  <div>
    <b-row>
      <title-page title="ESCANNER" />
    </b-row>
    <b-row>
      <b-col sm="3" style="margin-top: 5%">
        <b-img fluid center src="../assets/maquina_1.png" style="width:18em" />
      </b-col>
      <b-col sm="3">
        <p class="hola">
          Scanner alta velocidad hasta tamaño tabloide, a PDF, o JPG
        </p>
      </b-col>
      <b-col sm="3" style="margin-top: 5% ">
        <b-img fluid center src="../assets/ploter.png" style="width:15em;" />
      </b-col>
      <b-col sm="3">
        <p class="hola">Escanner Gran formato PDF o JPG</p>
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
  background-color: white;
}
.hola {
  font-weight: 400;
  font-size: 1.8rem;
  color: #3f3f3f;
  margin-block-start: 20%;
}

.container-fluid {
  position: sticky;
}
</style>
