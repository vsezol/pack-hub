<template>
  <b-container class="mt-5">
    <b-form inline class="w-100 flex-nowrap">
      <b-input
        v-model="toSearch"
        id="search"
        class="mr-2 flex-grow-1 shadow-none"
        placeholder="Search npm package..."
      ></b-input>
      <b-button variant="dark" class="pl-lg-5 pr-lg-5">
        <b-icon-search></b-icon-search>
      </b-button>
    </b-form>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      toSearch: ''
    }
  },
  watch: {
    toSearch(value) {
      console.log(value)
    }
  }
}
</script>

<style lang="sass">
#search
  background: #E9E9E9
  outline: none
  border: none
  color: #343A40
  transition: background 0.25s ease-in-out
  &:focus
    background: #DDDDDD
</style>

// http://registry.npmjs.com/-/v1/search?text=react&size=2
