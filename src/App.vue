<template>
  <div id="app">
    <app-header />
    <router-view />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
:root {
  --color-primary: #1976d2;
  --color-secondary: #26a69a;
  --color-positive: #21ba45;
  --color-negative: #c10015;
  --color-info: #31ccec;
  --color-warning: #f2c037;
  --color-dark: #1d1d1d;
  --color-light: #eeeeee;
}

html, body {
  margin: 0;
  padding: 0;
}

button {
  cursor: pointer;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.text-right {
  text-align: right;
}
</style>
