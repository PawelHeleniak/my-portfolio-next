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
  <section class="section section--bg-tertiary" id="offer">
    <div class="section__wrapper">
      <div class="section__header">
        <!-- <p class="section__label">OFERTA</p> -->
        <h2 class="section__title">Jedna osoba. <br />Trzy obszary wsparcia.</h2>
        <p class="section__subtitle">
          Opowiedz, co chcesz osiągnąć. Pomogę dobrać rozwiązanie do rzeczywistego problemu.
        </p>
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
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../style.scss' as style;

.section__wrapper {
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
    padding: 1.5rem;
    border-radius: var(--border-radius-primary);
    transition:
      border-color 0.3s ease,
      transform 0.3s ease;

    &--primary {
      --card-accent: var(--primary);

      background:
        radial-gradient(
          ellipse at 100% 100%,
          color-mix(in srgb, var(--card-accent) 10%, transparent),
          transparent 60%
        ),
        var(--bg-secondary);
    }

    &--accent {
      --card-accent: var(--accent);

      background:
        radial-gradient(
          ellipse at 100% 0%,
          color-mix(in srgb, var(--card-accent) 5.5%, transparent),
          transparent 65%
        ),
        var(--bg-secondary);
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
    width: 5.2rem;
    height: 5.2rem;
    margin-bottom: 2rem;

    color: var(--card-accent);
    background: color-mix(in srgb, var(--card-accent) 12%, transparent);
    border-radius: var(--border-radius-secondary);

    i {
      font-size: 2.6rem;
      line-height: 1;
    }

    svg {
      width: 2.6rem;
      height: 2.6rem;
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
    right: -1rem;
    bottom: -2rem;
    z-index: 0;
    width: 14rem;
    height: 14rem;
    font-size: 14rem;
    color: var(--card-accent);
    line-height: 1;
    opacity: 0.05;
    pointer-events: none;
    transform: scale(1);
    transition:
      opacity 0.3s ease,
      transform 0.4s ease;

    &:is(svg) {
      opacity: 0.08;
      stroke-width: 1;
    }
  }

  &__box--accent {
    .services__watermark {
      right: -1rem;
      bottom: -2rem;
    }
  }
  @include style.tablet {
    &__icon {
      width: 5.6rem;
      height: 5.6rem;

      i {
        font-size: 3rem;
      }

      svg {
        width: 3rem;
        height: 3rem;
      }
    }
    &__box {
      padding: 2.4rem;
    }
    &__watermark {
      width: clamp(18rem, 16vw, 22rem);
      height: clamp(18rem, 16vw, 22rem);
      font-size: clamp(18rem, 16vw, 22rem);
      right: -2rem;
      bottom: -3rem;
    }
    &__box--accent {
      .services__watermark {
        right: -2rem;
        bottom: -3rem;
      }
    }
  }
  @include style.laptop {
    &__box {
      padding: 3.2rem;
    }
  }
}
</style>
