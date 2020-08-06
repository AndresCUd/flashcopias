<template>
  <v-footer color="grey" dark text-xs-center>
    <v-layout justify-space-around>
      <v-flex text-xs-center cols="12" sm="4">
        <a href="https://goo.gl/maps/ygxB3vxdpDAPt7V66" target="blank">
          <p style="font-size: 0.9rem;" class="parrafo">
            <v-icon> mdi-map-marker-radius</v-icon>
            <br />
            Cra 15 No. 47-14 <br />
            BOGOTA- COLOMBIA
          </p>
        </a>
      </v-flex>
    </v-layout>
    <v-spacer> </v-spacer>
    <v-layout justify-space-around>
      <v-flex text-xs-center>
        <p style="text-align: left;" class="parrafo">
          <a href="tel:0312456282">
            <v-icon>mdi-phone-classic </v-icon>
            2456282
          </a>
          <br />
          <a
            href="https://api.whatsapp.com/send?phone=573175871273&text=Hola%2C%20que%20horario%20de%20atenci%C3%B3n%20tiene%20%3F"
            target="blank"
          >
            <v-icon>mdi-whatsapp</v-icon> 317-5871273
          </a>

          <br />
          <a href="mailto:flashcopias@hotmail.com">
            <v-icon>mdi-email-edit </v-icon>
            flashcopias@hotmail.com
          </a>
        </p>
      </v-flex>
    </v-layout>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    item: 1,
    items: [
      { text: "Real-Time", icon: "mdi-clock" },
      { text: "Audience", icon: "mdi-account" },
      { text: "Conversions", icon: "mdi-place" },
    ],
  }),
};
</script>

<style spand>
.columnas {
  padding: 0%;
}

a {
  font-size: 1rem;
  font-weight: 400;
  color: white !important;
  text-decoration: none;
  margin: 0%;
  padding: 0%;
  text-align: center;
}
a:hover {
  color: gray;
  text-decoration: none;
}
.parrafo {
  font-size: 1rem;
  font-weight: 400;
  color: white;
  margin: 0%;
  padding: 0%;
  padding-top: 1%;
  padding-left: 5vh;
  text-align: center;
}
</style>
