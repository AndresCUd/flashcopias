<template>
  <div>
    <v-main block class="buenas"
      ><p class="titulo" style="padding-top: 0.8rem;">{{ title }}</p>
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
  max-height: 2.8rem;
  min-height: 2.8rem;
  text-align: center;
}
.titulo {
  color: white;
}
</style>
