<script setup></script>

<template>
  <section class="section">
    <div class="section__list">
      <div class="contact --box">
        <div class="contact__wrapper">
          <h2 class="contact__header">Skontaktujmy się</h2>
          <h4 class="contact__subheader">
            Szukasz front-end developera do projektu? Chętnie pomogę, odezwij się i porozmawiajmy o
            szczegółach.
          </h4>
          <form action="" class="contact__form">
            <div class="contact__form--row">
              <div class="input-field"><input type="text" placeholder="Imię i nazwisko" /></div>
              <div class="input-field"><input type="text" placeholder="Email" /></div>
            </div>
            <div class="input-field"><textarea placeholder="Wiadomość..." rows="6" /></div>
          </form>
        </div>
      </div>
    </div>
    <div class="dot-blur dot-blur--contact"></div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  display: flex;
  flex-direction: column;
  // align-items: center;
  position: relative;
  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    z-index: 2;
  }
}
.contact {
  width: 100%;
  &__wrapper {
    max-width: 80rem;
    margin: auto;
  }

  &__header {
    margin-bottom: 1rem;
    text-align: center;
  }
  &__subheader {
    margin-bottom: 3rem;
    text-align: center;
    color: var(--color-text-secondary);
  }
  &__form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    &--row {
      display: flex;
      flex-direction: row;
      gap: 2rem;
    }
  }
  .input-field {
    width: 100%;
    border-radius: var(--border-radius-primary);
    overflow: hidden;
    textarea,
    input {
      background-color: var(--color-bg-primary);
      width: 100%;
      padding: 1.5rem;
    }
  }
}
</style>
