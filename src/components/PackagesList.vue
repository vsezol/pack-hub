<template>
  <b-container>
    <Pagination
      v-if="total"
      :total="total"
      :step="step"
      :pagination="pagination"
      @pagination="handlePagination"
    />
    <Info
      v-if="loading === 'begin'"
      title="You can search for some JS libraries :)"
      lead="It's so easy!"
    />
    <Loader v-else-if="loading" class="loader" />
    <Info
      v-else-if="error"
      title="Something went wrong :("
      lead="Try again!"
      bgVariant="warning"
    />
    <PackageCard v-else v-for="(pack, i) of packages" :pack="pack" :key="i" />
  </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import Pagination from './ui/Pagination'
import PackageCard from './PackageCard'
import Info from './ui/Info'
import Loader from './ui/Loader'

export default {
  components: {
    Pagination,
    PackageCard,
    Info,
    Loader
  },
  computed: mapState([
    'loading',
    'error',
    'packages',
    'pagination',
    'total',
    'toSearch',
    'step'
  ]),
  methods: {
    ...mapActions(['searchPacks']),
    handlePagination(value) {
      this.searchPacks({ toSearch: this.toSearch, pagination: value })
    }
  }
}
</script>

<style lang="sass" scoped>
.loader
  position: relative
  margin-left: calc(50% - 40px)
</style>
