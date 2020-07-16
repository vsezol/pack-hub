<template>
  <div
    class="
    d-flex flex-wrap pt-3 pb-3 
    justify-content-center 
    justify-content-md-between 
    align-items-center"
  >
    <h2 class="title m-md-0">{{ total }} packages found</h2>
    <b-pagination
      v-if="rows > 1"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      class="p-0 m-0"
    ></b-pagination>
  </div>
</template>

<script>
export default {
  props: ['total', 'pagination', 'step'],
  data() {
    return {
      perPage: 1,
      currentPage: this.pagination
    }
  },
  computed: {
    rows() {
      return Math.round(this.total / this.step)
    }
  },
  watch: {
    currentPage(pagination) {
      this.$emit('pagination', pagination)
    }
  }
}
</script>

<style lang="sass" scoped>
.title
  font-size: 1.25rem
  font-family: 'Roboto-Bold'
</style>

<style lang="sass">
.page-link
  color: #343A40!important
  background-color: white
  box-shadow: none!important

.page-item.active
  .page-link
    background-color: #343A40!important
    border-color: #343A40!important
    color: white!important
</style>
