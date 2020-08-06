<template>
  <v-app>
    <v-app-bar fixed>
      <v-app-bar-nav-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up "
      ></v-app-bar-nav-icon>
      <router-link
        tag="img"
        :src="require('./assets/logo.png')"
        style="margin-left:1%"
        class="mr-3"
        height="53rem"
        :to="{ name: 'Home' }"
      ></router-link>
      <v-toolbar-title> </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-menu v-for="(items, index) in menuItems" :key="index" offset-y>
          <template v-slot:activator="{ attrs, on }">
            <v-btn
              class="white--text botones"
              style="background-color: transparent;margin: 0%;box-shadow:none"
              v-bind="attrs"
              v-on="on"
            >
              {{ items.title }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(ite, index2) in items.subLinks"
              :key="index2"
              route
              :to="ite.link"
            >
              <v-list-item-title>{{ ite.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
      <v-spacer style="max-width: 5%;"></v-spacer>
    </v-app-bar>
    <v-navigation-drawer
      fixed
      temporary
      v-model="sideNav"
      src="./assets/fondo_top.png"
    >
      <v-list flat>
        <v-list-group
          no-action
          v-for="(items, index) in menuItems"
          :key="index"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title style=" color: #f5f5f5 !important;">{{
                items.title
              }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="(ite, index2) in items.subLinks"
            :key="index2"
            route
            :to="ite.link"
            style=" color: #f5f5f5 !important;"
          >
            <v-list-item-title>{{ ite.title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-main relative style="margin-top: 3.5rem;">
      <router-view />
    </v-main>
    <piePagina />
    <navButton />
  </v-app>

  <!--
     ═══•◉•═════
▂▄▄▓▄▄▂
◢◤ █▀▀████▄▄▄▄◢◤
█▄ █ █▄ ███▀▀▀▀▀▀▀╬
◥█████◤
═╩══╩═
╬═╬
╬═╬
╬═╬
╬═╬ Chau, desinstalen.
╬═╬ ●/
╬═╬/▌
╬═╬/ \  
  -->
</template>

<script>
import piePagina from "./components/footer_1";
import navButton from "./components/navbar";

export default {
  name: "App",
  components: { piePagina, navButton },
  data() {
    return {
      sideNav: false,
      menuItems: [
        {
          title: "Impresiones",
          subLinks: [
            {
              title: "B&N - Color",
              link: "/impresiones",
            },
            {
              title: "CD's",
              link: "/cd",
            },
            {
              title: "Plotter",
              link: "/plotter",
            },
          ],
        },
        {
          title: "Encuadernación",
          subLinks: [
            {
              title: "Encuadernación Fina",
              link: "/empaste/fino",
            },
            {
              title: "Empastes",
              link: "/empaste/empastes",
            },
          ],
        },
        {
          title: "Escaner",
          subLinks: [
            {
              title: "Escaner",
              link: "/escaner",
            },
          ],
        },
      ],
    };
  },
  computed: {
    options() {
      return {
        duration: 500,
        offset: 50,
      };
    },
  },
};
</script>

<style>
button,
.botones {
  cursor: pointer;
  overflow: hidden;
  outline: none;
}
header {
  background-image: url("./assets/fondo_top.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  max-height: 60px;
}
</style>
