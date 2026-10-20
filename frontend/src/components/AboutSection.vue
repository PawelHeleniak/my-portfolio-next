<script setup>
import { ShoppingCart, Blocks } from '@lucide/vue'

const services = [
  {
    title: 'WordPress',
    eyebrow: 'STRONY INTERNETOWE',
    description:
      'Tworzę strony firmowe i wizytówki oparte na WordPressie. Dbam o szybkość, responsywność i prostą edycję treści po wdrożeniu.',
    icon: 'fa-brands fa-wordpress',
    type: 'primary',
  },
  {
    title: 'IdoSell',
    eyebrow: 'SKLEPY INTERNETOWE',
    description:
      'Rozwijam i modyfikuję sklepy internetowe oparte na IdoSell. Tworzę indywidualne szablony, poprawiam wygląd sklepu i wdrażam nowe funkcjonalności.',
    icon: ShoppingCart,
    type: 'accent',
  },
  {
    title: 'Aplikacje webowe',
    eyebrow: 'FULLSTACK DEVELOPMENT',
    description:
      'Tworzę i rozwijam interfejsy w Angularze, Vue i TypeScript. Mogę dołączyć do istniejącego projektu albo przygotować nową aplikację od podstaw.',
    icon: Blocks,
    type: 'accent',
  },
]
</script>

<template>
  <section class="section" id="offer">
    <div class="section__header">
      <p class="section__label">OFERTA</p>
      <h2 class="section__title">W czym mogę pomóc?</h2>
    </div>

    <div class="services">
      <article
        v-for="service in services"
        :key="service.title"
        class="services__box ui-card"
        :class="`services__box--${service.type}`"
      >
        <div class="services__content">
          <div class="services__icon">
            <component
              :is="service.icon"
              v-if="typeof service.icon !== 'string'"
              :size="24"
              :stroke-width="1.7"
            />

            <i v-else :class="service.icon" aria-hidden="true"></i>
          </div>

          <span class="services__eyebrow">
            {{ service.eyebrow }}
          </span>

          <h3 class="services__header">
            {{ service.title }}
          </h3>

          <p class="services__description">
            {{ service.description }}
          </p>
        </div>

        <component
          :is="service.icon"
          v-if="typeof service.icon !== 'string'"
          class="services__watermark"
          :stroke-width="1"
          aria-hidden="true"
          focusable="false"
        />
        <i v-else class="services__watermark" :class="service.icon" aria-hidden="true"></i>
      </article>
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

.services {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1.6rem;
  position: relative;

  @include style.tablet {
    grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
    grid-template-rows: repeat(2, minmax(0, 1fr));

    > :first-child {
      grid-row: span 2;
    }
  }

  &__box {
    --card-accent: var(--primary);
    position: relative;
    isolation: isolate;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-width: 0;
    padding: 3.2rem;
    border-radius: var(--border-radius-primary, 1.6rem);
    transition:
      border-color 0.3s ease,
      transform 0.3s ease;

    &--primary {
      --card-accent: var(--primary);

      background:
        radial-gradient(ellipse at 100% 100%, hsl(262 72% 60% / 0.1), transparent 60%),
        var(--background-secondary, #1b1a22);
    }

    &--accent {
      --card-accent: var(--accent);

      background:
        radial-gradient(ellipse at 100% 0%, hsl(175 54% 46% / 0.055), transparent 65%),
        var(--background-secondary, #1b1a22);
    }

    @media (hover: hover) {
      &:hover {
        border-color: var(--card-accent);

        .services__watermark {
          opacity: 0.1;
          transform: scale(1.05);
        }

        .services__watermark:is(svg) {
          opacity: 0.14;
        }
      }
    }
  }

  &__content {
    position: relative;
    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    height: 100%;
    min-width: 0;
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 5.6rem;
    height: 5.6rem;
    margin-bottom: 2rem;

    color: var(--card-accent);
    background: color-mix(in srgb, var(--card-accent) 12%, transparent);
    border-radius: var(--border-radius-secondary);

    i {
      font-size: 3rem;
      line-height: 1;
    }

    svg {
      width: 3rem;
      height: 3rem;
      stroke-width: 1.7;
    }
  }

  &__eyebrow {
    margin-bottom: 0.8rem;

    color: var(--card-accent);
    font-size: var(--font-size-s);
    font-weight: 600;
    letter-spacing: 0.06em;
    line-height: 1.4;
  }

  &__header {
    margin: 0 0 1.6rem;

    font-size: var(--font-size-xl);
    line-height: 1.2;
  }

  &__description {
    margin: 0;

    max-width: 65ch;
    color: var(--text-secondary);
    line-height: 1.6;
  }

  &__watermark {
    position: absolute;
    right: -2rem;
    bottom: -3rem;
    z-index: 0;
    width: clamp(12rem, 15vw, 22rem);
    height: clamp(12rem, 15vw, 22rem);
    color: var(--card-accent);
    font-size: clamp(12rem, 15vw, 22rem);
    line-height: 1;
    opacity: 0.05;
    pointer-events: none;
    transform: scale(1);
    transition:
      opacity 0.3s ease,
      transform 0.4s ease;

    &:is(svg) {
      opacity: 0.09;
      stroke-width: 1;
    }
  }

  &__box--accent {
    .services__watermark {
      right: -2rem;
      bottom: -3rem;
    }
  }

  @media (max-width: 1023px) {
    &__box {
      padding: 2.4rem;
    }

    &__icon {
      width: 4.4rem;
      height: 4.4rem;

      i {
        font-size: 2rem;
      }

      svg {
        width: 2.2rem;
        height: 2.2rem;
      }
    }

    &__watermark {
      width: 12rem;
      height: 12rem;
      font-size: 12rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &__box,
    &__watermark {
      transition: none;
    }
  }
}
</style>
