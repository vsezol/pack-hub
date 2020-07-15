<template>
  <b-container class="mt-5 mb-2">
    <b-form inline class="w-100 flex-nowrap" @submit.prevent="onSubmitHandler">
      <b-form-input
        v-model="toSearch"
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
export default {
  data() {
    return {
      toSearch: ''
    }
  },
  methods: {
    onSubmitHandler() {
      if (this.toSearch.trim()) {
        alert(this.toSearch)
      }
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

#search-feedback
  position: absolute
  width: fit-content
</style>

// http://registry.npmjs.com/-/v1/search?text=react&size=2
