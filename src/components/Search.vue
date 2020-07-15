<template>
  <b-container class="mt-5">
    <b-form inline class="w-100">
      <b-input
        id="search"
        class="mb-2 mr-sm-2 mb-sm-0 flex-grow-1 shadow-none"
        placeholder="Search npm package..."
      ></b-input>
      <b-button variant="dark" class="pl-5 pr-5">
        <b-icon-search></b-icon-search>
      </b-button>
    </b-form>
  </b-container>
</template>

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
