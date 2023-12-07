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

<style scoped>
body{
  padding: 0;
  margin: 0;
}
.wrapper {
  display: flex;
}
.RouterView{
  width: 85vw;

}


</style>
