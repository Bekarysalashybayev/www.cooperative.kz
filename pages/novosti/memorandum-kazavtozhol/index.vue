<template>
  <div class="home">
    <div class="container">
      <div class="home__content">
        <div class="title" >
          АО «НК «ҚазАвтоЖол» и Национальная Ассоциация Кооперативов и
          других форм <br>экономических сообществ Республики Казахстан
          подписали соглашение о <br>сотрудничестве
        </div>
        <div class="text-main">
          16 марта 2021 года Председатель Правления АО «НК «ҚазАвтоЖол» Улан Алипов и Президент Национальной Ассоциации Кооперативов и других форм экономических сообществ Республики Казахстан Казыбек Шайх подписали Соглашение о сотрудничестве в развитии вдоль автомобильных дорог экономических сообществ в форме потребительских кооперативов и массового предпринимательства.
        </div>
        <div class="course-button">
          <p class="p-main">
            Стороны договорились о разработке совместных:
          </p>
          <p>
            - программ сотрудничества по развитию придорожного сервиса на республиканских дорогах экономическими сообществами;
          </p>
          <p>
            - проектов реализации государственного-частного партнерства (ГЧП) с экономическими сообществами жителей страны;
          </p>
          <p>
            - планов мероприятий по развитию коопераций на рынке битума.
          </p>
          <p>
            Сотрудничество обеспечит альтернативный вариант развития придорожной инфраструктуры и повышения благосостояния народа, путем активной вовлеченности населения с помощью кооперативов и других форм экономических сообществ.
          </p>
        </div>
        <div class="main-content">

          <div class="content-goal">
            <div class="images2">
              <div class="image2">
                <img :src="require(`@/assets/img/home/avto-memo.webp`)">
              </div>
            </div>
          </div>
          <div class="content-modal">
            <div class="content-goal">
              <div class="content-modal-text-1">
                По всему миру кооперативы насчитывают около 800 миллионов членов в более чем 100 странах, они обеспечивают 100 миллионов рабочих мест:
              </div>
              <div class="content-modal-text-last">
                <li>- в Канаде каждый третий гражданин – член кооператива. </li>
                <li>- во Франции кооперативы предоставляют 700.000 рабочих мест.</li>
                <li>- в Японии 91 процент фермеров организован в кооперативе.</li>
                <li>- в Кувейте 80 процентов розничной торговли – потребительские кооперативы.</li>
                <li>-в Боливии одна четверть национальных сбережений управляется кооперативами.</li>
                <li>Как показывает международный опыт, создание кооперативного предпринимательства вносит большой вклад в социально-экономическое развитие, снижение роста безработицы среди населения, и поддержание сбалансированного распределения благосостояния в обществе.</li>
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
  margin: 15px 0 10px 0;
  font-size: 19px;
}
.p-main{
  margin-bottom: 20px;
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

.content-modal-text-last{
  color: #147285;
  font-size: 10.5px;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 2rem;
  letter-spacing: 0.04em;
  li{
    font-weight: bold;
    list-style: none;
  }
}

.content-modal{
  border: 1px solid #39729B;
  background-color: #d1e0eb;
  margin-bottom: 2rem;
  padding: 15px;
  max-width: 100%;
}
.content-goal{
  margin: 0 auto;
  p{
    font-size: 11px;
    margin: 1rem 0 1rem 0;
  }
}
.content-modal-text-1{
  color: #0c3c60;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.5em;
}
.content-modal-text-last{
  color: #0B2F5B;
  font-size: 17.5px;
  margin-top: 1rem;
  margin-bottom: 2rem;
  letter-spacing: 0.03em;
  li{
    list-style: none;
    margin-bottom: 0.8rem;
  }
}
</style>
