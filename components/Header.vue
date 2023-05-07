<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      console.log("isMenuOpen?", this.isMenuOpen);
    },
  },
};
</script>

<template>
  <header>
    <nav class="d-flex header__nav justify-between">
      <nuxt-img class="header__logo" src="/wing.png" />
      <ul
        class="header__list d-flex justify-end"
        :class="{ 'header__mobile-list': isMenuOpen }"
      >
        <li><a href="#">RUTAS</a></li>
        <li><a href="#">QUIÉNES SOMOS</a></li>
        <li><a href="#">CONTACTO</a></li>
      </ul>
      <button class="header__burger" @click="toggleMenu">
        <span class="header__burger-line"></span>
        <span class="header__burger-line"></span>
        <span class="header__burger-line"></span>
      </button>
    </nav>
  </header>
</template>

<style scoped>
a {
  color: #fff;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
}

a:hover {
  background-color: var(--primary);
}

/* .header__logo {
  position: absolute;
  top: -1rem;
  left: 1rem;
  width: 5rem;
} */

.header__nav {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 80%;
  z-index: 2;
  color: #fff;
  padding: 2rem;
  font-size: 1.3rem;
  font-weight: 600;
  background-image: linear-gradient(
    to top,
    rgba(var(--darkBlueRGB), 0),
    rgba(var(--darkBlueRGB), 1)
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
