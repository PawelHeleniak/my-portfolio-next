<script setup>
import { ArrowDown, ArrowUpRight } from '@lucide/vue'
import { RouterLink } from 'vue-router'

const technologies = ['WordPress', 'IdoSell', 'Aplikacje webowe']
</script>

<template>
  <header class="hero" aria-labelledby="hero-title">
    <div class="section__wrapper">
      <div class="hero__content">
        <p class="hero__eyebrow section__label">{{ technologies.join(' · ') }}</p>
        <h1 id="hero-title" class="hero__title">
          Tworzę i rozwijam strony, sklepy i aplikacje.
          <span class="hero__title-accent">Od poprawek po kompletne wdrożenia.</span>
        </h1>
        <p class="hero__description">
          Pomagam firmom budować nowoczene strony, sklepy internetowe i aplikacje webowe.
          Specjalizuje się w Wordpress, Idosell oraz tworzeniu aplikacji webowych jako full-stack
          developer.
        </p>
        <div class="hero__actions ui-buttons">
          <RouterLink class="ui-button" to="/#contact">
            Porozmawiajmy o projekcie <ArrowUpRight :size="20" aria-hidden="true" />
          </RouterLink>
          <RouterLink class="ui-button ui-button--secondary" to="/#projects">
            Zobacz realizacje <ArrowDown :size="18" aria-hidden="true" />
          </RouterLink>
        </div>
        <p class="hero__note">
          Od pierwszej rozmowy po wdrożenie | Współpracujesz bezpośrednio ze mną
        </p>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../style.scss' as style;

.hero {
  position: relative;
  isolation: isolate;
  text-align: center;
  padding: 4.2rem 0 4rem;

  &::before,
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    pointer-events: none;
    inset: -11rem 0 0;
  }

  &::before {
    background: radial-gradient(
      ellipse at 50% 0%,
      color-mix(in srgb, var(--primary) 14%, transparent),
      transparent 68%
    );
  }

  &::after {
    background-image:
      linear-gradient(
        color-mix(in srgb, var(--border-color) 32%, transparent) 1px,
        transparent 1px
      ),
      linear-gradient(
        90deg,
        color-mix(in srgb, var(--border-color) 32%, transparent) 1px,
        transparent 1px
      );
    background-size: 6.4rem 6.4rem;
    background-position: 0 0;
    mask-image:
      linear-gradient(to right, transparent, black 6.4rem),
      linear-gradient(to bottom, transparent, black 15%, transparent 85%);
    mask-composite: intersect;
  }

  &__content {
    max-width: 100rem;
    margin-inline: auto;
    opacity: 0;
    transform: translateY(1rem);
    animation: slideIn 1s 0.4s ease forwards;
  }

  &__eyebrow {
    margin-bottom: 1.6rem;
    text-wrap: balance;
    @include style.mobile {
      margin-bottom: 2.4rem;
    }
  }

  &__title {
    font-size: var(--font-size-3xl);
    line-height: 1.1;
    letter-spacing: -0.045em;
    text-wrap: balance;
    max-width: 65rem;
    margin: 0 auto;
    @include style.mobile {
      // font-size: calc(var(--font-size-3xl) * 1.25);
    }
    @include style.laptop {
      max-width: 100%;
    }
  }
  &__title-accent {
    color: var(--primary);
  }

  &__description {
    max-width: 74rem;
    margin: 2.8rem auto 0;
    color: var(--text-secondary);
    font-size: var(--font-size-base);
    line-height: 1.7;
    text-wrap: pretty;
  }

  &__actions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.2rem;
    margin-top: 3.2rem;
    .ui-button {
      width: 100%;
      max-width: 32rem;
      margin-inline: auto;
      @include style.tablet {
        width: initial;
        max-width: initial;
        margin-inline: initial;
      }
    }
  }

  &__note {
    margin-top: 1.6rem;
    color: var(--text-secondary);
    font-size: var(--font-size-s);
    text-wrap: balance;
  }

  @include style.mobile {
    padding: 6.4rem 0 6.4rem;

    &__actions {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  @include style.tablet {
    padding: 9.6rem 2.4rem 9.6rem;

    &__description {
      margin-top: 3.2rem;
      font-size: var(--font-size-m);
    }
  }

  @include style.laptop {
    padding: 11.2rem 2.4rem 11.2rem;
  }
}
</style>
