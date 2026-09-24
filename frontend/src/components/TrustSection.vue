<script setup>
const trusts = [
  {
    title: 'Rozmowa',
    description:
      'Na początku poznaję Twój pomysł, potrzeby i cel projektu. Dopytuję o najważniejsze rzeczy i proponuję rozwiązanie, które ma sens w danym przypadku.',
  },
  {
    title: 'Zakres',
    description:
      'Ustalamy, co dokładnie ma zostać zrobione, jakie funkcje są potrzebne i jaki termin jest realny. Na tej podstawie przygotowuję konkretny zakres prac i wycenę.',
  },
  {
    title: 'Realizacja',
    description:
      'Przechodzę do pracy nad projektem, wdrażam kolejne elementy i na bieżąco informuję o postępach. Jeśli pojawiają się pytania lub zmiany, ustalamy je na bieżąco.',
  },
  {
    title: 'Wdrożenie',
    description:
      'Na końcu testuję całość, poprawiam ewentualne błędy i wdrażam gotowe rozwiązanie. Po zakończeniu możemy ustalić dalsze wsparcie lub rozwój projektu.',
  },
]
</script>

<template>
  <section class="section process" id="process">
    <div class="section__header process__intro">
      <span class="section__label">WSPÓŁPRACA</span>
      <h2 class="section__title">Jak wygląda współpraca?</h2>
      <p class="section__subtitle">
        Współpracę dzielę na kilka prostych etapów, dzięki czemu od początku wiadomo, co robimy,
        jaki jest zakres prac i na jakim etapie znajduje się projekt.
      </p>
    </div>
    <div class="process__steps">
      <div v-for="process in trusts" :key="process.title" class="process__box">
        <span class="process__count"> 0{{ trusts.indexOf(process) + 1 }} </span>
        <div class="process__content">
          <h3 class="process__header">
            {{ process.title }}
          </h3>

          <div class="process__description">
            {{ process.description }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../style.scss' as style;
.process {
  opacity: 0;
  transform: translateY(1rem);
  animation: slideIn 1s 0.6s ease forwards;
  display: grid;
  grid-template-columns: 1fr;

  @include style.laptop {
    grid-template-columns: minmax(28rem, 0.75fr) minmax(0, 1.5fr);
    gap: 6.4rem;
    align-items: start;
  }

  @include style.desktop {
    gap: 8rem;
  }
  &__intro {
    position: relative;
    @include style.laptop {
      position: sticky;
      top: 9.6rem;
    }
  }
  // === Prawa strona ===
  &__steps {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    position: relative;
  }

  &__header {
    position: relative;
    margin-bottom: 0.6rem;
  }
  &__box {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 3.6rem;
    padding: 3rem 2rem;
    background-color: transparent;
    border-bottom: 0.1rem solid var(--border-color);
    border-radius: 0;
    &:last-child {
      border-bottom: none;
    }
  }
  &__count {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-2xl);
    font-weight: 600;
    color: var(--primary);
    padding: 1.2rem;
    position: relative;
    width: 7rem;
    min-width: 7rem;
    height: 7rem;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--primary);
      opacity: 0.1;
      border-radius: var(--border-radius-round);
    }
  }
  &__description {
    color: var(--text-secondary);
  }
}
</style>
