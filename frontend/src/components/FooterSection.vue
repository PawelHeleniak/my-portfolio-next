<script setup>
import { RouterLink } from 'vue-router'

const date = new Date()
const year = date.getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer__copyright">
      &#169; {{ year }} Paweł Heleniak
      <RouterLink to="/polityka-prywatnosci" class="footer__link footer__link--policy">
        Polityka prywatności
      </RouterLink>
    </div>
    <div class="footer__links">
      <a href="tel:+48661011470">
        <i class="fa-solid fa-phone"></i>
      </a>
      <a href="mailto:pawel.heleniak@outlook.com">
        <i class="fa-solid fa-envelope"></i>
      </a>
      <a href="https://www.linkedin.com/in/paweł-heleniak-1882b2231">
        <i class="fa-brands fa-linkedin"></i>
      </a>
      <a href="https://github.com/PawelHeleniak">
        <i class="fa-brands fa-github"></i>
      </a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../style.scss' as style;

.footer {
  --footer-bg: color-mix(in srgb, var(--bg-primary) 90%, black);

  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: var(--footer-bg);
  max-width: 1520px;
  margin: 0 auto;
  padding-inline: 1.2rem;
  padding-block: 1.2rem;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background-color: var(--footer-bg);
    box-shadow: 0 0 0 100vmax var(--footer-bg);
    clip-path: inset(0 -100vmax);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0 0 auto;
    height: 1px;
    background-color: var(--border-color);
    box-shadow: 0 0 0 100vmax var(--border-color);
    clip-path: inset(0 -100vmax);
    pointer-events: none;
  }

  @include style.mobile {
    flex-direction: row;
    justify-content: space-between;
  }
  @include style.tablet {
    padding-block: 2.4rem;
    padding-inline: 2.4rem;
  }
  @include style.laptop {
    padding-inline: 4rem;
  }
  &__links {
    display: flex;
    gap: 1.5rem;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 3.2rem;
      height: 3.2rem;
      font-size: var(--font-size-base);
      transition:
        0.2s ease-in transform,
        0.2s ease-in color;
      &:hover {
        transform: translateY(-3px);
        color: var(--secondary);
      }
      @include style.laptop {
        width: 2.8rem;
        height: 2.8rem;
        font-size: var(--font-size-m);
      }
    }
  }
  &__link {
    &--policy {
      color: var(--text-primary);
      transition: 0.2s ease-in color;
      position: relative;
      @include style.tablet {
        margin-left: 1.6rem;

        &::before {
          content: '';
          position: absolute;
          left: -0.7rem;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: calc(100% - 4px);
          background-color: var(--text-primary);
          border-radius: 50%;
        }
      }
      &:hover {
        color: var(--secondary);
      }
    }
  }
  &__copyright {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    font-size: var(--font-size-s);
    @include style.tablet {
      flex-direction: row;
      align-items: center;
      gap: 0;
      font-size: 1.6rem;
    }
  }
}
</style>
