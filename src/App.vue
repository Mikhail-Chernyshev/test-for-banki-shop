<template>
  <div id="app">
    <LayoutComponent />
  </div>
</template>

<script>
import LayoutComponent from './components/LayoutComponent.vue';

export default {
  name: 'App',
  components: {
    LayoutComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}
</style>
