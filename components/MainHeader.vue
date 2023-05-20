<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      console.log('isMenuOpen?', this.isMenuOpen)
    },
  },
}
</script>

<template>
  <header>
    <nav class="d-flex header__nav justify-between">
      <nuxt-img class="header__logo" src="/wing.png" />
      <ul
        class="header__list d-flex justify-end"
        :class="{ 'header__mobile-list': isMenuOpen }"
      >
        <li class="header__item"><a href="#" data-hover="RUTAS">RUTAS</a></li>
        <li class="header__item">
          <a href="#" data-hover="QUIÉNES SOMOS">QUIÉNES SOMOS</a>
        </li>
        <li class="header__item">
          <a href="#" data-hover="CONTACTO">CONTACTO</a>
        </li>
      </ul>
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

.header__logo {
  width: 5rem;
  height: 2rem;
  filter: saturate(500%) contrast(800%) brightness(500%) invert(80%) sepia(50%)
    hue-rotate(120deg);
}

.header__nav {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 75%;
  z-index: 2;
  color: #fff;
  padding: 2rem;
  font-size: 1.3rem;
  font-weight: 600;
  background-image: linear-gradient(
    to top,
    rgba(var(--darkBlueRGB), 0),
    rgba(var(--darkBlueRGB), 0.1),
    rgba(var(--darkBlueRGB), 0.2),
    rgba(var(--darkBlueRGB), 1),
    rgba(black, 1)
  );
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
  text-align: center;
}

.header__list * {
  transition: all 0.35s ease;
}

.header__item {
  display: inline-block;
  list-style: outside none none;
  margin: 0 1.2rem;
  overflow: hidden;
  height: fit-content;

  & > a {
    padding-right: 2.5rem;
    color: rgba(255, 255, 255, 0.8);
    position: relative;
    display: inline-block;
    letter-spacing: 0.08rem;
  }

  & > a:before,
  a:after {
    position: absolute;
    -webkit-transition: all 0.35s ease;
    transition: all 0.35s ease;
  }

  & > a:before {
    right: 100%;
    width: 2rem;
    height: 2rem;
    content: '';
    background-image: url('bike.svg');
    background-size: 2rem 2rem;
  }

  & > a:after {
    position: absolute;
    padding-right: 2.5rem;
    right: 100%;
    top: 0;
    content: attr(data-hover);
    color: white;
    white-space: nowrap;
  }
}

.header__item:hover > a {
  transform: translateX(100%);
}

.header__item:hover > a:before {
  right: 100%;
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
      padding: 2rem;
    }
  }
}
</style>
