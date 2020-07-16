<template>
  <b-card bg-variant="dark" text-variant="white" class="mt-2 mb-2">
    <div class="d-flex justify-content-between p-0">
      <div>
        <h3 class="card-title">
          <a :href="this.repository" target="_blank">{{ this.name }}</a>
        </h3>
        <b-card-text>
          {{ this.description }}
        </b-card-text>
      </div>
      <Score :values="[this.popularity, this.quality, this.maintenance]" />
    </div>
  </b-card>
</template>

<script>
import Score from './Score'

const destructPack = pack => {
  const {
    score: {
      detail: { popularity, quality, maintenance }
    },
    package: {
      links: { repository },
      name,
      description
    }
  } = pack
  return { repository, name, description, maintenance, popularity, quality }
}

export default {
  props: ['pack'],
  data() {
    return destructPack(this.pack)
  },
  components: {
    Score
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
