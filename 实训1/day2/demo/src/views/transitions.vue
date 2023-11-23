<template>
    <div class="box">
      <div class="home">
        <button @click="show = !show">Toggle show</button>
  
        <transition name="bounce">
          <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia
            diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
        </transition>
      </div>
  
  
  
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        show: false
      };
    },
    methods: {},
  };
  </script>
  
  <style lang="scss" scoped>
  .home {
    width: 50%;
    padding: 10px;
    border: 1px solid #999;
    margin: 0 auto;
  }
  
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
  
    50% {
      transform: scale(1.5);
    }
  
    100% {
      transform: scale(1);
    }
  }
  </style>