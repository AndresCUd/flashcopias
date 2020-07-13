<template>
  <b-row>
    <b-navbar fixed="bottom" toggleable="sm" variant="info">
      <b-navbar-nav class="col-felx d-flex justify-content-start">
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
      <b-navbar-nav class="col-felx d-flex justify-content-center">
        <b-button left>COTIZA AQUI !</b-button>
      </b-navbar-nav>
      <b-navbar-nav class="col-felx d-flex justify-content-end">
        <p>
          <strong> 2456282 </strong>
          <img
            src="../assets/SVG/llamada.svg"
            class="d-inline-block align-left"
            alt="Kitten"
            style="width: 6%;"
          />
          <br />
          <strong> 317-5871273 </strong>
          <img
            src="../assets/SVG/whatsapp.svg"
            class="d-inline-block align-left"
            alt="Kitten"
            style="width: 6%;"
          />
          <br />
          <strong> flashcopias@hotmail.com </strong>
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
  </b-row>
</template>

<style spand>
nav {
  background-image: url("../assets/fondo_top.png");
  margin: 0%;
  padding: 0%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  /* Needed to position the navbar */
  position: relative;
}
a {
  font-size: 15px;
  font-weight: bold;
  color: black;
}

a:hover {
  color: black;
  text-decoration: none;
}
nav-brand {
  margin: 0%;
  padding: 0%;
}
p {
  text-align: center;
  font-size: 10px;
}

.class {
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
}
.row.match-my-cols {
  overflow: hidden;
}
.row.match-my-cols [class*="col-"] {
  margin-bottom: -99999px;
  padding-bottom: 99999px;
}

</style>
