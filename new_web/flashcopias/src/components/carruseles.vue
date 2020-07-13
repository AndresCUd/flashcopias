<template>
  <b-row align-v="stretch">
    <b-col cols="1">
      <div class="carousel-control-prev">
        <b-button
          class="carousel-control-prev-icon"
          v-on:click="updateCounter(-1)"
        ></b-button>
      </div>
    </b-col>
    <b-col>
      <div>
        <b-card-group deck>
          <b-card
            v-for="(item, index) in visibleEmpaste"
            :key="index"
            :title="item.title"
            :img-src="item.img || require('@/assets/empastes/mdf.png')"
            img-top
            style="padding:2px;"
          >
            <b-card-text>
              {{ item.text }}
            </b-card-text>
          </b-card>
        </b-card-group>
      </div>
    </b-col>
    <b-col cols="1">
      <div class="carousel-control-next">
        <b-button
          class="carousel-control-next-icon"
          v-on:click="updateCounter(1)"
        ></b-button>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
    },
  },
  data() {
    return {
      counter: 1,
    };
  },
  methods: {
    updateCounter: function(value) {
      var vm = this;

      if (vm.counter == 1 && value < 0) {
        vm.counter = this.items.length - 2;
      } else if (vm.counter == this.items.length - 2 && value > 0) {
        vm.counter = 1;
      } else {
        vm.counter = vm.counter + value;
      }
      console.log(this.items.length, vm.counter);
    },
  },
  computed: {
    visibleEmpaste: function() {
      return this.items.filter(
        (i) =>
          i.index - 1 == this.counter ||
          i.index == this.counter ||
          i.index + 1 == this.counter
      );
    },
  },
};
</script>

<style scoped>
img {
  height: 30ch;
}
div {
  width: 100%;
  margin: 0%;
  padding-bottom: 2px;
  padding-top: 2px;
  background-color: cornsilk;
}
.container-fluid {
  position: absolute;
}
h4 {
  font-weight: 900;
}
</style>
