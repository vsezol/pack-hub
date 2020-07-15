<template>
  <b-container class="mt-5 mb-2">
    <b-form
      inline
      class="w-100 flex-nowrap"
      @submit.prevent="handleSubmit"
    >
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
export default {
  data() {
    return {
      toSearch: ''
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('search', this.toSearch)
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
