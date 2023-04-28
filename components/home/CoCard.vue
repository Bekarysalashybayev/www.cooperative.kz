<template>
  <div>
    <div class="co-card mb-40">
      <img :src="require(`@/assets/img/home/${props.image}`)" alt="">
      <div class="co-card-desc">
        <div class="title">
          {{props.title}}
        </div>
        <div class="text" v-html="props.text">
        </div>
        <nuxt-link :to="props.link" class="link">
          ПОДРОБНЕЕ
        </nuxt-link>
      </div>
    </div>
    <co-hr :color="props.hrColor"/>
  </div>
</template>

<script setup lang="ts">
import CoHr from "~/components/ui/CoHr.vue";

const props = defineProps<{
  title: string,
  text: string,
  image: string,
  link: string,
  hrColor?: string,
}>()
</script>

<style scoped lang="scss">
.co-card {
  display: flex;

  img {
    height: 206px;
  }

  .co-card-desc {
    margin-left: 2rem;

    .title {
      color: #333333;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    .text {
      font-size: 14px;
      color: #0c3c60;
    }

    .link {
      display: block;
      margin-top: 2rem;
      color: #000000;
      font-size: 16px;
      font-weight: bold;

      &:hover{
        opacity: .9;
      }
    }
  }
}
</style>
