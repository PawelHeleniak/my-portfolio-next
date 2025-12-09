<script setup></script>

<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__description">
        <h1>Cześć! <br />Jestem Front-End Developerem</h1>
        <span
          >Tworzę nowoczesne strony i wizytówki. Chętnie podejmę projekty w Angularze lub Vue, które
          w pełni spełnią Twoje oczekiwania.</span
        >
        <button class="button">Kontakt</button>
      </div>
      <div class="header__info --box">
        <div class="header__box --info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore obcaecati voluptatibus
          cumque dignissimos nobis eum! Vel tempore accusantium voluptates, reprehenderit iure
          accusamus, commodi error facere dolorem adipisci natus aliquam ratione?
        </div>
        <div class="header__box --framework">
          <img src="/public/assets/angular_logo.webp" alt="angular logo" />
          <img src="/public/assets/vue_logo.webp" alt="vue logo" />
          <img src="/public/assets/nodejs_logo.svg" alt="nodejs logo" />
        </div>
        <div class="header__box --contacts">
          <i class="fa-solid fa-phone"></i>
          <i class="fa-solid fa-envelope"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-github"></i>
        </div>
      </div>
    </div>
    <div class="dot-blur dot-blur--hero"></div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  // Treść
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }
  &__description {
    display: flex;
    flex-direction: column;
    padding: 0 4rem 4rem 0;
    gap: 3rem;
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
    }
    button {
      animation: slideIn 1s 0.4s ease forwards;
    }
  }
  &__info {
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem;
    opacity: 0;
    transform: translateY(1rem);
    animation: slideIn 1s ease forwards;
  }
  &__box {
    padding: 1.2rem;
    background-color: hsl(243.16deg 76% 95.1%);
    border-radius: var(--border-radius-primary);
    &:nth-child(1) {
      grid-column: span 3;
    }
    &:nth-child(2) {
      grid-column: span 2;
    }
    &:nth-child(3) {
      grid-column: span 1;
    }
    &.--framework {
      display: flex;
      flex-direction: row;
      gap: 1.6rem;
      align-items: center;
      justify-content: center;
      img {
        max-width: 100%;
        height: auto;
        display: block;
        height: 100px;
      }
    }
    &.--contacts {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      i {
        font-size: var(--font-size-xl);
        border-radius: var(--border-radius-secondary);
        background-color: var(--color-bg-secondary);
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
