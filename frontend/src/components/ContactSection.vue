<script setup>
import { computed, ref } from 'vue'

// Email
const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')
const service = ref('')
const website = ref('')
const services = [
  'Strona internetowa',
  'Sklep internetowy',
  'Aplikacja webowa',
  'Konsultacja',
  'Inne',
]
const touched = ref(false)
const success = ref('')
const error = ref('')

const privacyAccepted = ref(false)

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

const isEmpty = (v) => !v || !v.trim()

const isValidPhone = (value) => {
  const trimmed = value.trim()
  if (!/^\+?[\d\s()-]+$/.test(trimmed)) return false
  const number = trimmed.replace(/[\s()-]/g, '').replace(/^00/, '+')
  if (number.startsWith('+48')) return /^\+48[1-9]\d{8}$/.test(number)
  return /^(?:[1-9]\d{8}|\+[1-9]\d{7,14})$/.test(number)
}

const missingContact = computed(() => isEmpty(email.value) && isEmpty(phone.value))
const emailInvalid = computed(
  () =>
    touched.value &&
    (missingContact.value || (!isEmpty(email.value) && !isValidEmail(email.value))),
)
const phoneInvalid = computed(
  () =>
    touched.value &&
    (missingContact.value || (!isEmpty(phone.value) && !isValidPhone(phone.value))),
)

const sendForm = async () => {
  touched.value = true
  success.value = ''
  error.value = ''

  if (isEmpty(name.value) || isEmpty(message.value)) {
    error.value = 'Wypełnij wszystkie wymagane pola przed wysłaniem wiadomości.'
    return
  }

  if (isEmpty(service.value)) {
    error.value = 'Wybierz, w czym mogę pomóc.'
    return
  }

  if (missingContact.value) {
    error.value = 'Podaj adres e-mail lub numer telefonu.'
    return
  }

  if (!isEmpty(email.value) && !isValidEmail(email.value)) {
    error.value = 'Podaj poprawny adres e-mail.'
    return
  }

  if (!isEmpty(phone.value) && !isValidPhone(phone.value)) {
    error.value =
      'Podaj poprawny numer telefonu: 9 cyfr lub numer z prefiksem kraju, np. +48 661 011 470.'
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
        subject: `Wiadomość od: ${name.value} (${email.value.trim() || phone.value.trim()})`,
        text: [
          ...(!isEmpty(email.value) ? [`E-mail: ${email.value.trim()}`] : []),
          ...(!isEmpty(phone.value) ? [`Telefon: ${phone.value.trim()}`] : []),
          `W czym mogę pomóc: ${service.value}`,
          ...(website.value.trim() ? [`Adres strony: ${website.value}`] : []),
          '',
          message.value,
        ].join('\n'),
      }),
    })

    if (!res.ok) throw new Error()

    success.value = 'Wiadomość została wysłana. Dziękuję za kontakt!'
    name.value = ''
    email.value = ''
    phone.value = ''
    message.value = ''
    service.value = ''
    website.value = ''
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
  // {
  //   href: 'https://github.com/PawelHeleniak',
  //   icon: 'fa-brands fa-github',
  //   name: 'Napisz na github',
  //   to: 'github.com/PawelHeleniak',
  // },
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
          <form @submit.prevent="sendForm" class="contact__form" novalidate>
            <fieldset
              class="contact__services"
              :class="{ 'contact__services--invalid': touched && isEmpty(service) }"
            >
              <legend class="contact__services-label">W czym mogę pomóc?</legend>
              <div class="contact__service-options">
                <label v-for="item in services" :key="item" class="contact__service-option">
                  <input
                    v-model="service"
                    class="contact__service-input"
                    type="radio"
                    name="service"
                    :value="item"
                    required
                    :aria-invalid="touched && isEmpty(service)"
                  />
                  <span class="contact__service-button">{{ item }}</span>
                </label>
              </div>
            </fieldset>
            <div class="contact__form--row">
              <div class="input-field" :class="{ '--warning': touched && isEmpty(name) }">
                <input type="text" placeholder="Imię i nazwisko" v-model="name" />
              </div>

              <div class="input-field">
                <input
                  v-model="website"
                  type="text"
                  placeholder="Adres strony (opcjonalne)"
                  aria-label="Adres strony (opcjonalne)"
                />
              </div>
            </div>
            <div class="contact__form--row">
              <div class="input-field" :class="{ '--warning': emailInvalid }">
                <input
                  v-model="email"
                  type="email"
                  autocomplete="email"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="contact-method-hint"
                  :aria-invalid="emailInvalid"
                />
              </div>
              <div class="input-field" :class="{ '--warning': phoneInvalid }">
                <input
                  v-model="phone"
                  type="tel"
                  autocomplete="tel"
                  placeholder="Telefon"
                  aria-label="Telefon"
                  aria-describedby="contact-method-hint"
                  :aria-invalid="phoneInvalid"
                />
              </div>
            </div>
            <p id="contact-method-hint" class="contact__hint">
              Podaj e-mail lub telefon — wystarczy jedno z tych pól.
            </p>
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
                i informacją dotyczącą przetwarzania moich danych osobowych w celu obsługi
                zapytania.</span
              >
            </label>
            <button type="submit" class="ui-button contact__form--button">Wyślij wiadomość</button>
          </form>
          <small v-if="error" class="contact__info --warning" role="alert">{{ error }}</small>
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
  &__services {
    min-width: 0;
    border: 0;
    border-radius: var(--border-radius-secondary);

    &--invalid {
      span {
        border-color: var(--warning);
      }
    }
  }
  &__services-label {
    margin-bottom: 1rem;
    font-size: var(--font-size-base);
  }
  &__service-options {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }
  &__service-option {
    position: relative;
    cursor: pointer;
  }
  &__service-input {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;

    &:checked + .contact__service-button {
      border-color: var(--primary);
      color: var(--primary);
      background-color: color-mix(in srgb, var(--primary) 10%, var(--bg-secondary));
    }
    &:focus-visible + .contact__service-button {
      outline: 2px solid var(--primary);
      outline-offset: 3px;
    }
  }
  &__service-button {
    display: inline-flex;
    align-items: center;
    // min-height: 4.4rem;
    padding: 0.8rem 1.6rem;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius-round);
    background-color: var(--bg-primary);
    color: var(--text-secondary);
    font-size: var(--font-size-s);
    transition:
      border-color 0.2s ease,
      background-color 0.2s ease,
      color 0.2s ease;

    &:hover {
      border-color: var(--primary);
    }
  }
  &__hint {
    color: var(--text-secondary);
    font-size: var(--font-size-s);
    margin-top: -0.8rem;
  }
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
      width: 1.8rem;
      min-width: 1.8rem;
      height: 1.8rem;
      border: 2px solid var(--primary);
      border-radius: 6px;
      margin-top: 0.4rem;
      position: relative;
      transition: 0.2s ease;
    }

    &--input:checked + &--custom {
      background: var(--primary);
    }

    &--input:checked + &--custom::after {
      content: '';
      position: absolute;
      left: 0.5rem;
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
  &__policy {
    font-size: var(--font-size-sm);
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
    grid-template-rows: auto 1fr;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-column-gap: 5rem;
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
      max-width: 620px;
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
    max-width: 620px;

    .section__header {
      margin-bottom: 0;
    }
  }
}
.information__links {
  order: 3;
  @include style.desktop {
    grid-area: 2 / 1 / 3 / 2;
    align-self: start;
  }
}
.contact {
  order: 2;
  @include style.desktop {
    grid-area: 1 / 2 / 3 / 3;
  }
}
</style>
