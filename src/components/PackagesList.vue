<template>
  <b-container>
    <Pagination
      v-if="total"
      :total="total"
      :pagination="pagination"
      @pagination="handlePagination"
    />
    <Info
      v-if="loading === 'begin'"
      title="You can search for some libraries :)"
      lead="It's so easy!"
    />
    <Loader v-else-if="loading" class="loader" />
    <Info
      v-else-if="error"
      title="Something went wrong :("
      lead="Try again!"
      bgVariant="warning"
    />
    <div v-else>
      <PackageCard v-for="(pack, i) of packages" :pack="pack" :key="i" />
    </div>
  </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import Pagination from './Pagination'
import PackageCard from './PackageCard'
import Info from './Info'
import Loader from './Loader'

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
    'toSearch'
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
