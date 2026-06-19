<script setup>
const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__description">
        <h1>Tworzę i rozwijam strony oraz sklepy internetowe</h1>
        <span>
          Specjalizuję się w stronach WordPress, sklepach IdoSell oraz dedykowanych rozwiązaniach
          webowych.</span
        >
        <button class="button" @click="scrollToSection('contact')">Zapytaj o projekt</button>
      </div>
      <div class="header__info">
        <div class="header__card header__card--description --box">
          Tworzę rozwiązania, które są łatwe w obsłudze, szybkie i gotowe na dalszy rozwój. Pomagam
          zarówno przy nowych projektach, jak i przy rozbudowie istniejących stron oraz sklepów
          internetowych.
        </div>
        <div class="header__card header__card--services --box">
          <div class="header__service">
            <div class="header__service-icon">
              <i class="fa-brands fa-wordpress"></i>
            </div>

            <span class="header__service-name">Strony WordPress</span>
          </div>

          <div class="header__service">
            <div class="header__service-icon">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>

            <span class="header__service-name">Sklepy IdoSell</span>
          </div>

          <div class="header__service">
            <div class="header__service-icon">
              <i class="fa-solid fa-gear"></i>
            </div>

            <span class="header__service-name">Rozwiązania dedykowane</span>
          </div>
        </div>
        <div class="header__card header__card--contact --box">
          <a href="tel:+48661011470">
            <i class="fa-solid fa-phone"></i>
            <span>Kontakt</span>
          </a>
          <a href="mailto:pawel.heleniak@outlook.com">
            <i class="fa-solid fa-envelope"></i>
            <span>Email</span>
          </a>
          <a href="https://www.linkedin.com/in/paweł-heleniak-1882b2231">
            <i class="fa-brands fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/PawelHeleniak">
            <i class="fa-brands fa-github"></i>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
    <div class="dot-blur dot-blur--hero"></div>
  </header>
</template>

<style lang="scss" scoped>
@use '../style.scss' as style;
.header {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  // Treść
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    @include style.laptop {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  &__description {
    display: flex;
    flex-direction: column;
    padding: 0;
    gap: 3rem;
    margin-top: 1.2rem;
    @include style.laptop {
      padding: 0 4rem 4rem 0;
      margin-top: 0;
    }
    h1,
    span,
    button {
      opacity: 0;
      transform: translateY(1rem);
    }
    h1 {
      animation: slideIn 1s ease forwards;
    }
    span {
      animation: slideIn 1s 0.2s ease forwards;
      color: var(--text-secondary);
      font-size: 2rem;
    }
    button {
      animation: slideIn 1s 0.4s ease forwards;
      width: 100%;
      color: #fff;
      @include style.tablet {
        width: max-content;
      }
    }
    a {
      width: 100%;
      justify-content: center;
      display: flex;
      opacity: 0;
      animation: slideIn 1s 0.3s ease forwards;
      @include style.tablet {
        width: max-content;
      }
    }
  }
  &__info {
    // padding: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem;
    opacity: 0;
    transform: translateY(1rem);
    animation: slideIn 1s 0.4s ease forwards;
    @include style.tablet {
      animation: slideIn 1s ease forwards;
    }
  }
  &__card {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    // background: var(--bg-primary);
    // border-radius: var(--border-radius-primary);
    &:nth-child(1) {
      grid-column: span 3;
    }
    &:nth-child(2) {
      grid-column: span 3;
    }
    &:nth-child(3) {
      grid-column: span 3;
    }
    &--description {
      color: var(--text-secondary);
    }
    &--services {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      img {
        width: 100%;
        height: auto;
        display: block;
        max-width: 6.4rem;
      }
    }
    @include style.tablet {
      &:nth-child(1) {
        grid-column: span 3;
      }
      &:nth-child(2) {
        grid-column: span 2;
      }
      &:nth-child(3) {
        grid-column: span 1;
      }
    }
    @include style.laptop {
      &:nth-child(1) {
        grid-column: span 3;
      }
      &:nth-child(2) {
        grid-column: span 3;
      }
      &:nth-child(3) {
        grid-column: span 3;
      }
    }
    @include style.desktop {
      &:nth-child(1) {
        grid-column: span 3;
      }
      &:nth-child(2) {
        grid-column: span 2;
      }
      &:nth-child(3) {
        grid-column: span 1;
      }
    }
    &--contact {
      // display: flex;
      // flex-wrap: wrap;
      // justify-content: center;
      // align-items: center;
      // gap: 2rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      justify-items: center;
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.8rem;
        transition:
          0.2s ease-in box-shadow,
          0.2s ease-in color;
        overflow: hidden;
        &:hover {
          color: var(--primary);
        }
      }
      i {
        border-radius: var(--border-radius-secondary);
        font-size: var(--font-size-xl);
        background-color: var(--bg-primary);
        padding: 1.2rem;
        width: 5.6rem;
        height: 5.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--primary);
      }
    }
  }
  &__service {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2.4rem;
    text-align: center;
    &-icon {
      font-size: 3.2rem;
      color: var(--primary);
      background-color: var(--bg-primary);
      border-radius: 1.2rem;
      width: 5.6rem;
      aspect-ratio: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
