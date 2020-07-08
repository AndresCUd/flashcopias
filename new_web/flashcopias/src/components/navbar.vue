<template>
  <div>
    <b-navbar toggleable="lg" variant="info">
      <b-navbar-brand href="#" class="col-lg-3">
        <img
          src="../assets/logo.png"
          class="d-inline-block align-left"
          alt="Kitten"
        />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Impresiones" right>
            <b-dropdown-item href="#">B&N - Color</b-dropdown-item>
            <b-dropdown-item href="#">CD's</b-dropdown-item>
            <b-dropdown-item href="#">Ploter</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-dd-divider class="mx-4" inset vertical></b-dd-divider>
          <b-nav-item-dropdown text="Empastes" right>
            <b-dropdown-item href="#">Fino</b-dropdown-item>
            <b-dropdown-item href="#">Rusticoss</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-dd-divider class="mx-4" inset vertical></b-dd-divider>
          <b-nav-item-dropdown text="Escaner" right>
            <b-dropdown-item href="#">Documentos</b-dropdown-item>
            <b-dropdown-item href="#">Gran Formato</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-dd-divider class="mx-4" inset vertical></b-dd-divider>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<style>
nav {
  background-image: url("../assets/fondo_top.png");
  margin: 0%;
  padding: 0%;
}
span {
  font-size: 3vmin;
  font-weight: bold;
}
a {
  font-size: 3vmin;
  font-weight: bold;
}
nav-brand {
  width: 55%;
  margin: 0%;
  padding: 0%;
}
img {
  width: 100%;
}
</style>
