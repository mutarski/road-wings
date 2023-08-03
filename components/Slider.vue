<template>
  <div
    class="carousel-view"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
    @touchmove.prevent
  >
    <transition-group tag="div" class="d-flex">
      <div
        v-for="(slide, index) in items"
        class="Slider__slide"
        :class="getSlideClass(index, currentSlideIndex, direction)"
        :key="slide.url"
      >
        <img class="vw-100 h-100 object-fit-cover" :src="slide.url" />
        <p
          class="Slider__slide-title position-absolute position-center text-center"
        >
          {{ slide.title }}
        </p>
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
export default {
  name: 'Slider',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentSlideIndex: 0,
      lastSlideIndex: 4,
      direction: 1,
      timeoutId: null,
    }
  },
  mounted() {
    this.autoNext()
  },
  methods: {
    next() {
      this.direction = 1
      this.currentSlideIndex =
        this.currentSlideIndex === this.lastSlideIndex
          ? 0
          : (this.currentSlideIndex += 1)
      this.resetAutoNext()
    },
    previous() {
      this.direction = -1
      this.currentSlideIndex =
        this.currentSlideIndex === 0
          ? this.lastSlideIndex
          : (this.currentSlideIndex -= 1)
      this.resetAutoNext()
    },
    isNextSlide(index) {
      return (
        index === this.currentSlideIndex + 1 ||
        (this.currentSlideIndex === this.lastSlideIndex && index === 0)
      )
    },
    isPreviousSlide(index) {
      return (
        index === this.currentSlideIndex - 1 ||
        (this.currentSlideIndex === 0 && index === this.lastSlideIndex)
      )
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
    getSlideClass(index, currentSlideIndex, direction) {
      if (index === currentSlideIndex) {
        return ['Slider__slide--current']
      }
      if (this.isNextSlide(index)) {
        return ['Slider__slide--next z-index-0']
      }
      if (this.isPreviousSlide(index)) {
        return ['Slider__slide--previous z-index-0']
      }
      if (direction === -1) {
        return ['Slider__slide--previous z-index-neg']
      }
      return ['Slider__slide--next z-index-neg']
    },
    onTouchStart(event) {
      this.startX = event.changedTouches[0].clientX
    },
    onTouchEnd(event) {
      this.endX = event.changedTouches[0].clientX

      if (this.endX > this.startX) {
        console.log('go previous')
        this.previous()
      }
      if (this.endX < this.startX) {
        console.log('go next')
        this.next()
      }
    },
  },
}
</script>

<style scoped>
.Slider__slide-title {
  color: white;
  font-size: 2rem;
  z-index: 100;
}
.carousel-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  overflow-x: hidden;
}

.Slider__slide {
  width: 100vw;
  height: 100vh;
  transition: transform 0.4s ease-in-out;
  position: absolute;
}

.Slider__slide--current {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}
.Slider__slide--previous {
  left: -100%;
}

.Slider__slide--next {
  right: -100%;
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

.carousel-view > div > .Slider__slide--current > img {
  animation-name: zoom;
  animation-duration: 40s;
}

.carousel-view img {
  filter: brightness(70%);
}

@media screen and (max-width: 600px) {
  .btn {
    opacity: 0;
  }
}
</style>
