<template>
  <div>
    <Slider :items="slides" />
  </div>
</template>

<script>
import constants from '../constants.js'

export default {
  data() {
    return {
      slides: constants.homeSlides,
    }
  },
}
</script>
