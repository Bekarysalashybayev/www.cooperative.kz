<template>
  <div class="wrapper">
    <co-header/>
    <div class="wrapper__content">
      <div class="container">
        <div class="mt-2 mb-50">
          <img src="../assets/img/home/main-1.webp" alt="">
        </div>
      </div>
      <nuxt/>
    </div>
    <co-footer/>
  </div>
</template>

<script lang="ts" setup>
import CoHeader from "~/components/ui/header/CoHeader.vue";
import CoFooter from "~/components/ui/footer/CoFooter.vue";

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
</style>
