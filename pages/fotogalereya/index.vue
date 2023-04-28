<template>
  <div class="gallery">
    <div class="container">
      <div class="title">
        <co-title title="ФОТОГАЛЕРЕЯ" :large="true" :line="true"/>
      </div>
      <div class="images">
        <div class="image" v-for="i in 13" :key="i">
          <img :src="require(`@/assets/img/gallery/g${i}.webp`)" :alt="`gallery-${i}`">
        </div>
      </div>
      <div class="images-flex">
        <div class="image" v-for="i in 4" :key="i">
          <img :src="require(`@/assets/img/gallery/g${13 + i}.webp`)" :alt="`gallery-${12 + i}`">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import CoTitle from "~/components/ui/CoTitle.vue";
</script>
<script lang="ts">
export default {
  head: {
    title: "ФОТОГАЛЕРЕЯ | Cooperative"
  }
}
</script>
<style scoped lang="scss">
.gallery {
  .title {
    margin: 0 auto;
    width: max-content;
  }

  .images {
    margin: 0 auto;
    max-width: 796px;

    img {
      margin-bottom: 1rem;
    }
  }

  .images-flex {
    margin: 0 auto;
    max-width: 796px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .image {
      margin-bottom: 1rem;
      flex: 0 0 calc(50% - .5rem) !important;

      img {
        width: 100% !important;
      }
    }
  }
}
</style>
