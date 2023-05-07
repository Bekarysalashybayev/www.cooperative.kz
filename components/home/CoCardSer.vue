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
          <a href="https://app.oqylyq.kz/" target="_blank" style="color: #147285">Пройти сертификацию</a>
        </div>
          <div class="link2">
            <a href="https://reestr.kooperativ.kz/#/reestr" target="_blank" style="color: #147285">РЕЕСТР сертифицированных председателей кооперативов</a>
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
      color: #147285;
      font-size: 17px;
      font-weight: bold;
      margin-bottom: 1rem;
      letter-spacing: 0.03em;
    }

    .text {
      font-size: 13px;
      color: #147285;
      line-height: 1.5em;
    }

    .link {
      display: block;
      margin-top: 2rem;
      margin-bottom: 1rem;
      color: #147285;
      font-size: 14px;
      font-style: italic;
      text-decoration: underline;
      line-height: 1.5em;

      &:hover{
        opacity: .9;
      }
    }
    .link2 {
      color: #147285;
      font-size: 14px;
      font-weight: bold;
      text-decoration: underline;
      line-height: 1.5em;
    }
  }
}
</style>
