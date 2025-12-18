<script setup></script>

<template>
  <footer class="footer">
    <div class="footer__copyright">&#169; 2025 Paweł Heleniak</div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 0 0 0;
  @include style.mobile {
    flex-direction: row;
    justify-content: space-between;
    padding: 2.4rem 0 0 0;
  }
  @include style.tablet {
    padding: 4rem 0 0 0;
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
      font-size: var(--font-size-l);
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
        font-size: var(--font-size-base);
      }
    }
  }
}
</style>
