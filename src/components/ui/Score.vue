<template>
  <div>
    <div
      v-for="(value, i) in values"
      :key="i"
      class="d-flex align-items-center justify-content-between"
    >
      <span>{{ words[i] }}</span>

      <b-progress
        :value="value"
        :variant="variants[i]"
        max="1"
        class="ml-2"
        height="5px"
        animated
      ></b-progress>
    </div>
  </div>
</template>

<script>
export default {
  props: ['values'],
  data() {
    return {
      variants: ['info', 'success', 'danger'],
      words: ['p', 'q', 'm']
    }
  }
}
</script>

<style lang="sass" scoped>
.progress
  width: 80px
span
  font-size: 0.9rem
</style>
