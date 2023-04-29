<template>
  <div class="home">
    <div class="container">
      <div class="home__content">
        <div class="title">
          <button>
          ОРГАНИКАЛЫҚ  ҚАЛДЫҚТАРДЫ ӨҢДЕУ АРҚЫЛЫ <br>  ВЕРМИКОМПОСТ ӨНДІРУ
          </button>
          <div class="line">

          </div>
        </div>
        <div class="course-button">
          <button onclick="window.open('https://app.oqylyq.kz/','_blank')" type="button">
            КУРСҚА ҚАТЫСУ
          </button>
        </div>
        <div class="main-content">
          <div class="video-wrap">
            <div class="video-container">
              <iframe :src="require(`@/assets/img/obuchenie/load.mp4`)"></iframe>
            </div>
          </div>
          <div class="instr-txt">
            "Органикалық қалдықтарды өңдеу арқылы вермикомпост өндіру"
            <br>
            онлайн-курсына қатысу нұсқауы
          </div>
          <div class="video-wrap">
            <div class="video-container">
              <iframe :src="require(`@/assets/img/obuchenie/load.mp4`)"></iframe>
            </div>
          </div>
          <div class="instr-txt">
            <button>
              «Органикалық қалдықтарды өңдеу арқылы вермикомпост өндіру» оқыту бойынша
              <br>
              Жария келісімшарт
            </button>
          </div>
          <div class="content-modal">
            <div class="content-modal-title">

            </div>
            <div class="content-goal">
              <div class="content-modal-text-1">
                «Органикалық қалдықтарды өңдеу арқылы вермикомпост өндіру»
                <br>
                курс бағдарламасы
              </div>
              <div class="content-modal-text" >
                Мұғалімдер:
                <div class="li-class">
                <lI>
                  Асембеков Бакытжан Мырзанович
                </lI>
                <lI>
                  Айткулов  Темірхан  Яшаевич
                </lI>
                <lI>
                  Тулганбаев Пардабай Оразович
                </lI>
                <lI>
                  Машиков Қайрат Алтайұлы
                </lI>
                <lI>
                  Асамуратов Орал Бостанұлы
                </lI>
                <lI>
                  Асамуратова Гульзира Пайзыльдаевна
                </lI>
                </div>
              </div>

              <div class="content-modal-text-last">
                <li>1. Вермитехнология  саласы. Органикалық тыңайтқыштар және адам өмірдегі рөлі <span class="unbolded">(Асембеков Б.М).</span></li>
                  <li>2. Вермикомпост  сипаттамасы <span class="unbolded">(Асембеков Б.М).</span></li>
                  <li>3. Вермикомпост сипаттамасы  <span class="unbolded">(Тулганбаев П.О). </span></li>
                  <li>4. Бейімделген КҚШ  сипаттамасы <span class="unbolded">(Асамуратов О.Б). </span></li>
                  <li>5. Субстрат негіздері. Компост жасау технологиясы <span class="unbolded">(Асембеков Б.М).</span></li>
                  <li>6. Субстрат негіздері.  Компост жасау технологиясы <span class="unbolded">(Айткулов Т.Я). </span></li>
                  <li>7. Өндіріс орнын таңдау <span class="unbolded">(Тулганбаев П.О). </span></li>
                  <li>8. Жүйек жасау технологиясы және оның  күтімі <span class="unbolded">(Тулганбаев П.О).</span> </li>
                  <li>9. Жүйек жасау технологиясы және оның  күтімі <span class="unbolded">(Тулганбаев П.О). </span></li>
                  <li>10. Ж1. үйек жасау технологиясы және оның  күтімі <span class="unbolded">(Айткулов Т.Я). </span></li>
                  <li>11. Шылаушын енгізу тәсілі <span class="unbolded">(Асамуратова Г.П).</span> </li>
                  <li>12. Тірі биомасса сараптамасы. Бағыттары <span class="unbolded">(Айткулов Т.Я).</span></li>
                  <li>13. Вермикомпостан шылаушын ажырату тәсілдері <span class="unbolded">(Тулганбаев П.О). </span></li>
                  <li>14. Вермикомпостан шылаушын ажырату тәсілдері <span class="unbolded">(Айткулов Т.Я). </span></li>
                  <li>15. Вермикомпост әзірлеудің соңғы сатысы <span class="unbolded">(Тулганбаев П.О). </span></li>
                  <li>16. Өндіріске керекті техникалардың түрлері <span class="unbolded">(Асембеков Б.М). </span></li>
                  <li>17. Қазақстан вермифермерлерінің дамуындағы Вермифермерлер кооперативтерін дамыту комитетінің ролі <span class="unbolded">(Машиков Қ.А). </span></li>
                  <li>18. Қазақстан вермифермерлері жұмысы мен дамуындағы кооперативтің ролі <span class="unbolded">(Машиков Қ.А). </span></li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import CoTitle from "~/components/ui/CoTitle.vue";
</script>
<script lang="ts">
export default {
  head: {
    title: "ОБУЧЕНИЕ | Cooperative"
  }
}
</script>
<style scoped lang="scss">
.title {
  margin: 1rem auto 1rem auto;
  width: max-content;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  button{
    text-decoration: underline;
    color: #6ea4ca;
  }
  .line{
    height: 4px;
    width: 100%;
    background-color: #6ea4ca;
    margin-bottom: 10px;
    margin-top: 7px;
  }
}

.main-content {
  margin: 0 auto;
  max-width: 990px;
}
.course-button{
  margin: 0 auto;
  width: max-content;
  color: #0B2F5B;
  button{
    color: #39729B;
    font-weight: bold;
    text-decoration: underline;
  }
}
.video-wrap{
  margin: 1rem auto 1rem auto;
  width: max-content;
}
.video-container{
  iframe{
    width:680px;
    height:380px;
  }
}
.instr-txt{
  margin: 1rem auto 1rem auto;
  width: max-content;
  font-weight: bold;
  font-size: 14px;
  color: #0B2F5B;
  text-align: center;
  button{
    text-decoration: underline;
    color: #0B2F5B;
  }
}
.content-goal{
  width: 680px;
  margin: 0 auto;
  p{
    font-size: 11px;
    margin: 1rem 0 1rem 0;
  }
}
.goal-header{
  color: #0B2F5B;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 0.2rem;
}
.images {
  margin: 0 auto;
  max-width: 680px;

  img {
    margin: 2rem 0 2rem 0;
  }
}
.content-modal{
  border: 1px solid #39729B;
  background-color: #d1e0eb;
  margin-bottom: 2rem;
}
.content-modal-title{
  width: max-content;
  margin: 2rem auto 1.5rem auto;
  color: #0B2F5B;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
}
.content-modal-text{
  color: #147285;
  font-size: 14px;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 1rem;
  li{
    font-weight: normal;
    font-size: 12px;
  }
}
.li-class{
  margin-top: 0.7rem;
}
.content-modal-text-1{
  color: #0B2F5B;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
}
.content-modal-text-last{
  color: #0B2F5B;
  font-size: 13px;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 2rem;
  li{
    list-style: none;
    margin-bottom: 0.3rem;
  }
}
.unbolded{
  font-weight: normal;
}
</style>
