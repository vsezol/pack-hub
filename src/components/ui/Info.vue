<template>
  <b-jumbotron
    :header="title"
    :lead="lead"
    :bg-variant="bgVariant"
    :text-variant="textVariant"
    class="info-block"
  >
    <p>{{ text }}</p>
  </b-jumbotron>
</template>

<script>
export default {
  props: ['title', 'lead', 'text', 'bgVariant', 'textVariant']
}
</script>

<style lang="sass" scoped>
h1
  font-size: 1.75rem!important
  font-family: 'Roboto-Bold'
</style>
