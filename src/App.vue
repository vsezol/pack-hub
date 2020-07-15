<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    Header
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
</style>