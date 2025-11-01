<script setup></script>

<template>
  <section class="section">
    <h2 class="section__header">Projekty</h2>
    <div class="section__list">
      <div class="project --box">
        <div class="project__img">
          <img src="/public/assets/projects/project_1.png" alt="" />
        </div>
        <div class="project__content">
          <div class="project__title">Strona internetowa</div>
          <div class="project__box">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea unde praesentium
            odit veritatis at amet ipsum, facere eaque optio numquam aspernatur suscipit perferendis
            velit molestias magni, commodi, iusto rem?
          </div>
        </div>
      </div>
      <div class="project --dark --box">
        <div class="project__img">
          <img src="/public/assets/projects/project_1.png" alt="" />
        </div>
        <div class="project__content">
          <div class="project__title">Własna aplikacja</div>
          <div class="project__box">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea unde praesentium
            odit veritatis at amet ipsum, facere eaque optio numquam aspernatur suscipit perferendis
            velit molestias magni, commodi, iusto rem?
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  display: flex;
  flex-direction: column;
  // align-items: center;
  &__header {
    margin-bottom: 3rem;
  }
  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
}
.project {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  min-height: 40rem;
  &.--dark {
    background-color: #3a394b;
    color: #fff;
  }
  &__img {
    border-radius: var(--border-radius-primary);
    overflow: hidden;
    img {
      height: 100%;
      object-fit: cover;
    }
  }
  &__title {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }
}
</style>
