<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from '@/views/Main'

export default {
  name: 'App',
  components: {
    Main
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
  font-family: 'Roboto-Regular'

body
  background: #F6F8FA!important
</style>
