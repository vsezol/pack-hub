<template>
  <div
    class="d-flex flex-wrap justify-content-between align-items-center pt-3 pb-3"
  >
    <h2 class="title p-0 m-0">{{ total }} packages found</h2>
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
      rows: Math.round(this.total / this.step),
      perPage: 1,
      currentPage: this.pagination
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
