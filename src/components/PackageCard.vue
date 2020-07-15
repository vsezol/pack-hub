<template>
  <b-card bg-variant="dark" text-variant="white" :title="this.package.name" class="mt-2 mb-2">
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
      package: this.pack.package
    }
  }
}
</script>
