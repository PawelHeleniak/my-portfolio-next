<script setup>
import { ref } from 'vue'

// Email
const name = ref('')
const email = ref('')
const message = ref('')
const touched = ref(false)
const success = ref('')
const error = ref('')

const privacyAccepted = ref(false)

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const isEmpty = (v) => !v || !v.trim()

const sendForm = async () => {
  touched.value = true
  success.value = ''
  error.value = ''

  if (isEmpty(name.value) || isEmpty(email.value) || isEmpty(message.value)) {
    error.value = 'Wypełnij wszystkie pola przed wysłaniem wiadomości.'
    return
  }

  if (!isValidEmail(email.value)) {
    error.value = 'Podaj poprawny adres e-mail.'
    return
  }

  if (!privacyAccepted.value) {
    error.value = 'Zaakceptuj politykę prywatności.'
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
    privacyAccepted.value = false
    touched.value = false
  } catch {
    error.value = 'Nie udało się wysłać wiadomości. Spróbuj jeszcze raz.'
  }
}

// Contact box
const contacts = [
  {
    href: 'mailto:kontakt@pawelheleniak.pl',
    icon: 'fa-solid fa-envelope',
    name: 'Wyślij e-mail',
    to: 'kontakt@pawelheleniak.pl',
  },
  {
    href: 'tel:+48661011470',
    icon: 'fa-solid fa-phone',
    name: 'Zadzwoń',
    to: '+48 661 011 470',
  },
  {
    href: 'https://www.linkedin.com/in/paweł-heleniak-1882b2231',
    icon: 'fa-brands fa-linkedin-in',
    name: 'Napisz na linkedin',
    to: 'paweł-heleniak',
  },
  {
    href: 'https://github.com/PawelHeleniak',
    icon: 'fa-brands fa-github',
    name: 'Napisz na github',
    to: 'github.com/PawelHeleniak',
  },
]
</script>

<template>
  <section class="section section--bg" id="contact">
    <!-- <div class="section__list"> -->
    <div class="information">
      <div class="information__header">
        <div class="section__header">
          <p class="section__label">KONTAKT</p>
          <h2 class="section__title">Porozmawiajmy o Twoim projekcie</h2>
          <h3 class="section__subtitle">
            Szukasz front-end developera do projektu? Chętnie pomogę, odezwij się i porozmawiajmy o
            szczegółach.
          </h3>
        </div>
      </div>
      <div class="information__links">
        <a
          v-for="contact in contacts"
          :key="contact.name"
          class="information__link ui-card"
          :href="contact.href"
        >
          <i :class="contact.icon"></i>
          <div class="information__content">
            <h4>{{ contact.name }}</h4>
            <span>{{ contact.to }}</span>
          </div>
        </a>
      </div>
      <!-- </div> -->
      <div class="contact ui-card">
        <div class="contact__wrapper">
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
            <label class="contact__checkbox">
              <input type="checkbox" v-model="privacyAccepted" class="contact__checkbox--input" />
              <span class="contact__checkbox--custom"></span>

              <span class="contact__policy"
                >Zapoznałem się z
                <RouterLink to="/polityka-prywatnosci" class="contact__checkbox--policy"
                  >polityką prywatności</RouterLink
                >
                i wyrażam zgodę na przetwarzanie danych osobowych w celu udzielenia odpowiedzi na
                wiadomość.</span
              >
            </label>
            <button type="submit" class="ui-button contact__form--button">Wyślij wiadomość</button>
          </form>
          <small v-if="error" class="contact__info --warning">{{ error }}</small>
          <small v-if="success" class="contact__info --success">{{ success }}</small>
        </div>
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
  position: relative;
  &__list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 2;
    gap: 1.2rem;
    @include style.desktop {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
    }
  }
}
.contact {
  width: 100%;
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
    gap: 1.6rem;
    &--row {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      @include style.laptop {
        gap: 1.6rem;
        flex-direction: row;
      }
    }
    .button {
      margin: 0 auto;
    }
    &--button {
      margin: 0 auto;
    }
  }
  .input-field {
    width: 100%;
    border-radius: var(--border-radius-secondary);
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
  &__checkbox {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    cursor: pointer;

    &--input {
      position: absolute;
      opacity: 0;
      pointer-events: none;
      margin-right: 1rem;
    }

    &--custom {
      width: 2rem;
      min-width: 2rem;
      height: 2rem;
      border: 2px solid var(--primary);
      border-radius: 6px;
      margin-top: 0.2rem;
      position: relative;
      transition: 0.2s ease;
    }

    &--input:checked + &--custom {
      background: var(--primary);
    }

    &--input:checked + &--custom::after {
      content: '';
      position: absolute;
      left: 0.55rem;
      top: 0.15rem;
      width: 0.5rem;
      height: 1rem;
      border: solid white;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }

    &--policy {
      color: var(--text-primary);
      transition: 0.2s ease-in color;
      text-decoration: underline;
      &:hover {
        color: var(--secondary);
      }
    }
  }
}
.information {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  @include style.laptop {
    display: grid;
    grid-template-columns: minmax(0, 70rem) 1fr;
    grid-column-gap: 3rem;
  }
  @include style.desktop {
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 4rem;
  }
  &__header {
    margin-bottom: -2rem;
    @include style.laptop {
      margin-bottom: 0;
    }
  }
  &__links {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    @include style.desktop {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: max-content max-content;
    }
  }
  &__link {
    display: flex;
    gap: 1.2rem;
    transition: 0.2s ease-in transform;
    padding: 1rem;
    &:hover {
      transform: translateY(-5px);
    }
    @include style.laptop {
      padding: 1.5rem;
    }
    i {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.4rem;
      width: 6rem;
      height: 6rem;
      color: var(--primary);
      padding: 1.2rem;
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
  }
  &__content {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    span {
      font-size: var(--font-size-base);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      transition: 0.2s ease-in color;
    }
  }
}

.information__header {
  order: 1;
  @include style.laptop {
    grid-column: span 2;
  }
  @include style.desktop {
    grid-area: 1 / 1 / 2 / 2;
  }
}
.information__links {
  order: 3;
  @include style.desktop {
    grid-area: 2 / 1 / 3 / 2;
    margin-top: auto;
  }
}
.contact {
  order: 2;
  @include style.desktop {
    grid-area: 1 / 2 / 3 / 3;
  }
}
</style>
