<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import Layout from './Layout'

export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style lang="sass">
@font-face
  font-family: 'Roboto-Regular'
  src: url('./assets/fonts/Roboto/Roboto-Regular.ttf')
@font-face
  font-family: 'Roboto-Bold'
  src: url('./assets/fonts/Roboto/Roboto-Bold.ttf')

*
  font-family: 'Roboto-Regular'!important

body
  background: #F6F8FA!important
</style>
