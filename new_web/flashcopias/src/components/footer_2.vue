<template v-slot:footer>
  <b-container fluid>
    <b-navbar toggleable="lg" class="page-footer">
      <b-navbar-nav class="mx-1">
        <a href="https://goo.gl/maps/ygxB3vxdpDAPt7V66" target="blank">
          <img
            src="../assets/SVG/ubicacion.svg"
            class="d-inline-block align-left"
            alt="Kitten"
            style="width: 5vmin;"
          />
          <br />
          Cra 15 No. 47-14 <br />
          BOGOTA- COLOMBIA
        </a>
      </b-navbar-nav>
      <b-navbar-nav class="col-1" align="center"> </b-navbar-nav>
      <b-navbar-nav class="mx-auto" align="center">
        <b-button> <strong> COTIZA AQUI ! </strong> </b-button>
      </b-navbar-nav>
      <b-navbar-nav class="l-0 r-0">
        <p>
          <a> 2456282 </a>
          <img
            src="../assets/SVG/llamada.svg"
            class="d-inline-block align-left"
            alt="Kitten"
            style="width: 6%;"
          />
          <br />
          <a> 317-5871273 </a>
          <img
            src="../assets/SVG/whatsapp.svg"
            class="d-inline-block align-left"
            alt="Kitten"
            style="width: 6%;"
          />
          <br />
          <a> flashcopias@hotmail.com </a>
          <img
            src="../assets/SVG/correo.svg"
            class="d-inline-block align-left"
            alt="Kitten"
            style="width: 6%;"
          />

          <br />
        </p>
      </b-navbar-nav>
    </b-navbar>
  </b-container>
</template>

<style spand>
nav {
  background-image: url("../assets/fondo_top.png");
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

strong,
a {
  font-size: 2vh;
  font-weight: bold;
  color: black;
}
div {
  padding-bottom: 0px;
  margin-bottom: 0px;
}
a:hover {
  color: black;
  text-decoration: none;
}
</style>
