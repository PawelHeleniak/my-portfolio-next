<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from '@lucide/vue'
import repevoImage from '../assets/projects/project_1.webp'
import repevoMobileImage from '../assets/projects/project_1-mobile.webp'
import wpmotoImage from '../assets/projects/project_3.webp'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 'wpmoto',
    title: 'WPMoto',
    eyebrow: 'Strona internetowa / projekt demonstracyjny',
    description:
      'Strona dla warsztatu samochodowego z jasną ofertą, czytelną nawigacją i wygodnym kontaktem. Przykład kompletnej realizacji od układu po wdrożenie.',
    url: 'https://wpmoto.pawelheleniak.pl/',
    githubUrl: 'https://github.com/PawelHeleniak/gym-sync',
    image: wpmotoImage,
    mobileImage: null,
    imageAlt: 'WPMoto - projekt strony dla warsztatu samochodowego',
    technologies: [
      { name: 'WordPress', modifier: 'wordpress' },
      { name: 'Elementor', modifier: 'elementor' },
      { name: 'PHP', modifier: 'php' },
      { name: 'CSS', modifier: 'css' },
    ],
    features: [
      'responsywny landing page dla warsztatu',
      'sekcje usług, o firmie i kontaktu',
      'nawigacja typu one-page',
      'łatwa edycja treści w WordPressie',
    ],
  },
  {
    id: 'repevo',
    title: 'RepEvo',
    eyebrow: 'Aplikacja webowa / projekt autorski',
    description:
      'Aplikacja webowa do planowania i zapisywania treningów. Umożliwia tworzenie planów treningowych, zapisywanie sesji oraz analizowanie postępów w czasie. Projekt jest aktywnie rozwijany.',
    url: 'https://repevo.pl/',
    githubUrl: null,
    image: repevoImage,
    mobileImage: repevoMobileImage,
    imageAlt: 'RepEvo - Aplikacja webowa',
    technologies: [
      { name: 'Angular', modifier: 'angular' },
      { name: 'TypeScript', modifier: 'ts' },
      { name: 'Express', modifier: 'express' },
      { name: 'MongoDB', modifier: 'mongodb' },
    ],
    features: ['tworzenie planów treningowych', 'historia treningów', 'statystyki miesięczne'],
  },
]

const projectsSection = ref(null)
let media
let disposed = false

onMounted(() => {
  media = gsap.matchMedia()
  media.add(
    '(prefers-reduced-motion: no-preference)',
    () => {
      const projectCards = projectsSection.value.querySelectorAll('.project')
      projectCards.forEach((project) => {
        gsap.fromTo(
          project,
          { opacity: 0, y: '1rem' },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.inOut',
            clearProps: 'opacity,transform',
            scrollTrigger: {
              trigger: project,
              start: 'top 85%',
              once: true,
            },
          },
        )
      })
    },
    projectsSection.value,
  )

  document.fonts.ready.then(() => {
    if (!disposed) ScrollTrigger.refresh()
  })
})

onBeforeUnmount(() => {
  disposed = true
  media?.revert()
})
</script>
<template>
  <section ref="projectsSection" class="section --projects" id="projects">
    <div class="section__header">
      <span class="section__label">REALIZACJE</span>
      <h2 class="section__title">Autorskie projekty</h2>
    </div>
    <div class="section__wrapper">
      <article v-for="project in projects" :key="project.id" class="project ui-card">
        <div class="project__content">
          <div class="project__info">
            <div class="project__top">
              <span class="project__eyebrow">{{ project.eyebrow }}</span>
              <div class="project__name">
                <h3>{{ project.title }}</h3>
              </div>
              <span class="project__desc">
                {{ project.description }}
              </span>
            </div>
            <div class="project__badges">
              <div
                v-for="technology in project.technologies"
                :key="technology.modifier"
                class="project__badge"
                :class="`project__badge--${technology.modifier}`"
              >
                {{ technology.name }}
              </div>
            </div>
            <div class="project__bottom">
              <!-- <h4 class="project__functionality">Funkcjonalności</h4> -->
              <ul class="project__ul">
                <li v-for="feature in project.features" :key="feature" class="project__li">
                  {{ feature }}
                </li>
              </ul>
            </div>
            <div class="project__btns ui-buttons">
              <a class="ui-button" :href="project.url" target="_blank" rel="noopener noreferrer">
                Zobacz projekt <ArrowRight :size="18" aria-hidden="true" />
              </a>
              <a
                v-if="project.githubUrl"
                class="ui-button ui-button--secondary"
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <picture v-if="project.mobileImage" class="project__img">
          <source media="(min-width:1024px)" :srcset="project.image" />
          <img class="project__img" :src="project.mobileImage" :alt="project.imageAlt" />
        </picture>
        <img v-else class="project__img" :src="project.image" :alt="project.imageAlt" />
      </article>
      <div class="dot-blur dot-blur--project"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../style.scss' as style;

.section {
  display: flex;
  flex-direction: column;
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    gap: 4.8rem;
  }
}
.project {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  z-index: 3;
  position: relative;
  gap: 1.5rem;
  padding: 1rem 1rem 1.5rem 1rem;

  @include style.mobile {
    padding: 1.5rem;
  }
  @include style.laptop {
    padding: 2rem;
    gap: 2.4rem;
    flex-direction: row-reverse;
    max-width: 100%;
    // aspect-ratio: 18 / 9;
    display: grid;
    // grid-template-columns: 1.12fr 0.88fr;
    grid-template-columns: 0.88fr 1.12fr;
    gap: 60px;
    align-items: center;
    min-height: 540px;
  }
  // &:not(.--disabled) {
  //   &:hover {
  //     box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  //     .project__arrow {
  //       i {
  //         transform: translateX(0.5rem);
  //       }
  //       span {
  //         &::before {
  //           opacity: 1;
  //         }
  //       }
  //     }
  //   }
  // }
  &__arrow {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      font-size: var(--font-size-m);
      position: relative;
      &::before {
        position: absolute;
        content: '';
        height: 1px;
        width: 100%;
        bottom: -1px;
        left: 0;
        background-color: var(--text-secondary);
        opacity: 0;
        transition: 0.2s ease-in opacity;
      }
    }
  }
  // &__img,
  // &__content {
  //   flex: 1;
  // }
  &__img {
    border-radius: var(--border-radius-primary);
    height: 100%;
    overflow: hidden;
    object-fit: cover;
    width: 100%;
    flex: 0 0 calc(55% - 2rem);
    @include style.laptop {
      aspect-ratio: initial;
      max-height: 65rem;
    }
  }
  .in-progress {
    font-size: 2.4rem;
    background-color: var(--bg-primary);
    border-radius: var(--border-radius-primary);
    padding: 2rem;
    width: 100%;
    &__box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      h4 {
        font-size: 4.2rem;
        margin-bottom: 0.6rem;
        background: -webkit-linear-gradient(270deg, var(--accent) 0%, var(--primary) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        @include style.tablet {
          margin-bottom: 1.2rem;
        }
      }
      span {
        font-size: var(--font-size-l);
        &.in-progress__secondary {
          margin-top: 0.8rem;
          color: var(--text-secondary);
          font-size: var(--font-size-m);
        }
      }
    }
  }
  &__eyebrow {
    display: block;
    margin-bottom: 0.6rem;
    font-size: var(--font-size-s);
    color: var(--primary);
  }
  &__name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.6rem;
    @include style.tablet {
      margin-bottom: 1.2rem;
    }
    i {
      transition: 0.2s ease-in transform;
    }
    h3 {
      overflow: hidden;
      position: relative;
      min-width: 10rem;
      div {
        transition: 0.2s ease-out transform;
        &:last-child {
          position: absolute;
        }
      }
    }
  }
  &__desc {
    color: var(--text-secondary);
  }
  &__content {
    // background-color: var(--bg-primary);
    border-radius: var(--border-radius-primary);
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    height: 100%;
    @include style.tablet {
      padding: 1rem;
      gap: 2rem;
    }
    @include style.desktop {
      padding: 2rem;
      gap: 3rem;
    }
  }
  // &__number {
  //   font-size: 0;
  //   position: relative;
  //   &::after {
  //     content: attr(data-number);
  //     font-size: var(--font-size-xxl);
  //     color: var(--text-secondary);
  //     position: absolute;
  //     top: 0;
  //     left: 0;
  //     @include style.laptop {
  //       font-size: var(--font-size-xxxl);
  //     }
  //   }
  // }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @include style.tablet {
      gap: 2rem;
    }
  }
  &__github {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    padding: 0.5rem;
    font-size: var(--font-size-l);
    opacity: 0.7;
    transition: 0.2s ease-in opacity;
    @include style.laptop {
      font-size: var(--font-size-base);
    }
    &:hover {
      opacity: 1;
    }

    span {
      display: none;
      @include style.laptop {
        display: block;
      }
    }
  }
  // ====Badges====
  &__badges {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
    order: -1;
    @include style.laptop {
      order: 0;
      gap: 1rem;
    }
  }
  &__title {
    width: 100%;
    display: none;
    @include style.laptop {
      display: block;
    }
  }
  &__badge {
    padding: 0.3rem 0.6rem;
    font-size: var(--font-size-xs);
    border-radius: 20px;
    border: 2px solid;
    font-weight: 600;
    letter-spacing: 0.8px;
    @include style.laptop {
      font-size: var(--font-size-s);
      order: 0;
      padding: 0.4rem 1rem;
    }
    &--angular {
      color: #dd0031;
      border-color: #dd0031;
      background: rgba(221, 0, 49, 0.1);
    }

    &--ts {
      color: #3178c6;
      border-color: #3178c6;
      background: rgba(49, 120, 198, 0.1);
    }

    &--express {
      color: #555;
      border-color: #555;
      background: rgba(68, 68, 68, 0.08);
    }

    &--mongodb {
      color: #47a248;
      border-color: #47a248;
      background: rgba(71, 162, 72, 0.1);
    }
    &--vue {
      color: #42b883;
      border-color: #42b883;
      background: rgba(66, 184, 131, 0.1);
    }

    &--apex {
      color: #775dd0;
      border-color: #775dd0;
      background: rgba(119, 93, 208, 0.1);
    }

    &--gsap {
      color: #88ce02;
      border-color: #88ce02;
      background: rgba(136, 206, 2, 0.1);
    }

    &--wordpress {
      color: #2f8fbd;
      border-color: #2f8fbd;
      background: rgba(47, 143, 189, 0.1);
    }

    &--elementor {
      color: #b52a63;
      border-color: #b52a63;
      background: rgba(181, 42, 99, 0.1);
    }

    &--php {
      color: #8d91c7;
      border-color: #8d91c7;
      background: rgba(141, 145, 199, 0.1);
    }

    &--css {
      color: #3f6df0;
      border-color: #3f6df0;
      background: rgba(63, 109, 240, 0.1);
    }
  }

  // ====List====
  &__functionality {
    margin-bottom: 0.5rem;
    @include style.tablet {
      margin-bottom: 1rem;
    }
  }
  &__li {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.2rem;
    color: var(--text-secondary);

    &:last-child {
      margin-bottom: 0;
    }
    &::before {
      content: '';
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 25rem;
      background-color: var(--text-secondary);
      position: relative;
      display: block;
    }
  }
}
// .--projects {
//   h2 {
//     display: flex;
//     justify-content: center;
//   }
// }
</style>
