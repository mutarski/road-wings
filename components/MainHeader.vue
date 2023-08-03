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
    },
  },
}
</script>

<template>
  <header>
    <nav class="header__nav">
      <img class="header__logo" src="/road-white.png" />
      <ul class="header__list" :class="{ 'header__mobile-list': isMenuOpen }">
        <li class="header__item">
          <a href="/vacaciones">RUTAS</a>
        </li>
        <li class="header__item">
          <a href="#">QUIÉNES SOMOS</a>
        </li>
        <li class="header__item">
          <a href="#">CONTACTA</a>
        </li>
      </ul>
      <a
        class="header__whatsapp-link"
        href="https://wa.me/34609136838"
        target="_blank"
      >
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

.header__nav {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 2%;
}

.header__logo {
  width: 9rem;
  height: 9rem;
  padding-top: 0.5rem;
}

.header__burger {
  display: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-top: 1.7rem;
}

.header__burger-line {
  display: block;
  border-radius: 0.2rem;
  width: 2.2rem;
  height: 0.15rem;
  margin: 0.55rem 0;
  background-color: black;
  box-shadow: 0px 0px 0.3rem 0.1rem #f2e1f2;
}

.header__list {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 3rem;
}
.header__list * {
  transition: all 0.5s ease;
}

.header__item {
  display: flex;
  justify-content: center;
  min-width: 8rem;
  list-style: outside none none;
  margin: 0 1rem;
  height: fit-content;

  > svg {
    display: none;
    opacity: 0;
    padding-left: 0.5rem;
  }

  &:hover > svg {
    opacity: 1;
    display: block;
  }
}

.header__item > a:hover {
  color: var(--secondary);
}

.header__whatsapp-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  margin: 1.3rem;
  background: var(--green);
  border-radius: 50%;
  animation-name: pulse;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;
}

.header__whatsapp-icon {
  width: 2.5rem;
  height: 2.5rem;
  &:hover {
    animation-name: pop;
    animation-duration: 0.5s;
  }
}

@media screen and (max-width: 760px) {
  .header__list {
    display: none;
    margin-top: 0;
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

  .header__logo {
    width: 7rem;
    height: 7rem;
  }

  .header__whatsapp-link {
    margin-top: 1.6rem;
    width: 3rem;
    height: 3rem;
  }

  .header__whatsapp-icon {
    width: 2rem;
    height: 2rem;
  }
}
</style>
