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
      <div class="information">
        <a class="information__link --email --box" href="mailto:pawel.heleniak@outlook.com">
          <i class="fa-regular fa-envelope"></i>
          <div class="information__content">
            <h4>Wyślij e-mail</h4>
            <span>pawel.heleniak@outlook.com</span>
          </div>
        </a>
        <a class="information__link --phone --box" href="tel:48661011470">
          <i class="fa-solid fa-phone"></i>
          <div class="information__content">
            <h4>Zadzwoń</h4>
            <span>+48 661 011 470</span>
          </div>
        </a>
        <a
          class="information__link --linkedin --box"
          href="https://www.linkedin.com/in/paweł-heleniak-1882b2231"
        >
          <i class="fa-brands fa-linkedin-in"></i>
          <div class="information__content">
            <h4>Napisz na linkedin</h4>
            <span>paweł-heleniak</span>
          </div>
        </a>
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
    align-items: flex-start;
    gap: 2rem;
    z-index: 2;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
.contact {
  width: 100%;
  grid-column: span 2;
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
    color: var(--text-secondary);
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
      background-color: var(--bg-primary);
      width: 100%;
      padding: 1.5rem;
    }
  }
}
.information {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  &__link {
    display: flex;
    gap: 1.6rem;
    i {
      border-radius: var(--border-radius-primary);
      background-color: var(--accent);
      background: linear-gradient(135deg, var(--accent) 25%, var(--primary) 100%);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 6.4rem;
      height: 6.4rem;
      font-size: 2.4rem;
      color: var(--bg-primary);
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    span {
      font-size: var(--font-size-m);
    }
  }
}
</style>
