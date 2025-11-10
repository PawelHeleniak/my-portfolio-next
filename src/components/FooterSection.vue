<script setup></script>

<template>
  <footer class="footer">
    <div class="footer__copyright">&#169; 2025 Paweł Heleniak</div>
    <div class="footer__links">
      <a href="">
        <i class="fa-solid fa-phone"></i>
      </a>
      <a href="">
        <i class="fa-solid fa-envelope"></i>
      </a>
      <a href="">
        <i class="fa-brands fa-linkedin"></i>
      </a>
      <a href="">
        <i class="fa-brands fa-github"></i>
      </a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-between;
  padding: 4rem 0 0 0;
  &__links {
    display: flex;
    gap: 1.5rem;
  }
}
</style>
