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
      <a
        class="project --box"
        href="https://github.com/PawelHeleniak/gym-sync/tree/develop/gym-sync-frontend"
      >
        <img
          class="project__img"
          src="/public/assets/projects/project_1.webp"
          alt="GymSync - Aplikacja webowa"
        />
        <div class="project__content">
          <div class="project__name">
            <h3>
              <div>GymSync</div>
              <div>Sprawdź</div>
            </h3>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
          <span class="project__desc">
            Aplikacja webowa umożliwiająca tworzenie i zarządzanie planami treningowymi,
            rejestrowanie sesji treningowych oraz generowanie raportów. Frontend napisany w Angular
            20, backend w Express.js z MongoDB. Projekt rozwijany początkowo prywatnie, następnie
            jako praca inżynierska, nadal aktywnie rozwijany.
          </span>
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
  max-width: 80rem;
  height: 63rem;
  z-index: 3;
  position: relative;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 2rem;
  transition: 0.2s ease-in box-shadow;
  &:not(.--disabled) {
    &:hover {
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      .project__name {
        i {
          transform: translateX(0.5rem);
        }
        h3 {
          div {
            transform: translateY(-100%);
          }
        }
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
  &__img {
    border-radius: var(--border-radius-primary);
    max-height: 362rem;
    height: 100%;
    overflow: hidden;
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
    background-color: var(--bg-primary);
    border-radius: var(--border-radius-primary);
    padding: 2rem;
  }
}
.--projects {
  h2 {
    display: flex;
    justify-content: center;
  }
}
</style>
