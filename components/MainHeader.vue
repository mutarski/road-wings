<script>
import BikeAnimated from './Icons/BikeAnimated.vue'
export default {
  components: { BikeAnimated },
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
}
</script>

<template>
  <header>
    <nav class="d-flex header__nav justify-between">
      <img class="header__logo" src="/road-white.png" />
      <ul class="header__list" :class="{ 'header__mobile-list': isMenuOpen }">
        <li class="header__item">
          <a href="#">RUTAS</a>
          <bike-animated></bike-animated>
        </li>
        <li class="header__item">
          <a href="#">QUIÉNES SOMOS</a>
          <bike-animated></bike-animated>
        </li>
        <li class="header__item">
          <a href="#">CONTACTO</a>
          <bike-animated></bike-animated>
        </li>
      </ul>
      <a href="https://wa.me/34696762978" target="_blank">
        <img class="header__whatsapp-icon" src="/whatsapp.png" />
      </a>
      <button class="header__burger" @click="toggleMenu">
        <span class="header__burger-line"></span>
        <span class="header__burger-line"></span>
        <span class="header__burger-line"></span>
      </button>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
a {
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
}

header {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 80%;
  z-index: 2;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  background-image: linear-gradient(
    to top,
    rgba(var(--darkBlueRGB), 0.01),
    rgba(var(--darkBlueRGB), 0.15),
    rgba(var(--darkBlueRGB), 0.25),
    rgba(var(--darkBlueRGB), 0.45),
    rgba(var(--darkBlueRGB), 0.6),
    rgba(var(--darkBlueRGB), 0.7),
    rgba(var(--darkBlueRGB), 0.9),
    rgba(var(--darkBlueRGB), 1),
    rgba(17, 22, 65, 1)
  );
}

.header__logo {
  width: 6rem;
  height: 6rem;
  padding-top: 0.5rem;
  padding-left: 2rem;
}

.header__burger {
  display: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.header__burger-line {
  display: block;
  width: 20px;
  height: 2px;
  margin: 5px 0;
  background-color: var(--secondary);
}

.header__list {
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 2.5rem;
}
.header__list * {
  transition: all 0.5s ease;
}

.header__item {
  display: flex;
  justify-content: center;
  min-width: 9rem;
  align-items: center;
  list-style: outside none none;
  margin: 0 1.2rem;
  overflow: hidden;
  height: fit-content;

  > svg {
    opacity: 0;
    padding-left: 0.5rem;
  }

  &:hover > svg {
    opacity: 1;
  }
}

.header__item > a:hover {
  color: var(--secondary);
}

@media screen and (max-width: 600px) {
  .header__list {
    display: none;
  }
  .header__burger {
    display: block;
    position: relative;
  }
  .header__mobile-list {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--darkBlue);
    color: #fff;
    padding: 1rem;
    text-align: center;

    & > li {
      padding: 2.5rem;
    }
  }
}

.header__whatsapp-icon {
  width: 2rem;
  height: 2rem;
  margin-top: 2.5rem;
  margin-right: 2.5rem;
  transform-origin: bottom left;
  &:hover {
    animation-name: pop;
    animation-duration: 0.5s;
  }
}
</style>
