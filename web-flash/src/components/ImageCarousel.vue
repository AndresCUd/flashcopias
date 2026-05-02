<template>
  <v-row class="justify-center mt-6" align="stretch">
    <v-col
      v-for="(item, index) in items"
      cols="12"
      sm="6"
      md="4"
      :key="index"
      class="d-flex"
    >
      <v-hover v-slot:default="{ hover }">
        <v-card
          class="mx-auto modern-card d-flex flex-column"
          :elevation="hover ? 12 : 2"
          :class="{ 'on-hover': hover }"
          width="100%"
        >
          <div class="image-wrapper">
            <v-img
              :src="item.img"
              class="card-img"
              contain
              max-height="200"
            ></v-img>
          </div>

          <v-card-title class="justify-center card-title pb-0 mt-4">
            {{ item.title }}
          </v-card-title>

          <div class="custom-divider mt-2 mb-4"></div>

          <v-card-text class="card-text flex-grow-1 text-center">
            {{ item.text }}
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ImageCarousel",
  props: {
    items: { type: Array, required: true },
  },
};
</script>

<style scoped>
.modern-card {
  border-radius: 16px !important;
  transition: all 0.3s ease-in-out;
  border: 1px solid #f0f0f0;
  background-color: #ffffff;
  overflow: hidden;
}

.modern-card.on-hover {
  transform: translateY(-8px);
  border-color: #0070c0;
}

.image-wrapper {
  padding: 1.5rem;
  background-color: #fcfcfc;
  border-bottom: 1px solid #f0f0f0;
}

.card-title {
  color: #0070c0;
  font-family: "Poppins", sans-serif !important;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.2;
}

.card-text {
  font-family: "Roboto", sans-serif !important;
  color: #555555 !important;
  font-size: 1rem;
  line-height: 1.6;
  padding: 0 1.5rem 1.5rem 1.5rem;
}

.custom-divider {
  height: 3px;
  width: 60px;
  margin: 0 auto;
  background: linear-gradient(90deg, #0070c0 0%, #c55a11 100%);
  border-radius: 2px;
}
</style>
