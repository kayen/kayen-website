<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style src="./assets/stylesheets/style.css"></style>
<style src="./assets/stylesheets/colors/red.css"></style>
<style src="./assets/stylesheets/responsive.css"></style>
<style src="../node_modules/font-awesome/css/font-awesome.min.css"></style>
