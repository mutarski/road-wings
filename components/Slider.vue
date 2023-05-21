<template>
  <div class="carousel-view">
    <transition-group tag="div" class="d-flex">
      <div :key="url" v-for="url in slides" class="slide">
        <img class="vw-100 h-100 object-fit-cover" :src="url" />
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
      timeoutId: null,
      slides: null,
    }
  },
  computed: {},
  mounted() {
    this.slides = this.imagesUrls()
    this.autoNext()
  },
  methods: {
    next() {
      this.current =
        this.current === this.slides.length ? 1 : (this.current += 1)
      console.log('this.current', this.current)
      console.log('this.slides', this.slides)
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
    imagesUrls() {
      let urls = []
      console.log(constants.homeSlides)
      constants.homeSlides.forEach((imageFileName) => {
        const path = `../images/${imageFileName}`
        const imageUrl = new URL(path, import.meta.url).href
        urls.push(imageUrl)
      })
      console.log(urls)
      return urls
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
  transition: transform 0.4s ease-in-out;
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
