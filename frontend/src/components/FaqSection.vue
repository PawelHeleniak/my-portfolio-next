<script setup>
import { Plus, Minus } from '@lucide/vue'

const questions = [
  {
    id: 'small-changes',
    question: 'Czy zajmujesz się również małymi poprawkami?',
    answer:
      'Tak. Możemy zacząć od konkretnego błędu, zmiany w szablonie, poprawy responsywności lub rozbudowy pojedynczej funkcji.',
  },
  {
    id: 'specification',
    question: 'Czy muszę mieć gotowy projekt i specyfikację?',
    answer:
      'Nie. Wystarczy krótki opis tego, co chcesz osiągnąć. Pomogę uporządkować wymagania i określić zakres.',
  },
  {
    id: 'remote-work',
    question: 'Czy współpracujesz zdalnie?',
    answer:
      'Tak. Pracuję zdalnie z firmami z całej Polski. Możemy omówić projekt online lub telefonicznie.',
  },
]
</script>

<template>
  <section id="faq" class="section section--bg-tertiary" aria-labelledby="faq-title">
    <div class="section__wrapper faq">
      <div class="section__header faq__header">
        <h2 id="faq-title" class="section__title">
          Warto <br class="faq__title-break" />wiedzieć.
        </h2>
      </div>

      <div class="faq__list">
        <details
          v-for="(item, index) in questions"
          :key="item.id"
          class="faq__item"
          :open="index === 0"
        >
          <summary class="faq__trigger">
            <h3 class="faq__question">{{ item.question }}</h3>
            <Plus class="faq__icon faq__icon--plus" :size="18" aria-hidden="true" />
            <Minus class="faq__icon faq__icon--minus" :size="18" aria-hidden="true" />
          </summary>
          <p class="faq__answer">{{ item.answer }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../style.scss' as style;

.faq {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 3.2rem;

  @include style.laptop {
    grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
    gap: 6.4rem;
    align-items: start;
  }

  &__header {
    display: block;
    margin-bottom: 0;
  }

  &__title-break {
    display: none;

    @include style.laptop {
      display: initial;
    }
  }

  &__list {
    min-width: 0;
    border-top: 1px solid var(--border-color);
  }

  &__item {
    border-bottom: 1px solid var(--border-color);

    &[open] .faq__question {
      color: var(--accent);
    }

    &[open] .faq__icon--plus {
      display: none;
    }

    &[open] .faq__icon--minus {
      display: block;
    }
  }

  &__trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2.4rem;
    padding-block: 2.4rem;
    list-style: none;
    cursor: pointer;

    &::-webkit-details-marker {
      display: none;
    }

    &:focus-visible {
      outline: 2px solid var(--primary);
      outline-offset: 4px;
      border-radius: var(--border-radius-secondary);
    }

    &:hover .faq__question {
      color: var(--accent);
    }
  }

  &__question {
    color: var(--text-primary);
    font-size: var(--font-size-base);
    font-weight: 600;
    line-height: 1.5;
    transition: color 0.2s ease-in;
  }

  &__icon {
    flex-shrink: 0;
    color: var(--accent);

    &--minus {
      display: none;
    }
  }

  &__answer {
    padding: 0 3.6rem 2.4rem 0;
    color: var(--text-secondary);
    font-size: var(--font-size-sm);
    line-height: 1.7;
  }
}
</style>
