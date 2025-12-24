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
        <h1>Cześć! <br />Jestem Front-End Developerem</h1>
        <span
          >Tworzę nowoczesne strony i wizytówki. Chętnie podejmę projekty w
          <strong>Angularze</strong> lub <strong>Vue</strong>, które w pełni spełnią Twoje
          oczekiwania. Oferuję także wsparcie w zakresie platformy <strong>IdoSell</strong>.</span
        >
        <button class="button" @click="scrollToSection('contact')">Kontakt</button>
      </div>
      <div class="header__info --box">
        <div class="header__box --info">
          Zajmuję się tworzeniem przejrzystych, szybkich i dopracowanych aplikacji webowych. Dbam o
          szczegóły i trzymam się sprawdzonych praktyk, bo dobrze napisany kod to nie tylko
          estetyka, ale też łatwiejszy rozwój projektu w przyszłości. Stawiam na czytelne
          rozwiązania, które da się skalować bez chaosu i zbędnych komplikacji.
        </div>
        <div class="header__box --framework">
          <img src="/public/assets/angular_logo.webp" alt="angular logo" />
          <img src="/public/assets/vue_logo.webp" alt="vue logo" />
          <img src="/public/assets/nodejs_logo.svg" alt="nodejs logo" />
        </div>
        <div class="header__box --contacts">
          <a href="tel:+48661011470">
            <i class="fa-solid fa-phone"></i>
          </a>
          <a href="mailto:pawel.heleniak@outlook.com">
            <i class="fa-solid fa-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/in/paweł-heleniak-1882b2231">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/PawelHeleniak">
            <i class="fa-brands fa-github"></i>
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
  &__box {
    padding: 1.2rem;
    background: var(--bg-primary);
    border-radius: var(--border-radius-primary);
    &:nth-child(1) {
      grid-column: span 3;
    }
    &:nth-child(2) {
      grid-column: span 3;
    }
    &:nth-child(3) {
      grid-column: span 3;
    }
    &.--info {
      color: var(--text-secondary);
    }
    &.--framework {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
      gap: 1.6rem;
      align-items: center;
      justify-content: center;
      img {
        max-width: 100%;
        height: auto;
        display: block;
        max-height: 9.2rem;
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
    &.--contacts {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      a {
        border-radius: var(--border-radius-secondary);
        transition:
          0.2s ease-in box-shadow,
          0.2s ease-in color;
        overflow: hidden;
        &:hover {
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          color: var(--secondary);
        }
      }
      i {
        font-size: var(--font-size-xl);
        background-color: var(--bg-secondary);
        padding: 1.2rem;
        width: 5.6rem;
        height: 5.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
