<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const project_2 = ref()
// const project_3 = ref()
onMounted(() => {
  gsap.to(project_2.value, {
    scale: '1',
    scrollTrigger: {
      trigger: project_2.value,
      start: 'bottom center',
      end: '+=100%',
      scrub: true,
    },
  })
})
</script>
<template>
  <section class="section --projects" id="projects">
    <h2 class="section__header">Moje projekty</h2>
    <div class="section__wrapper">
      <a class="project project--box --box" href="https://repevo.pl/" target="_blank">
        <picture class="project__img">
          <source media="(min-width:768px)" srcset="/public/assets/projects/project_1.webp" />
          <img
            class="project__img"
            src="/public/assets/projects/project_1-mobile.webp"
            alt="RepEvo - Aplikacja webowa"
          />
        </picture>
        <div class="project__content">
          <div class="project__top">
            <div class="project__name">
              <h3>RepEvo</h3>
              <div class="project__arrow">
                <span>Sprawdź</span><i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
            <span class="project__desc">
              Aplikacja webowa do planowania i zapisywania treningów. Umożliwia tworzenie planów
              treningowych, zapisywanie sesji oraz analizowanie postępów w czasie.
            </span>
          </div>
          <div class="project__badges">
            <h4 class="project__title">Technologie</h4>
            <div class="project__badge project__badge--angular">Angular</div>
            <div class="project__badge project__badge--ts">TypeScript</div>
            <div class="project__badge project__badge--express">Express</div>
            <div class="project__badge project__badge--mongodb">MongoDB</div>
          </div>
          <div class="project__bottom">
            <h4 class="project__functionality">Funkcjonalności</h4>
            <ul class="project__ul">
              <li class="project__li">tworzenie planów treningowych</li>
              <li class="project__li">historia treningów</li>
              <li class="project__li">statystyki miesięczne</li>
            </ul>
          </div>
        </div>
      </a>
      <a class="project --box project_2 --disabled" ref="project_2">
        <!-- <img
          class="project__img"
          src="/public/assets/projects/project_2.png"
          alt="Projekt w trakcie"
        /> -->
        <div class="project__img in-progress">
          <div class="in-progress__box">
            <h4>Flow Stats</h4>
            <span>Projekt w trakcie budowy</span>
            <span class="in-progress__secondary"
              >Pierwszy publiczny widok: <strong>wkrótce</strong></span
            >
          </div>
        </div>
        <div class="project__content">
          <div class="project__name">
            <h3>
              <div>Flow Stats</div>
              <div>Sprawdź</div>
            </h3>
            <!-- <i class="fa-solid fa-arrow-right"></i> -->
          </div>

          <span class="project__desc">
            Flow Stats to interaktywny dashboard zbudowany w Vue, stworzony do przejrzystej
            prezentacji danych biznesowych. Korzysta z ApexCharts i GSAP, dzięki czemu łączy
            czytelne wykresy z płynnymi animacjami. Projekt pokazuje pracę z dynamicznymi
            komponentami, stanem aplikacji i interfejsem zbliżonym do systemów analitycznych.
          </span>
        </div>
      </a>
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
  }
}
.project {
  width: 100%;
  height: 60rem;
  z-index: 3;
  position: relative;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: ROW;
  gap: 1.5rem;
  padding: 1.5rem;
  transition: 0.2s ease-in box-shadow;
  @include style.tablet {
    padding: 2rem;
    gap: 2.4rem;
    height: 67rem;
  }
  &:not(.--disabled) {
    &:hover {
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      .project__arrow {
        i {
          transform: translateX(0.5rem);
        }
        span {
          &::before {
            opacity: 1;
          }
        }
      }
    }
  }
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
  &.project_2 {
    position: sticky;
    z-index: 2;
    margin-top: 2.4rem;
    bottom: 16vh;
    scale: 0.95;
  }
  &__img,
  &__content {
    flex: 1;
  }
  &__img {
    border-radius: var(--border-radius-primary);
    height: 100%;
    overflow: hidden;
    object-fit: cover;
    width: 100%;
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
        margin-bottom: 1.2rem;
        background: -webkit-linear-gradient(270deg, var(--accent) 0%, var(--primary) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
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
  &__name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.2rem;
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
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    @include style.mobile {
      padding: 2rem;
    }
  }

  // ====Badges====
  &__badges {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  &__title {
    width: 100%;
  }
  &__badge {
    padding: 4px 10px;
    font-size: 14px;
    border-radius: 20px;
    border: 2px solid;
    font-weight: 600;
    letter-spacing: 0.8px;
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
  }

  // ====List====
  &__functionality {
    margin-bottom: 1rem;
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
.--projects {
  h2 {
    display: flex;
    justify-content: center;
  }
}
</style>
