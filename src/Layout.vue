<template>
  <div class="main d-flex flex-column">
    <div class="main-wrapper flex-grow-1">
      <Header />
      <Searcher />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Searcher from '@/components/Searcher'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Searcher,
    Footer
  }
}
</script>

<style lang="sass" scoped>
.main
  min-height: 100vh
</style>
