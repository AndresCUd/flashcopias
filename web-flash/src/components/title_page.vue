<template>
  <div>
    <v-main class="buenas"
      ><p class="titulo" style="padding-top: 0.6rem;font-size: 1.3rem;">
        {{ title }}
      </p>
    </v-main>
  </div>
</template>
<script>
export default {
  props: ["title"],
};
</script>

<style spand>
.buenas {
  background-color: #9e9e9e;
  padding: 0%;
  min-width: 100%;
  max-width: 100%;
  max-height: 4.2rem;
  min-height: 2.8rem;
  text-align: center;
}
.titulo {
  color: white;
}
</style>
