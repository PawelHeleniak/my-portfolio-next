<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
// import { ArrowUpRight, Menu, Moon, Sun, X } from '@lucide/vue'
import { ArrowUpRight, Menu, X } from '@lucide/vue'

const route = useRoute()
const isOpen = ref(false)
const menuButton = ref(null)
const activeSection = ref(null)
const theme = ref('light')
const themeKey = 'theme'
let colorSchemeQuery
let desktopQuery

const sections = [
  { id: 'offer', name: 'Oferta' },
  { id: 'process', name: 'Współpraca' },
  { id: 'projects', name: 'Realizacje' },
  { id: 'contact', name: 'Kontakt' },
]

const closeMenu = () => {
  isOpen.value = false
}

const handleEscape = (event) => {
  if (event.key === 'Escape' && isOpen.value) {
    closeMenu()
    menuButton.value?.focus()
  }
}

const handleFocusOut = (event) => {
  if (!event.currentTarget.contains(event.relatedTarget)) closeMenu()
}

const handleScroll = () => {
  if (route.path !== '/' || window.scrollY < 100) {
    activeSection.value = null
    return
  }
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
    activeSection.value = 'contact'
    return
  }
  activeSection.value = null
  for (const section of sections) {
    const element = document.getElementById(section.id)
    if (element && element.getBoundingClientRect().top <= 160) activeSection.value = section.id
  }
}

const applyTheme = (value) => {
  theme.value = value
  document.documentElement.setAttribute('data-theme', value)
}

const handleColorSchemeChange = (event) => {
  if (!localStorage.getItem(themeKey)) applyTheme(event.matches ? 'dark' : 'light')
}

const toggleTheme = () => {
  const value = theme.value === 'dark' ? 'light' : 'dark'
  localStorage.setItem(themeKey, value)
  applyTheme(value)
}

watch(
  () => route.fullPath,
  () => {
    closeMenu()
    handleScroll()
  },
)

onMounted(() => {
  colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)')
  desktopQuery = window.matchMedia('(min-width: 1024px)')
  const savedTheme = localStorage.getItem(themeKey)
  applyTheme(
    savedTheme === 'light' || savedTheme === 'dark'
      ? savedTheme
      : colorSchemeQuery.matches
        ? 'dark'
        : 'light',
  )
  colorSchemeQuery.addEventListener('change', handleColorSchemeChange)
  desktopQuery.addEventListener('change', closeMenu)
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onBeforeUnmount(() => {
  colorSchemeQuery?.removeEventListener('change', handleColorSchemeChange)
  desktopQuery?.removeEventListener('change', closeMenu)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    class="navigation"
    :class="{ 'navigation--open': isOpen }"
    aria-label="Nawigacja główna"
    @keydown="handleEscape"
    @focusout="handleFocusOut"
  >
    <!-- <RouterLink class="navigation__brand" to="/" @click="closeMenu"> -->
    <span class="navigation__brand-content">
      <span class="navigation__name">Paweł Heleniak</span>
      <span class="navigation__role">Web Developer</span>
    </span>
    <!-- </RouterLink> -->
    <ul id="navigation-links" class="navigation__list">
      <li v-for="section in sections" :key="section.id" class="navigation__entry">
        <RouterLink
          class="navigation__link"
          :class="{ 'navigation__link--active': activeSection === section.id }"
          :to="{ path: '/', hash: `#${section.id}` }"
          :aria-current="activeSection === section.id ? 'location' : undefined"
          @click="closeMenu"
        >
          {{ section.name }}
        </RouterLink>
      </li>
    </ul>
    <div class="navigation__actions">
      <!-- <button
        class="navigation__switch"
        type="button"
        :aria-label="theme === 'light' ? 'Włącz ciemny motyw' : 'Włącz jasny motyw'"
        @click="toggleTheme"
      >
        <Moon v-if="theme === 'light'" :size="20" aria-hidden="true" />
        <Sun v-else :size="20" aria-hidden="true" />
      </button> -->
      <RouterLink class="navigation__cta" to="/#contact" @click="closeMenu">
        Porozmawiajmy <ArrowUpRight :size="18" aria-hidden="true" />
      </RouterLink>
      <button
        ref="menuButton"
        class="navigation__toggle"
        type="button"
        :aria-expanded="isOpen"
        aria-controls="navigation-links"
        :aria-label="isOpen ? 'Zamknij menu' : 'Otwórz menu'"
        @click="isOpen = !isOpen"
      >
        <X v-if="isOpen" :size="22" aria-hidden="true" />
        <Menu v-else :size="22" aria-hidden="true" />
      </button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use '../style.scss' as style;

.navigation {
  position: sticky;
  top: 1.2rem;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0 1rem;
  width: 100%;
  max-width: 130rem;
  margin-inline: auto;
  padding: 1rem 1.2rem 1rem 2.4rem;
  border: 1px solid color-mix(in srgb, var(--border-color) 55%, transparent);
  border-radius: calc(var(--border-radius-primary) * 2);
  background-color: var(--bg-secondary-opacity);
  backdrop-filter: blur(16px);
  opacity: 0;
  transform: translateY(1rem);
  animation: slideIn 1s 0.2s ease forwards;

  &__brand {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    flex-shrink: 0;
  }

  &__monogram {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: var(--border-radius-secondary);
    background-color: var(--primary);
    color: var(--white);
    font-size: var(--font-size-m);
    font-weight: 700;
    letter-spacing: -0.08em;

    span {
      opacity: 0.6;
    }
  }

  &__brand-content {
    display: flex;
    flex-direction: column;
  }

  &__name {
    font-size: var(--font-size-sm);
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  &__role {
    font-size: var(--font-size-xs);
    color: var(--text-secondary);
  }

  &__list {
    display: none;
    position: absolute;
    top: calc(100% + 0.8rem);
    inset-inline: 0;
    max-height: calc(100dvh - 12rem);
    overflow-y: auto;
    padding: 1rem;
    gap: 0.4rem;
    border: 1px solid var(--border-color);
    border-radius: calc(var(--border-radius-primary) * 2);
    background-color: var(--bg-secondary);
  }

  &--open &__list {
    display: flex;
    flex-direction: column;
    animation: navigation-menu-on 200ms ease-out;
  }

  @media (prefers-reduced-motion: reduce) {
    &--open &__list {
      animation: none;
    }
  }

  &__link {
    display: flex;
    align-items: center;
    min-height: 4.4rem;
    padding: 0.8rem 1.2rem;
    border-radius: var(--border-radius-round);
    font-size: var(--font-size-sm);
    // font-weight: 600;
    transition:
      color 0.2s ease,
      background-color 0.2s ease;

    &:hover,
    &--active,
    &--active:visited {
      color: var(--primary);
      background-color: color-mix(in srgb, var(--primary) 8%, transparent);
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  &__switch,
  &__toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 4.4rem;
    height: 4.4rem;
    border-radius: var(--border-radius-round);

    &:hover {
      color: var(--primary);
      background-color: var(--bg-primary);
    }
  }

  &__cta {
    display: none;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    min-height: 4.8rem;
    padding: 1.2rem 2rem;
    border-radius: var(--border-radius-round);
    background-color: var(--primary);
    color: var(--white);
    font-size: var(--font-size-sm);
    font-weight: 600;
    transition: background-color 0.2s ease;

    &:visited {
      color: var(--white);
    }
    &:hover {
      background-color: var(--secondary);
    }
  }

  &__brand:focus-visible,
  &__link:focus-visible,
  &__switch:focus-visible,
  &__toggle:focus-visible,
  &__cta:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 3px;
  }

  @include style.tablet {
    top: 2rem;
    padding: 1rem 1rem 1rem 2rem;

    &__name {
      font-size: var(--font-size-base);
    }
    &__actions {
      gap: 0.8rem;
    }
    &__cta {
      display: inline-flex;
    }
  }

  @include style.laptop {
    flex-wrap: nowrap;
    border-radius: var(--border-radius-round);

    &__list,
    &--open &__list {
      display: flex;
      position: static;
      flex-direction: row;
      max-height: none;
      overflow: visible;
      gap: 0.4rem;
      padding: 0;
      border: 0;
      background-color: transparent;
      box-shadow: none;
      animation: none;
    }

    &__toggle {
      display: none;
    }
  }
}

@keyframes navigation-menu-on {
  from {
    opacity: 0;
    transform: translateY(-0.6rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
