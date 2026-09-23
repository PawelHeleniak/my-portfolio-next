<script setup>
import PrivacyPolicy from '../components/PrivacyPolicy.vue'
import NavigationSection from '../components/NavigationSection.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<template>
  <main>
    <NavigationSection />
    <PrivacyPolicy />
    <FooterSection />
  </main>
</template>

<style lang="scss" scoped>
@use '../style.scss' as style;
main {
  padding: 1.2rem;
  max-width: 1440px;
  margin: 0 auto;
  @include style.tablet {
    padding: 2.4rem;
  }
  @include style.laptop {
    padding: 4rem;
  }
}
</style>
