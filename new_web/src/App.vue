<template>
  <v-app>
    <v-app-bar absolute  src="./assets/fondo.jpg" >
      <div class="d-flex align-center">
        <v-img class="shrink mr-2" contain src="./assets/logo.png" width="150px"></v-img>
      </div>

      <v-spacer></v-spacer>
      <v-divider vertical  light inset color="black"></v-divider>
      <v-menu bottom origin="center center" transition="scale-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text  color="black"  v-bind="attrs" v-on="on">Impresiones</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in impresiones" :key="i">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-divider vertical light inset color="black"></v-divider>
      <v-menu bottom origin="center center" transition="scale-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text color="black"  v-bind="attrs" v-on="on">Encuadernación</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in encuadrenacion" :key="i">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-divider vertical light inset color="black"></v-divider>
      <v-menu bottom origin="center center" transition="scale-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text color="black" v-bind="attrs" v-on="on">Scanner</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in scanner" :key="i">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-content>
      <HelloWorld />
    </v-content>






<v-card >
   <v-footer
      inset
      max-width
      height ="65px"
      class="font-weight-medium"
      style="margin-top: 0px;padding:0;"
    >
    <v-img src="./assets/fondo.jpg"     height="65px">
    </v-img>
    </v-footer>

</v-card >

  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld
  },

  data: () => ({
    impresiones: [
      { title: "B&N - Color" },
      { title: "CD" },
      { title: "Planos" }
    ],
    encuadrenacion: [{ title: "Fina" }, { title: "Empastes" }],
    scanner: [{ title: "Scanner" }, { title: "Gran Formato" }]
  })
};
</script>
