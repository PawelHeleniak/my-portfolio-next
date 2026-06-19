<script setup>
const trusts = [
  {
    icon: 'fa-solid fa-rocket',
    title: 'Szybka realizacja zleceń',
    description:
      'Nie działam przez pośredników. Rozmawiasz bezpośrednio z osobą, która realizuje projekt.',
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Rozwój istniejących projektów',
    description:
      'Pomagam nie tylko tworzyć nowe strony, ale również rozwijać już działające sklepy i witryny.',
  },
  {
    icon: 'fa-solid fa-cogs',
    title: 'Nowoczesne rozwiązania',
    description:
      'Dbam o szybkość działania, responsywność oraz wygodę korzystania na każdym urządzeniu.',
  },
  {
    icon: 'fa-regular fa-comment-dots',
    title: 'Stały kontakt i wsparcie',
    description: 'Na bieżąco informuję o postępach i wspólnie ustalamy kolejne etapy realizacji.',
  },
]
</script>

<template>
  <section class="section" id="trust">
    <h2 class="section__header">Dlaczego warto?</h2>
    <div class="trust">
      <div v-for="trust in trusts" :key="trust.title" class="trust__box --box">
        <div class="trust__icon">
          <i :class="trust.icon"></i>
        </div>

        <h3 class="trust__header">
          {{ trust.title }}
        </h3>

        <div class="trust__description">
          {{ trust.description }}
        </div>
      </div>
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
.trust {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  position: relative;
  @include style.tablet {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
  &__header {
    // margin-bottom: 2rem;
  }
  &__box {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.2rem;
  }
  &__icon {
    border-radius: var(--border-radius-secondary);
    font-size: 3.2rem;
    background-color: var(--bg-primary);
    padding: 1.2rem;
    width: 6.4rem;
    height: 6.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary);
  }
  &__description {
    color: var(--text-secondary);
  }
}
</style>
