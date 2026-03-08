<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const touched = ref(false)
const success = ref('')
const error = ref('')

const isEmpty = (v) => !v || !v.trim()

const sendForm = async () => {
  touched.value = true
  success.value = ''
  error.value = ''

  if (isEmpty(name.value) || isEmpty(email.value) || isEmpty(message.value)) {
    error.value = 'Wypełnij wszystkie pola przed wysłaniem wiadomości.'
    return
  }

  try {
    const res = await fetch('https://pawelheleniak.pl/send-mail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subject: `Wiadomość od: ${name.value} (${email.value})`,
        text: message.value,
      }),
    })

    if (!res.ok) throw new Error()

    success.value = 'Wiadomość została wysłana. Dziękuję za kontakt!'
    name.value = ''
    email.value = ''
    message.value = ''
    touched.value = false
  } catch {
    error.value = 'Nie udało się wysłać wiadomości. Spróbuj jeszcze raz.'
  }
}
</script>

<template>
  <section class="section" id="contact">
    <div class="section__list">
      <div class="contact --box">
        <div class="contact__wrapper">
          <h2 class="contact__header">Napisz do mnie</h2>
          <h4 class="contact__subheader">
            Szukasz front-end developera do projektu? Chętnie pomogę, odezwij się i porozmawiajmy o
            szczegółach.
          </h4>
          <form @submit.prevent="sendForm" class="contact__form">
            <div class="contact__form--row">
              <div class="input-field" :class="{ '--warning': touched && isEmpty(name) }">
                <input type="text" placeholder="Imię i nazwisko" v-model="name" />
              </div>
              <div class="input-field" :class="{ '--warning': touched && isEmpty(email) }">
                <input type="text" placeholder="Email" v-model="email" />
              </div>
            </div>
            <div
              class="input-field input-field--textarea"
              :class="{ '--warning': touched && isEmpty(message) }"
            >
              <textarea placeholder="Wiadomość..." rows="6" v-model="message" />
            </div>
            <button type="submit" class="button">Wyślij wiadomość</button>
          </form>
          <small v-if="error" class="contact__info --warning">{{ error }}</small>
          <small v-if="success" class="contact__info --success">{{ success }}</small>
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
        <a class="information__link --phone --box" href="tel:+48661011470">
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
@use '../style.scss' as style;

.section {
  display: flex;
  flex-direction: column;
  // align-items: center;
  position: relative;
  &__list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 2;
    gap: 1.2rem;
    @include style.tablet {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
    @include style.laptop {
      gap: 2rem;
    }
  }
}
.contact {
  width: 100%;
  grid-column: span 2;
  &__wrapper {
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
      flex-direction: column;
      gap: 1.2rem;
      @include style.laptop {
        gap: 2rem;
        flex-direction: row;
      }
    }
    .button {
      margin: 0 auto;
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
    &--textarea {
      height: 16rem;
    }
    &.--warning {
      outline: 1px solid var(--warning);
    }
  }
  &__info {
    display: flex;
    margin-top: 1rem;
    &.--warning {
      color: var(--warning);
    }
    &.--success {
      color: var(--success);
    }
  }
}
.information {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  @include style.laptop {
    gap: 2rem;
  }
  &__link {
    display: flex;
    gap: 1.6rem;
    transition: 0.2s ease-in transform;
    &:hover {
      transform: translateY(-5px);
      span {
        color: var(--primary);
      }
    }
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
      min-width: 6.4rem;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    span {
      font-size: var(--font-size-m);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      transition: 0.2s ease-in color;
    }
  }
}
</style>
