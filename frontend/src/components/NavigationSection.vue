<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const navigation = ref(null)
const isOpen = ref(false)
const activeSection = ref(null)

const sections = [
  { id: 'offer', name: 'Oferta', icon: 'fa-regular fa-user' },
  { id: 'trust', name: 'Korzyści', icon: 'fa-solid fa-diagram-project' },
  { id: 'projects', name: 'Realizacje', icon: 'fa-solid fa-layer-group' },
  { id: 'contact', name: 'Kontakt', icon: 'fa-solid fa-envelope' },
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
        if (self.progress > 0) tl.play()
        else tl.reverse()
      },
    })

    if (window.scrollY > 50) tl.progress(1).pause()
    else tl.progress(0).pause()
  }
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

window.addEventListener('load', () => {
  ScrollTrigger.refresh()
})

const handleScroll = () => {
  const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10

  if (isBottom) {
    activeSection.value = 'contact'
    return
  }

  if (window.scrollY < 100) {
    activeSection.value = null
    return
  }

  const sectionsToCheck = sections
    .map((section) => document.getElementById(section.id))
    .filter(Boolean)

  for (const section of sectionsToCheck) {
    const top = section.offsetTop - 200
    const bottom = top + section.offsetHeight

    if (window.scrollY >= top && window.scrollY < bottom) {
      activeSection.value = section.id
      break
    }
  }
}
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

// KOLORY
const theme = ref('light')
const themeKey = 'theme'

const applyTheme = (value) => {
  document.documentElement.setAttribute('data-theme', value)
}

onMounted(() => {
  const savedTheme = localStorage.getItem(themeKey)

  if (savedTheme) {
    theme.value = savedTheme
    applyTheme(savedTheme)
    return
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
  theme.value = prefersDark.matches ? 'dark' : 'light'
  applyTheme(theme.value)

  prefersDark.addEventListener('change', (e) => {
    if (!localStorage.getItem(themeKey)) {
      theme.value = e.matches ? 'dark' : 'light'
      applyTheme(theme.value)
    }
  })
})

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  localStorage.setItem(themeKey, theme.value)
  applyTheme(theme.value)
}
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
    <button class="navigation__switch" @click="toggleTheme">
      <i v-if="theme === 'light'" class="fa-regular fa-sun"></i>
      <i v-else class="fa-regular fa-moon"></i>
    </button>
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
  position: sticky;
  z-index: 99;
  background: var(--bg-secondary-opacity);
  border-radius: 16px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  @include style.tablet {
    display: flex;
    width: 100%;
    margin-bottom: 2rem;
    margin-left: auto;
    top: 2rem;
    padding: 1rem;
  }
  @include style.laptop {
    width: calc(50% - 2rem);
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
    gap: 0.5rem;
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
    transition: 0.2s ease-in background;
    border-radius: var(--border-radius-primary);
    &:hover {
      background-color: var(--bg-primary);
    }
    &--active {
      background-color: var(--primary) !important;
      color: hsl(269, 84%, 95%);
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
  &__switch {
    transition: 0.2s ease-in color;
    &:hover {
      color: var(--primary);
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
