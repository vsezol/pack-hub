<template>
  <div class="main d-flex flex-column">
    <div class="main-wrapper flex-grow-1">
      <Header />
      <Search />
      <PackagesList />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/blocks/Header'
import Search from '@/components/Search'
import PackagesList from '@/components/PackagesList'
import Footer from '@/components/blocks/Footer'

export default {
  components: {
    Header,
    Search,
    PackagesList,
    Footer
  }
}
</script>

<style lang="sass" scoped>
.main
  min-height: 100vh
</style>
