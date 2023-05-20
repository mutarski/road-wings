<template>
  <div class="carousel-view">
    <transition-group tag="div" class="d-flex">
      <div :key="imagePath" v-for="imagePath in slides" class="slide">
        <nuxt-img class="vw-100 h-100 object-fit-cover" :src="imagePath" />
      </div>
    </transition-group>
    <div class="btn btn-prev" aria-label="Previous slide" @click="previous">
      &#10094;
    </div>
    <div class="btn btn-next" aria-label="Next slide" @click="next">
      &#10095;
    </div>
  </div>
</template>

<script>
import constants from '../constants.js'

export default {
  name: 'Slider',
  props: {
    items: Array,
  },
  data() {
    return {
      current: 1,
      direction: 1,
      slides: constants.homeSlides,
      timeoutId: null,
    }
  },
  computed: {
    currentSlideSrc() {
      return `/images/SLIDE${this.current}.jpg`
    },
  },
  mounted() {
    this.autoNext()
  },
  methods: {
    next() {
      this.current =
        this.current === this.slides.length ? 1 : (this.current += 1)
      const first = this.slides.shift()
      this.slides = this.slides.concat(first)
      this.resetAutoNext()
    },
    previous() {
      this.current =
        this.current === 1 ? this.slides.length : (this.current -= 1)
      const last = this.slides.pop()
      this.slides = [last].concat(this.slides)
      this.resetAutoNext()
    },
    autoNext() {
      this.timeoutId = setTimeout(() => {
        this.next()
      }, 5000)
    },
    resetAutoNext() {
      clearTimeout(this.timeoutId)
      this.autoNext()
    },
  },
}
</script>

<style scoped>
.carousel-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  overflow-x: hidden;
}

.slide {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;
}

.slide:first-of-type {
  opacity: 0;
}
.slide:last-of-type {
  opacity: 0;
}

.btn {
  z-index: 10;
  cursor: pointer;
  border: 3px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  position: absolute;
  top: calc(50% - 35px);
  left: 1%;
  transition: transform 0.3s ease-in-out;
  user-select: none;
}

.btn-next {
  left: auto;
  right: 1%;
}

.btn:hover {
  transform: scale(1.1);
}

@keyframes zoom {
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(1.5, 1.5);
  }
}

.carousel-view > div > .slide:nth-child(2) > img {
  animation-name: zoom;
  animation-duration: 40s;
  z-index: -1;
}

.carousel-view > div > .slide:nth-child(3) > img {
  animation-name: zoom;
  animation-duration: 40s;
  z-index: 1;
}

.carousel-view > div > .slide:nth-child(4) > img {
  animation-name: zoom;
  animation-duration: 40s;
  z-index: -1;
}
</style>
