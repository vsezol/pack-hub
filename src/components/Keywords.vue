<template>
  <div>
    <b-badge v-for="(word, i) in keywords" :key="i" class="mr-1 mb-1 keyword">
      {{ word }}
    </b-badge>
  </div>
</template>

<script>
export default {
  props: ['keywords']
}
</script>

<style lang="sass" scoped>
.keyword
  font-family: 'Roboto-Regular'
  font-weight: normal
  font-size: 1rem
</style>
