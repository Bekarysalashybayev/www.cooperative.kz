<template>
  <div class="wrapper">
    <co-header/>
    <div class="wrapper__content">
      <div class="container">
        <div class="mt-2 mb-50">
          <img src="../assets/img/home/main-1.webp" alt="">
        </div>
      </div>
      <transition name="home" duration="3000">
        <nuxt/>
      </transition>
    </div>
    <co-footer/>
  </div>
</template>

<script>
import CoHeader from "~/components/ui/header/CoHeader.vue";
import CoFooter from "~/components/ui/footer/CoFooter.vue";

export default {
  name: 'default',
  components: {CoHeader, CoFooter},
  watch: {
    $route() {
      window.scrollTo(0, 0)
    },
  },
}

</script>
<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__content {
    flex-grow: 1;
  }
}

.home-enter-active, .home-leave-active {
  transition: opacity 3s;
}

.home-enter, .home-leave-active {
  opacity: 0;
}
</style>
