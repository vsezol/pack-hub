<template>
  <b-card bg-variant="dark" text-variant="white" class="mt-2 mb-2">
    <h3 class="card-title">
      <a :href="this.repo" target="_blank">{{ this.package.name }}</a>
    </h3>
    <b-card-text>
      {{ this.package.description }}
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  props: ['pack'],
  data() {
    return {
      package: this.pack.package,
      repo: this.pack.package.links.repository
    }
  },
  mounted() {
    console.log(this.repo)
  }
}
</script>

<style lang="sass" scoped>
h3
  font-size: 1.5rem
a
  color: white
  &:hover
    color: white
</style>
