<template>
  <div id="app">
    
    <b-navbar toggleable="lg" type="dark" variant="info" >
      <b-navbar-brand  class="mb-0" >American Football Analytics</b-navbar-brand>
    </b-navbar>
    <b-card title="What is this?" align="center">
      <b-card-text>
        We help the football coaches get performance analysis of the player's performance during the game for better strategic planning and performance monitoring
      </b-card-text>
    </b-card>
    <b-container>
      <UploadFile />
      <DisplayPhotos />
      <nav class="navbar fixed-bottom navbar-dark bg-info">
        <a class="navbar-brand" >
          Made with <span style="color: #e25555;">&#9829;</span> at NC State
        </a>
      </nav>
    </b-container>
  </div>
</template>

<script>
import UploadFile from "vue-app/src/components/UploadFile";
import DisplayPhotos from "vue-app/src/components/DisplayPhotos";
export default {
  name: "App",
  components: {
    UploadFile,
    DisplayPhotos,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  align-content: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
