<template v-slot:footer>
  <b-navbar toggleable="mx" class="page-footer">
    <b-navbar-nav class="mx-auto mx-md-0">
      <a href="https://goo.gl/maps/ygxB3vxdpDAPt7V66" target="blank">
        <img
          src="../assets/SVG/ubicacion.svg"
          class="d-inline-block align-left "
          style="width: 3rem;"
        />
        <br />
        Cra 15 No. 47-14 <br />
        BOGOTA- COLOMBIA
      </a>
    </b-navbar-nav>
    <b-navbar-nav class="mx-md-0 md-auto">
      <b-container style="width: 20rem;">
        <b-row>
          <b-col style="text-align: center">
            <a style="font-size: 1.5rem;">Contáctanos </a>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="2"
            ><img
              src="../assets/SVG/llamada.svg"
              class="d-inline-block aling-right"
              alt="Kitten"
              style="width: 1.2rem;"
            />
          </b-col>
          <b-col cols="auto"><p>2456282</p></b-col>
        </b-row>
        <b-row>
          <b-col cols="2">
            <img
              left
              src="../assets/SVG/whatsapp.svg"
              class="d-inline-block aling-right"
              alt="Kitten"
              style="width: 1.2rem;"
            />
          </b-col>
          <b-col cols="auto"> <p>3175871273</p></b-col>
        </b-row>
        <b-row>
          <b-col cols="2">
            <img
              src="../assets/SVG/correo.svg"
              class="d-inline-block aling-right"
              alt="Kitten"
              style="width: 1.2rem;"
            />
          </b-col>
          <b-col cols="auto"><p>flashcopias@hotmail.com</p></b-col>
        </b-row>
      </b-container>
    </b-navbar-nav>
  </b-navbar>
</template>

<style spand>
nav {
  margin: 0px;
  padding: 0px;
  margin-top: 0px;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  /* Needed to position the navbar */
}

.page-footer {
  background-color: #2d2d2d;
}
p {
  font-size: 1.1rem;
  font-weight: 600;
  color: #42b983;
  margin: 0%;
}
strong,
a {
  font-size: 1rem;
  font-weight: bold;
  color: #3f3f3f;
}
div {
  padding-bottom: 0px;
  margin-bottom: 0px;
}
div.col {
  text-align: left;
  padding: 0%;
  height: auto;
}
a:hover {
  color: gray;
  text-decoration: none;
}
</style>
