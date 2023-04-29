<template>
  <div class="partners">
    <co-hr/>
    <co-title class="mt-lg-5" title="ПАРТНЕРЫ" :large="true"/>
    <div>
      <co-carousel-partners/>
    </div>
  </div>
</template>

<script setup lang="ts">
import CoHr from "~/components/ui/CoHr.vue";
import CoTitle from "~/components/ui/CoTitle.vue";
import CoCarouselPartners from "~/components/home/CoCarouselPartners.vue";
</script>

<style scoped lang="scss">
.partners {

}
</style>
