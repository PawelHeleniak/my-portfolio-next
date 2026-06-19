<script setup>
const services = [
  {
    title: 'Strony WordPress',
    description:
      "Tworzę strony firmowe, wizytówki i landing page'e oparte na WordPressie. Dbam o szybkość działania, wygodną edycję treści i nowoczesny wygląd.",
  },
  {
    title: 'Sklepy IdoSell',
    description:
      'Tworzę i modyfikuję szablony sklepów IdoSell, wdrażam nowe sekcje oraz rozwijam istniejące sklepy internetowe.',
  },
  {
    title: 'Strony dedykowane',
    description:
      'Realizuję strony internetowe dopasowane do indywidualnych potrzeb. Korzystam z nowoczesnych technologii oraz systemów CMS umożliwiających łatwe zarządzanie treścią.',
  },
  {
    title: 'Wsparcie projektów Front-End',
    description:
      'Pomagam w rozwoju aplikacji i stron internetowych tworzonych w Angularze oraz Vue. Mogę dołączyć do istniejącego projektu lub wesprzeć zespół przy nowych funkcjonalnościach.',
  },
]
</script>

<template>
  <section class="section" id="about">
    <h2 class="section__header">Jak mogę pomóc?</h2>
    <div class="about">
      <div v-for="service in services" :key="service.title" class="about__box --box">
        <h3 class="about__header">
          {{ service.title }}
        </h3>

        <div class="about__description">
          {{ service.description }}
        </div>
      </div>

      <div class="dot-blur dot-blur--about"></div>
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
.about {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  @include style.tablet {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  &__header {
    margin-bottom: 2rem;
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
