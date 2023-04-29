<template>
  <div>
    <div class="co-card mb-40">
      <div class="img-div">
      <img :src="require(`@/assets/img/home/${props.image}`)" alt="">
      </div>
      <div class="co-card-desc">
        <div>
        <div class="title">
          {{props.title}}
        </div>
        <div class="text" v-html="props.text">
        </div>
        <div class="link">
          <a href="#" style="color: #0C3C60">Пройти сертификацию</a>
        </div>
          <div class="link2">
            <a href="#" style="color: red">РЕЕСТР сертифицированных председателей кооперативов</a>
          </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  title: string,
  text: string,
  image: string,
  link: string,
  link2: string,
  hrColor?: string,
}>()
</script>

<style scoped lang="scss">
.co-card {
  display: flex;
  justify-content: space-between;

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
      color: #333333;
      font-size: 28px;
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
      margin-bottom: 1rem;
      color: #000000;
      font-size: 15px;
      font-style: italic;
      text-decoration: underline;

      &:hover{
        opacity: .9;
      }
    }
    .link2 {
      color: red;
      font-size: 15px;
      font-weight: bold;
      text-decoration: underline;
    }
  }
}
</style>
