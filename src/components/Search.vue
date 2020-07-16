<template>
  <b-container class="mt-5 mb-2">
    <b-form inline @submit.prevent="handleSearch" class="w-100 flex-nowrap">
      <b-form-input
        v-model.trim="toSearch"
        id="search"
        class="shadow-none w-100 mr-2 flex-grow-1"
        placeholder="Search npm package..."
      ></b-form-input>

      <b-button variant="dark" type="submit" class="pl-lg-5 pr-lg-5">
        <b-icon-search></b-icon-search>
      </b-button>
    </b-form>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      toSearch: ''
    }
  },
  methods: {
    ...mapActions(['searchPacks', 'startNewSearchPacks']),
    handleSearch() {
      this.startNewSearchPacks()
      this.searchPacks({ toSearch: this.toSearch })
      this.toSearch = ''
    }
  }
}
</script>

<style lang="sass">
#search
  background: #E9ECEF
  outline: none
  border: none
  color: #343A40
  transition: background 0.25s ease-in-out
  &:focus
    background: #DDDDDD

#search-feedback
  position: absolute
  width: fit-content
</style>
