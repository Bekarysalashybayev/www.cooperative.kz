<template>
  <div class="home">
    <div class="container">
      <div class="home__content">
        <div class="title" >
          Подписан Меморандум с АО Казахстанская Жилищная Компания для снижения<br> стоимости и повышения доступности жилья для населения Казахстана
        </div>
        <div class="text-main">
          6 сентября 2021 года Казыбек Шайх - Президент ОЮЛ "Национальная ассоциация кооперативов и других форм экономических сообществ РК"  подписал Меморандум об объединении усилий в целях увеличения объемов строительства жилья и удешевлении стоимости при его реализации населению с Председателем Правления АО "Казахстанская Жилищная Компания" Исаевым Рустамом Муратовичем.
        </div>
        <div class="course-button">
          <a href="#">
          Текст Меморандума читать
          </a>
        </div>
        <div class="main-content">

          <div class="content-goal">
          <div class="images2">
            <div class="image2">
              <img :src="require(`@/assets/img/home/memor.webp`)">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script lang="ts" setup>
</script>
<script lang="ts">
export default {
  head: {
    title: "НОВОСТИ | Cooperative"
  }
}
</script>
<style scoped lang="scss">
.title {
  margin: 1rem auto 1rem auto;
  width: max-content;
  font-size: 24px;
  color: #147285;
  text-align: center;
  font-weight: bold;
  button{
    text-decoration: underline;
    color: #147285;
  }
  .line{
    height: 4px;
    width: 100%;
    background-color: #6ea4ca;
    margin-bottom: 10px;
    margin-top: 7px;
  }
}
.text-main{
  font-size: 18px;
  font-weight: bold;
  margin: 0 auto;
}
video{
  width: 100%;
  height: auto;
}
.main-content {
  margin: 0 auto;
}
.course-button{
  margin: 15px 0 5px 0;
  width: 600px;
  color: #147285;
  font-size: 16px;
  text-decoration: underline;
  a{
    color: #147285;
    text-decoration: underline;
  }
}
.video-wrap{
  margin: 1rem auto 1rem auto;
  width: max-content;
}
.video-container{
  max-width: 680px;
  max-height:380px;
  video{
    width: 680px;
    height: 380px;
    background-color: black;
  }
}
.content-modal{
  padding: 35px 0 30px 0;
}
.instr-txt{
  margin: 1rem auto 1rem auto;
  width: max-content;
  font-weight: bold;
  font-size: 13px;
  color: #147285;
  text-align: center;
  letter-spacing: 0.03em;
}
.content-goal{
  margin: 0 auto;
  p{
    font-size: 10px;
    margin: 1rem 0 1rem 0;
    color: #147285;
    letter-spacing: 0.03em;
  }
}
.goal-header{
  color: #147285;
  font-size: 11px;
  font-weight: bold;
  margin-bottom: 0.2rem;
  letter-spacing: 0.03em;
  font-style: italic;
}
.images {
  margin: 0 auto;
  max-width: 680px;

  img {
    margin: 2rem 0 2rem 0;
  }
}
.images2{
  margin: 0 auto;
  img {
    margin: 2rem 0 2rem 0;
    width: 100%;
  }
}
.image2{
  width: 100%;
}
.content-modal{
  border: 1px solid #39729B;
  background-color: #d1e0eb;
}
.content-modal-title{
  width: max-content;
  margin: 0 auto;
  color: #147285;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.03em;
  padding: 0 0 20px 0;
}
.content-modal-text{
  color: #147285;
  font-size: 10.5px;
  font-weight: bold;
  margin-top: 1rem;
  letter-spacing: 0.03em;
  li{
    font-weight: normal;
    list-style: none;
  }
}
.content-modal-text-fisrt{
  color: #147285;
  font-size: 10.5px;
  font-weight: bold;
  margin-top: 1rem;
  letter-spacing: 0.03em;
  li{
    font-weight: normal;
  }
}
.content-modal-teor-text{
  color: #147285;
  font-size: 10.7px;
  font-weight: normal;
  margin-top: 1rem;
  letter-spacing: 0.03em;
}
.content-modal-text-1{
  color: #147285;
  font-size: 10px;
  font-weight: bold;
  margin-bottom: 1rem;
  letter-spacing: 0.03em;
  font-style: italic;
  li{
    font-weight: normal;
  }
}
.content-modal-teor-text-1-first{
  color: #147285;
  font-size: 11.5px;
  font-weight: bold;
  letter-spacing: 0.03em;
  font-style: italic;
}
.content-modal-teor-text-1{
  color: #147285;
  font-size: 11.5px;
  font-weight: bold;
  margin-bottom: 1rem;
  margin-top: 1.5rem;
  letter-spacing: 0.03em;
}
.content-modal-text-last{
  color: #147285;
  font-size: 10.5px;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 2rem;
  letter-spacing: 0.04em;
  li{
    font-weight: normal;
    list-style: none;
  }
}
</style>
