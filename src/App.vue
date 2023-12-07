<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LeftNav from './components/LeftNav.vue';

</script>

<template>
  <div class="wrapper">
    <LeftNav></LeftNav>
    <RouterView></RouterView>
  </div>
</template>

<style scoped lang="less">
body {
  padding: 0;
  margin: 0;
}

.wrapper {
  display: flex;

  .left-nav {
    width: 15vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
  }


}
</style>
