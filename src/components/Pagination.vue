<template>
  <div
    class="d-flex flex-wrap justify-content-between align-items-center pt-3 pb-3"
  >
    <h2 class="title p-0 m-0">
      Packages
    </h2>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      class="p-0 m-0"
    ></b-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rows: 10,
      perPage: 1,
      currentPage: 1
    }
  }
}
</script>

<style lang="sass" scoped>
.title
  font-size: 1.25rem
  font-family: 'Roboto-Bold'
</style>
