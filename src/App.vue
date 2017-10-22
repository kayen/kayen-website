<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <bottom/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Bottom from '@/components/Footer'

export default {
  name: 'app',
  components: {
    Navbar,
    Bottom
  }
}
</script>

<style lang="scss">
@import '~@/assets/stylesheets/style';
</style>
