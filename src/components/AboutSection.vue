<script setup></script>

<template>
  <section class="section">
    <h2 class="section__header">Czym się zajmuję</h2>
    <div class="about">
      <div class="about__box --box">
        <h3 class="about__header">Tworzę nowoczesne strony internetowe</h3>
        <div class="about__description">
          Pomagam firmom i osobom prywatnym stworzyć strony dopasowane do ich potrzeb. Projektuję od
          podstaw lub ulepszam istniejące witryny, dbając o przejrzystość, szybkość i nowoczesny
          wygląd.
        </div>
      </div>
      <div class="about__box --box">
        <h3 class="about__header">Chętnie pomogę przy projekcie w Angularze</h3>
        <div class="about__description">
          Specjalizuję się w Angularze. Jeśli pracujesz nad aplikacją front-endową lub potrzebujesz
          wsparcia przy rozwoju projektu, chętnie pomogę.
        </div>
      </div>
      <div class="dot-blur dot-blur--about"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  position: relative;
  &__header {
    margin-bottom: 2rem;
  }
  &__box {
    position: relative;
    z-index: 2;
  }
}
</style>
