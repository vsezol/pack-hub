<template>
  <div>
    <Search @search="handleSearch" />
    <PackagesList />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Search from './Search'
import PackagesList from './PackagesList'

export default {
  components: {
    Search,
    PackagesList
  },
  methods: {
    ...mapActions(['searchPacks']),
    handleSearch(toSearch) {
      this.searchPacks({toSearch})
    }
  }
}
</script>
