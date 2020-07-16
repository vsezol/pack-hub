<template>
  <b-card bg-variant="dark" text-variant="white" class="mt-2 mb-2">
    <div class="d-flex justify-content-between p-0">
      <div>
        <h3 class="card-title m-0 d-flex align-items-center">
          <a :href="repository" target="_blank">{{ name }}</a>
          <b-badge variant="info" class="version ml-2">v{{ version }}</b-badge>
        </h3>
        <b-card-text>
          {{ description }}
        </b-card-text>
        <Keywords :keywords="keywords" />
      </div>
      <Score :values="[popularity, quality, maintenance]" />
    </div>
  </b-card>
</template>

<script>
import Score from './Score'
import Keywords from './Keywords'

const destructPack = pack => {
  console.log(pack)
  const {
    score: {
      detail: { popularity, quality, maintenance }
    },
    package: {
      links: { repository },
      name,
      description,
      version,
      keywords
    }
  } = pack
  return {
    repository,
    name,
    description,
    maintenance,
    popularity,
    quality,
    version,
    keywords
  }
}

export default {
  props: ['pack'],
  data() {
    return destructPack(this.pack)
  },
  components: {
    Score,
    Keywords
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
.version
  font-size: 1rem
</style>
