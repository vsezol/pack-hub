<template>
  <div class="main">
    <Header />
    <Search />
    <PackagesList />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Search from '@/components/Search'
import PackagesList from '@/components/PackagesList'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Search,
    PackagesList,
    Footer
  }
}
</script>
