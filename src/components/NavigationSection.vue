<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const navigation = ref(null)
const isOpen = ref(false)
const activeSection = ref(null)

const sections = [
  { id: 'about', name: 'O mnie', icon: 'fa-regular fa-user' },
  { id: 'projects', name: 'Projekty', icon: 'fa-solid fa-diagram-project' },
  { id: 'contact', name: 'Kontakt', icon: 'fa-solid fa-mobile-screen' },
]

const toggleNav = () => {
  isOpen.value = !isOpen.value
}

const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

let observer = null

onMounted(async () => {
  const screenWidth = window.innerWidth
  if (screenWidth > 1023) {
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
  }

  await nextTick()
  const sectionElements = document.querySelectorAll('section')
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        console.log(entry.target.id)
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { threshold: 0.5 },
  )

  sectionElements.forEach((section) => observer.observe(section))
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <nav class="navigation" :class="{ 'navigation--open': isOpen }" ref="navigation">
    <button class="navigation__bars" @click="toggleNav">
      <i v-if="!isOpen" class="fa-solid fa-bars"></i>
      <i v-else class="fa-solid fa-x"></i>
    </button>
    <div class="navigation__list">
      <a
        v-for="section in sections"
        :key="section.id"
        class="navigation__item"
        :class="{ 'navigation__item--active': activeSection === section.id }"
        @click="scrollToSection(section.id)"
      >
        <i :class="section.icon"></i><span>{{ section.name }}</span>
      </a>
    </div>
    <button class="navigation__switch"><i class="fa-regular fa-sun"></i></button>
  </nav>
</template>

<style lang="scss" scoped>
@use '../style.scss' as style;

// Nawigacja
.navigation {
  gap: 1rem;
  padding: 0.6rem;
  width: 5.4rem;
  opacity: 0;
  transform: translateY(1rem);
  animation: slideIn 1s ease forwards;
  top: 0;
  display: flex;
  justify-content: space-between;
  top: 1.2rem;
  transition: 0.2s ease-in width;
  overflow: hidden;
  // Glassmorphism
  position: sticky;
  z-index: 99;
  background: var(--bg-secondary-opacity);
  border-radius: 16px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  @include style.tablet {
    display: flex;
    width: calc(50% - 2rem);
    margin-bottom: 2rem;
    margin-left: auto;
    top: 2rem;
    padding: 1rem;
  }
  &--open {
    width: 100%;
    @include style.tablet {
      width: calc(50% - 2rem);
    }
  }
  &__wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  &__list {
    display: flex;
    @include style.tablet {
      gap: 1rem;
    }
    span {
      display: none;
      @include style.tablet {
        display: block;
      }
    }
  }
  &__item {
    cursor: pointer;
    transition:
      0.2s ease-in text-shadow,
      0.2s ease-in background;
    border-radius: var(--border-radius-primary);
    &--active {
      background-color: hsla(279, 100%, 91.76%, 0.8);
      text-shadow: 0 0 1px var(--text-primary);
    }
    &:hover {
      text-shadow: 0 0 1px var(--text-primary);
    }
    @include style.tablet {
      width: max-content;
      padding: 0.6rem 1rem;
      i {
        display: none;
      }
    }
  }
  &__bars {
    @include style.tablet {
      display: none !important;
    }
  }
  a,
  button {
    width: 4.2rem;
    min-width: 4.2rem;
    height: 4.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @include style.tablet {
      width: max-content;
    }
  }
}
</style>
