<template>
  <v-main fluid class="home-main">
    <title-2 title="Fotocopias e impresiones B&N y color laser" />

    <v-container class="py-10">
      <!-- Hero Section -->
      <v-row class="text-center justify-center mb-10 hero-section">
        <v-col cols="12" md="8">
          <h1 class="display-2 font-weight-bold primary-text mb-4">
            30 AÑOS LO DICEN TODO
          </h1>
          <h2 class="headline font-weight-medium secondary-text mb-6">
            “CALIDAD Y SERVICIO AL MEJOR PRECIO”
          </h2>
          <p class="body-1 text-muted hero-text mx-auto">
            Contamos con 30 años de experiencia prestando servicio de fotocopias
            e impresiones en equipo de tecnología avanzada, encuadernación de
            cualquier tipo de documento, destacándonos por calidad,
            cumplimiento, servicio y rapidez.
          </p>
        </v-col>
      </v-row>

      <div class="custom-divider mb-12"></div>

      <!-- Feature Cards -->
      <v-row class="d-flex justify-space-around" align="stretch">
        <!-- Card 1: Alianza -->
        <v-col cols="12" sm="4" md="4" class="d-flex">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto feature-card d-flex flex-column align-center pa-6 text-center"
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
              width="100%"
            >
              <div class="card-icon-wrapper mb-4">
                <v-icon size="48" color="#0070c0">mdi-handshake</v-icon>
              </div>
              <h3 class="title font-weight-bold mb-4 primary-text">Alianza</h3>
              <v-spacer></v-spacer>
              <v-img
                src="../assets/fenalco.png"
                max-width="150"
                contain
              ></v-img>
            </v-card>
          </v-hover>
        </v-col>

        <!-- Card 2: Servicio a Domicilio -->
        <v-col cols="12" sm="4" md="4" class="d-flex">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto feature-card d-flex flex-column align-center pa-6 text-center highlight-card"
              :elevation="hover ? 12 : 6"
              :class="{ 'on-hover': hover }"
              width="100%"
            >
              <div class="card-icon-wrapper mb-4 bg-orange">
                <v-icon size="48" color="white">mdi-moped</v-icon>
              </div>
              <h3 class="title font-weight-bold mb-4 white--text">
                Servicio a Domicilio
              </h3>
              <p class="body-2 white--text mb-0 flex-grow-1">
                Sabemos lo valioso que es tu tiempo, por eso envíanos tus
                archivos para impresión y encuadernación vía email.
              </p>
            </v-card>
          </v-hover>
        </v-col>

        <!-- Card 3: Autorización -->
        <v-col cols="12" sm="4" md="4" class="d-flex">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto feature-card d-flex flex-column align-center pa-6 text-center"
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
              width="100%"
            >
              <div class="card-icon-wrapper mb-4">
                <v-icon size="48" color="#0070c0">mdi-certificate</v-icon>
              </div>
              <h3 class="title font-weight-bold mb-4 primary-text">
                Autorización
              </h3>
              <v-spacer></v-spacer>
              <v-img src="../assets/cdr.png" max-width="180" contain></v-img>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import title from "../components/PageTitleBanner";
export default {
  components: { "title-2": title },
};
</script>

<style scoped>
.home-main {
  background-color: #fcfcfc;
  min-height: 100vh;
}

.hero-section {
  padding-top: 2rem;
}

.primary-text {
  color: #0070c0 !important;
  font-family: "Poppins", sans-serif !important;
}

.secondary-text {
  color: #c55a11 !important;
  font-family: "Poppins", sans-serif !important;
  letter-spacing: 1px;
}

.text-muted {
  color: #555 !important;
}

.hero-text {
  max-width: 800px;
  font-size: 1.15rem !important;
  line-height: 1.8;
}

.custom-divider {
  height: 4px;
  width: 100px;
  margin: 0 auto;
  background: linear-gradient(90deg, #0070c0 0%, #c55a11 100%);
  border-radius: 2px;
}

.feature-card {
  border-radius: 16px !important;
  transition: all 0.3s ease-in-out;
  border: 1px solid #eee;
  background-color: #ffffff;
}

.feature-card.on-hover {
  transform: translateY(-8px);
  border-color: #0070c0;
}

.highlight-card {
  background: linear-gradient(135deg, #c55a11 0%, #e67528 100%) !important;
  border: none !important;
}

.highlight-card.on-hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 24px rgba(197, 90, 17, 0.3) !important;
}

.card-icon-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #f0f7ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg-orange {
  background-color: rgba(255, 255, 255, 0.2) !important;
}

h3 {
  font-family: "Poppins", sans-serif !important;
}
</style>
