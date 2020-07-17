<template>
  <div>
    <b-container block class="buenas"
      ><p>{{ title }}</p>
    </b-container>
  </div>
</template>
<script>
export default {
  props: ["title"],
};
</script>

<style spand>
p {
  font-size: 1.5rem;
  color: whitesmoke;
}

.buenas {
  background-color: rgb(88, 86, 86);
  padding: 0%;
  min-width: 100%;
  max-width: 100%;
  max-height: 2.5rem;
  min-height: 2.5rem;
}
div {
  width: 100%;
  margin: 0%;
  padding: 0%;
}
</style>
