<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const isOpen = ref(false)
const activeSection = ref(null)

const sections = [
  { id: 'offer', name: 'Oferta', icon: 'fa-regular fa-user' },
  { id: 'process', name: 'Współpraca', icon: 'fa-solid fa-diagram-project' },
  { id: 'projects', name: 'Realizacje', icon: 'fa-solid fa-layer-group' },
  { id: 'contact', name: 'Kontakt', icon: 'fa-solid fa-envelope' },
]

const toggleNav = () => {
  isOpen.value = !isOpen.value
}

const scrollToSection = async (id) => {
  if (route.path !== '/') {
    await router.push(`/#${id}`)
    return
  }

  const el = document.getElementById(id)

  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(async () => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
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
    <div class="navigation__brand-content">
      <span class="navigation__name">Paweł Heleniak</span>
      <span class="navigation__role">Web Developer</span>
    </div>
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
    <div class="navigation__actions">
      <button class="navigation__switch" @click="toggleTheme">
        <i v-if="theme === 'light'" class="fa-regular fa-sun"></i>
        <i v-else class="fa-regular fa-moon"></i>
      </button>
      <a class="navigation__cta" @click="scrollToSection('contact')">Zapytaj o projekty</a>
    </div>
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
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  @include style.tablet {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 2rem;
    top: 2rem;
    padding: 1rem 2rem;
  }
  @include style.laptop {
    width: 100%;
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
    @include style.tablet {
      width: max-content;
      padding: 0.6rem 1rem;
      i {
        display: none;
      }
    }
  }
  &__item {
    cursor: pointer;
    position: relative;
    border-radius: var(--border-radius-primary);
    &::after {
      content: '';
      position: absolute;
      left: 1.2rem;
      right: 1.2rem;
      bottom: 0.4rem;

      height: 2px;
      background-color: var(--primary);

      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
    }

    &:hover {
      &::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
    &--active {
      color: var(--primary) !important;
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
  // Lewa
  &__brand-content {
    display: none;
    @include style.tablet {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      justify-content: center;
    }
  }
  &__name {
    font-size: var(--font-size-l);
  }
  &__role {
    font-size: var(--font-size-s);
    color: var(--text-secondary);
  }
  // Prawa
  &__actions {
    display: flex;
    gap: 1rem;
  }
}
.page-privacy-policy {
  .navigation {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 30px;
    margin-right: auto;
    &__item--active {
      background-color: inherit !important;
      color: inherit;
      &:hover {
        background-color: var(--bg-primary) !important;
      }
    }
  }
}
</style>
