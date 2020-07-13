<template>
  <div style="padding-left:20%;padding-right:20%;">
    <b-container block class="buenas"
      ><strong> {{ title }} </strong>
    </b-container>
  </div>
</template>
<script>
export default {
  props: ["title"],
};
</script>

<style spand>
strong {
  font-size: 4vh;
  color: black;
}

.buenas {
  background-color: #d2d2d2;
  border-radius: 6px;
  width: 100%;
}
div {
  width: 100%;
  margin: 0%;
  padding: 0%;
}
</style>
