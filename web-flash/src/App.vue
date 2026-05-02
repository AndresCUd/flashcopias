<template>
  <v-app>
    <v-app-bar app elevation="2" class="main-app-bar">
      <v-app-bar-nav-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up white--text"
      ></v-app-bar-nav-icon>
      <router-link
        tag="img"
        :src="require('./assets/logo.png')"
        style="margin-left: 1%; cursor: pointer"
        class="mr-3"
        height="53rem"
        :to="{ name: 'Home' }"
      ></router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-menu
          v-for="(items, index) in menuItems"
          :key="index"
          offset-y
          open-on-hover
          transition="slide-y-transition"
        >
          <template v-slot:activator="{ attrs, on }">
            <v-btn
              class="white--text font-weight-bold"
              text
              v-bind="attrs"
              v-on="on"
              style="
                letter-spacing: 0.5px;
                text-transform: none;
                font-size: 1rem;
                font-family: 'Poppins', sans-serif;
              "
            >
              {{ items.title }}
            </v-btn>
          </template>
          <v-list class="menu-dropdown">
            <v-list-item
              v-for="(ite, index2) in items.subLinks"
              :key="index2"
              route
              :to="ite.link"
              class="menu-item"
            >
              <v-list-item-title class="menu-item-text">{{
                ite.title
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
      <v-spacer style="max-width: 5%"></v-spacer>
    </v-app-bar>
    <v-navigation-drawer app temporary v-model="sideNav" class="mobile-drawer">
      <v-list flat>
        <v-list-group
          no-action
          v-for="(items, index) in menuItems"
          :key="index"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title style="color: #f5f5f5 !important">{{
                items.title
              }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="(ite, index2) in items.subLinks"
            :key="index2"
            route
            :to="ite.link"
            style="color: #f5f5f5 !important"
          >
            <v-list-item-title>{{ ite.title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-main class="bg-light">
      <v-slide-y-transition mode="out-in">
        <router-view />
      </v-slide-y-transition>
    </v-main>
    <piePagina />
    <navButton />
  </v-app>
</template>

<script>
import piePagina from "./components/AppFooter";
import navButton from "./components/AppNavbar";

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
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.bg-light {
  background-color: #f8f9fa;
}
.main-app-bar {
  background: linear-gradient(135deg, #0070c0 0%, #005a9c 100%) !important;
  border-bottom: 3px solid #c55a11;
}
.mobile-drawer {
  background: linear-gradient(180deg, #0070c0 0%, #004b80 100%) !important;
}
.menu-dropdown {
  border-radius: 8px !important;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}
.menu-item {
  transition: background-color 0.2s ease;
}
.menu-item:hover {
  background-color: #f0f7ff;
}
.menu-item-text {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: #0070c0 !important;
}
button,
.botones {
  cursor: pointer;
  outline: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Poppins", sans-serif !important;
}
</style>
