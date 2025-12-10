<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const navigation = ref(null)

onMounted(() => {
  const tl = gsap.to(navigation.value, {
    marginRight: 'auto',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    duration: 0.5,
    paused: true,
  })

  ScrollTrigger.create({
    trigger: navigation.value,
    start: '5%',
    onUpdate: (self) => {
      if (self.progress > 0) {
        tl.play()
      } else {
        tl.reverse()
      }
    },
  })
})
</script>

<template>
  <nav class="navigation --box" ref="navigation">
    <div class="navigation__box">
      <button class="navigation__item navigation__item--active">O mnie</button>
      <button class="navigation__item">Projekty</button>
      <button class="navigation__item">Kontakt</button>
    </div>
    <button class="navigation__switch"></button>
  </nav>
</template>

<style lang="scss" scoped>
// Nawigacja
.navigation {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  width: calc(50% - 2rem);
  margin-left: auto;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(1rem);
  animation: slideIn 1s ease forwards;
  // Glassmorphism
  position: sticky;
  top: 2rem;
  z-index: 99;
  background: var(--bg-secondary-opacity);
  border-radius: 16px;
  // box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  &__item {
    padding: 8px 16px;
    cursor: pointer;
    transition: 0.2s ease-in text-shadow;
    &--active {
      background-color: hsla(279, 100%, 91.76%, 0.8);
      border-radius: var(--border-radius-primary);
      text-shadow: 0 0 1px var(--text-primary);
    }
    &:hover {
      text-shadow: 0 0 1px var(--text-primary);
    }
  }
  &__switch {
  }
}
</style>
