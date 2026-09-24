<script setup>
const services = [
  {
    title: 'Strony WordPress',
    description:
      'Tworzę strony firmowe i wizytówki oparte na WordPressie. Dbam o szybkość, responsywność i prostą edycję treści po wdrożeniu.',
    icon: 'fa-brands fa-wordpress',
  },
  {
    title: 'Sklepy IdoSell',
    description:
      'Rozwijam i modyfikuję sklepy internetowe oparte na IdoSell. Tworzę indywidualne szablony, poprawiam wygląd sklepu i wdrażam nowe funkcjonalności.',
    icon: 'fa-solid fa-cart-shopping',
  },
  {
    title: 'Aplikacje webowe',
    description:
      'Tworzę i rozwijam interfejsy w Angularze, Vue i TypeScript. Mogę dołączyć do istniejącego projektu albo przygotować nową aplikację od podstaw.',
    icon: 'fa-solid fa-code',
  },
]
</script>

<template>
  <section class="section" id="offer">
    <div class="section__header">
      <p class="section__label">OFERTA</p>
      <h2 class="section__title">W czym mogę pomóc?</h2>
    </div>
    <div class="services">
      <div v-for="service in services" :key="service.title" class="services__box ui-card">
        <i :class="service.icon"></i>

        <h3 class="services__header">
          {{ service.title }}
        </h3>

        <div class="services__description">
          {{ service.description }}
        </div>
      </div>

      <div class="dot-blur dot-blur--services"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../style.scss' as style;
.section {
  opacity: 0;
  transform: translateY(1rem);
  animation: slideIn 1s 0.6s ease forwards;
}
.services {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  @include style.tablet {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  i {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-xl);
    width: 5.2rem;
    height: 5.2rem;
    color: var(--primary);
    padding: 1.2rem;
    margin-bottom: 0.8rem;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--primary);
      opacity: 0.1;
      border-radius: var(--border-radius-secondary);
    }
  }
  &__header {
    margin-bottom: 1.6rem;
  }
  &__box {
    position: relative;
    z-index: 2;
  }
  &__description {
    color: var(--text-secondary);
  }
}
</style>
