<template>
  <b-container class="mt-5">
    <PackageCard v-for="i in 10" :key="i" />
  </b-container>
</template>

<script>
import PackageCard from './PackageCard'
export default {
  components: {
    PackageCard
  }
}
</script>
