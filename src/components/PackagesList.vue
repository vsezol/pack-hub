<template>
  <b-container>
    <Pagination />
    <PackageCard v-for="i in 1" :key="i" />
  </b-container>
</template>

<script>
import Pagination from './Pagination'
import PackageCard from './PackageCard'
export default {
  components: {
    Pagination,
    PackageCard
  }
}
</script>
