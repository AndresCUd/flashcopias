<template>
  <b-navbar toggleable="lg" variant="info" class="nav-top">
    <b-navbar-brand to="/">
      <img src="../assets/logo.png" alt="Kitten" />
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Impresiones" right>
          <b-dropdown-item :to="{ name: 'B&N' }">B&N - Color</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'CD' }">CD's</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'ploter' }">Ploter</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-dd-divider class="mx-4" inset vertical></b-dd-divider>
        <b-nav-item-dropdown text="Encuadernación" right>
          <b-dropdown-item :to="{ name: 'Empastes_fino' }"
            >Fino</b-dropdown-item
          >
          <b-dropdown-item :to="{ name: 'Empastes' }">Empastes</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-dd-divider class="mx-4" inset vertical></b-dd-divider>
        <b-nav-item-dropdown text="Escaner" right>
          <b-dropdown-item :to="{ name: 'escanner' }"
            >Documentos y Gran Formato</b-dropdown-item
          >
          <b-dropdown-item href="#"></b-dropdown-item>
        </b-nav-item-dropdown>
        <b-dd-divider class="mx-4" inset vertical></b-dd-divider>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<style spand>
.nav-top {
  background-image: url("../assets/fondo_top.png");
  margin: 0%;
  padding: 0%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* Needed to position the navbar */
  position: relative;
}
span {
  font-size: 3vh;
  font-weight: bold;
}
a {
  font-size: 3vh;
  font-weight: bold;
  color: black;
}

nav-brand {
  margin: 0%;
  padding: 0%;
}
img {
  width: 22ch;
}
</style>
