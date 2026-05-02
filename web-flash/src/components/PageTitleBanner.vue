<template>
  <div class="title-banner">
    <v-container fluid class="pa-0">
      <div class="d-flex align-center justify-center banner-content">
        <p class="titulo mb-0 text-center font-weight-medium">
          {{ title }}
        </p>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped>
.title-banner {
  background: linear-gradient(90deg, #005a9c 0%, #0070c0 50%, #005a9c 100%);
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}
.banner-content {
  min-height: 3.5rem;
  padding: 0.5rem 1rem;
}
.titulo {
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 1.25rem;
  letter-spacing: 0.5px;
}
</style>
