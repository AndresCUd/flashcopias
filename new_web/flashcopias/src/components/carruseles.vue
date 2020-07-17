<template>
  <b-row align-v="stretch" style="width:100%;padding-left:5%;padding-right:5%">
    <b-col block>
      <div class="carousel-control-prev">
        <b-button
          class="carousel-control-prev-icon"
          v-on:click="updateCounter(-1)"
        ></b-button>
      </div>
    </b-col>
    <b-col sm="4" v-for="(item, index) in visibleEmpaste" :key="index">
      <b-img
        thumbnail
        fluid
        center
        style="height: 11rem;"
        :src="item.img || require('@/assets/logo.png')"
      >
      </b-img>
      <h1>{{ item.title }}</h1>
      <b-img center v-bind="mainProps" rounded></b-img>
      <p>{{ item.text }}</p>
    </b-col>
    <b-col style="display:inline-block;">
      <div class="carousel-control-next button" v-on:click="updateCounter(1)">
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
      mainProps: {
        blank: true,
        blankColor: "#777",
        height: 5,
        class: "m1",
        style: "padding-left:15%;padding-right:15%",
      },
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
div {
  margin: 0%;
  padding-bottom: 2px;
  padding-top: 2px;
  background-color: white;
}
.container-fluid {
  position: absolute;
}

h1,
p {
  color: #3f3f3f;
  text-align: center;
  text-justify: inter-word;
}
p {
  font-size: 1rem;
  padding: 8%;
}
</style>
