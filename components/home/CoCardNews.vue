<template>
  <div>
    <div class="co-card mb-40">
      <div class="img-div">
      <img :src="require(`@/assets/img/home/${props.image}`)" alt="">
      </div>
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
    <div v-if="props.line">
      <div class="line-yellow"></div>
    </div>
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
  line?: boolean | undefined,
}>()
</script>

<style scoped lang="scss">
.co-card {
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  img {
    width: 100%;
  }
  .img-div{
    width: 45%;
  }
  .co-card-desc {
    margin-left: 2rem;
    width: 60%;

    .title {
      color: #147285;
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 2.5rem;
    }

    .text {
      font-size: 13px;
      color: #0c3c60;
    }

    .link {
      display: block;
      margin-top: 2rem;
      color: #000000;
      font-size: 14px;
      font-weight: bold;
      line-height: 2em;

      &:hover{
        opacity: .9;
      }
    }
  }
}

.line-yellow{
  height: 4px;
  width: 7%;
  background-color: yellow;
  margin: 15px 10% 0 auto;

}
</style>
