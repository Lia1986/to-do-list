<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script></script>

<style lang="scss">
@import "./assets/styles/general.scss";
#app {
  padding: 10px 5%;

  @media only screen and (max-width: 800px) {
    padding: 10px 20%;
  }

  @media only screen and (max-width: 500px) {
    padding: 10px;
  }
}
</style>
