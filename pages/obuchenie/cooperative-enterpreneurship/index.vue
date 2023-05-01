<template>
  <div class="home">
    <div class="container">
      <div class="home__content">
        <div class="title">
          <co-title title="КООПЕРАТИВНОЕ ПРЕДПРИНИМАТЕЛЬСТВО" :line="true"/>
        </div>
        <div class="course-button">
          <button onclick="window.open('https://app.oqylyq.kz/','_blank')" type="button">
            ПРОЙТИ КУРС
          </button>
        </div>
        <div class="main-content">
          <div class="video-wrap">
            <div class="video-container">
              <video controls>  <source src="/media/predprinimatelstvo3.mp4" type="video/mp4">
                Your browser does not support HTML video.</video>
            </div>
          </div>
          <div class="instr-txt">
            Инструкция по прохождению онлайн-курса
            <br>
            <br>
            "Кооперативное предпринимательство"
          </div>
          <div class="video-wrap">
            <div class="video-container">
              <video controls>  <source src="/media/predprinimatelstvo1.mp4" type="video/mp4">
                Your browser does not support HTML video.</video>
            </div>
          </div>
          <div class="video-wrap">
            <div class="video-container">
              <video controls>  <source src="/media/predprinimatelstvo2.mp4" type="video/mp4">
                Your browser does not support HTML video.</video>
            </div>
          </div>
          <div class="instr-txt">
            Типовая программа
            <br>
            краткосрочных курсов по подготовке специалистов
            <br>
            по кооперативному предпринимательству
          </div>
          <div class="content-goal">
            <div class="goal-header">
              Цель программы:
            </div>
            <p>
              Подготовка качественных специалистов в соответствии с требованиями Центра сертификации специалистов
              «Национальной ассоциации кооперативов и других форм экономических сообществ Республики Казахстан»
              для утверждения их на следующих специальностях:
            </p>
            <div class="goal-header">
              1.  Председатель кооператива
            </div>
            <div class="goal-header">
              2.  Кооперативный агент
            </div>
            <div class="goal-header">
              3.  Кооперативный бизнес-акселератор
            </div>
            <div class="goal-header">
              4.  Сертифицированный поставщик
            </div>
          </div>
          <div class="images">
            <div class="image">
              <img :src="require(`@/assets/img/obuchenie/img.webp`)">
            </div>
          </div>
          <div class="content-modal">
            <div class="content-modal-title">
              Типовая программа курса
            </div>
            <div class="content-goal">
              <div class="content-modal-text-1">
                Теоретический модуль:
              </div>
              <div class="content-modal-text" >
                Введение в кооперативное предпринимательство и шеринг экономику.
              </div>
              <div class="content-modal-text-fisrt" >
                Перспективы развития кооперативного предпринимательства:
                <li>
                  для развития благосостояния общества Республики Казахстан;
                </li>
                <li>
                  для личного благосостояния участника кооперативного предпринимательства;
                </li>
                <li>
                  карьера в системе кооперативного предпринимательства.
                </li>
              </div>
              <div class="content-modal-text">
                Виды кооперативов и других форм экономических сообществ.
                <li>
                  Правовое обеспечение работы кооперативов
                </li>
                <li>
                  Кооперативное законодательство Республики Казахстан.
                </li>
                <li>
                  «Национальная ассоциация кооперативов и других форм экономических сообществ РК» – организация саморегуляции <br>кооперативов и других форм экономических сообществ РК.
                </li>
              </div>
              <div class="content-modal-text">
                Процедура организации кооперативов.
                <li>
                  Инициирование кооперативов.
                </li>
                <li>
                  Проведение учредительного собрания.
                </li>
                <li>
                  Подготовка Устава кооператива в соответствии с рекомендацией «Национальной ассоциации кооперативов и других форм <br>экономических сообществ РК».
                </li>
                <li>
                  Регистрация кооператива.
                </li>
                <li>
                  Система управления кооперативами.
                </li>
                <li>
                  Деятельность ревизионной комиссии и кооперативный аудит.
                </li>
                <li>
                  Закрытие кооперативов.
                </li>
              </div>
              <div class="content-modal-text">
                Система закупа для кооперативов.
                <li>
                  Создание закупочного предложения.
                </li>
                <li>
                  Кооперативный закуп для понижения цены.
                </li>
                <li>
                  Обеспечение прозрачности и подотчетности закупа для членов кооператива.
                </li>
                <li>
                  Сертифицированные поставщики.
                </li>
                <li>
                  Правила разрешения споров между членами кооператива и арбитраж.
                </li>
              </div>
              <div class="content-modal-text">
                Организация работы по привлечению пайщиков.
                <li>
                  Организация работы с кооперативными агентами.
                </li>
                <li>
                  Разработка бизнес-плана кооперативного проекта.
                </li>
                <li>
                  Определение первоначальной стоимости пая.
                </li>
                <li>
                  Процедура продажи, приобретения и перепродажи паев.
                </li>
              </div>
              <div class="content-modal-text">
                Организация роад-шоу кооперативного проекта.
                <li>
                  Подготовка презентации кооперативного проекта.
                </li>
                <li>
                  Привлечение людей на презентацию.
                </li>
                <li>
                  Работа через SММ и МММ.
                </li>
                <li>
                  Работа через рекомендации.
                </li>
                <li>
                  Работа с базами данных подписчиков «Национальной ассоциации кооперативов и других форм экономических сообществ РК».
                </li>
                <li>
                  Правила и приемы проведения эффективной презентации.
                </li>
                <li>
                  Работа с возражениями.
                </li>
              </div>
              <div class="content-modal-text-last">
                <li>
                  Фиксация результатов презентации (подписчик, покупатель пая, рекомендация).
                </li>
                <li>
                  Правила прохождения практического модуля обучения и экзамена по краткосрочному курсу для получения аккредитации в
                  <br>
                  качестве специалиста по кооперативному предпринимательству в «Национальной ассоциации кооперативов и других форм
                  <br>
                  экономических сообществ РК».
                </li>
              </div>
            </div>
          </div>
          <div class="images2">
            <div class="image2">
              <img :src="require(`@/assets/img/obuchenie/img2.webp`)">
            </div>
          </div>
          <div class="content-modal">
            <div class="content-goal">
              <div class="content-modal-teor-text-1-first">
                Практический модуль
              </div>
              <div class="content-modal-teor-text" >
                Уровень сложности     Содержание     KPI
              </div>
              <div class="content-modal-teor-text-1">
                «Личный»
              </div>
              <div class="content-modal-teor-text" >
                Самостоятельное повторение курса. Получение письменной консультации от преподавателей, на основе письменно <br>составленных участником курса вопросов.
              </div>
              <div class="content-modal-teor-text" >
                KPI: Тезисы проведения презентации по вовлечению населения в кооперативное предпринимательство.<br>
                План мероприятий по приглашению людей на презентацию.<br>
                Составление ожидаемых FAQ.
              </div>
              <div class="content-modal-teor-text-1">
                «Единомышленники»
              </div>
              <div class="content-modal-teor-text" >
                Проведение пробных презентаций по вовлечению населения в кооперативное предпринимательство перед <br>
                однокурсниками. Данный уровень проводится до тех пор, пока каждый участник курса не проведет самостоятельную <br>
                презентацию перед группой из сокурсников и не получит их одобрение.
              </div>
              <div class="content-modal-teor-text" >
                KPI: Самостоятельная разработка презентаций с адаптацией к региону. Составленные группой тезисы проведения <br>
                презентации по вовлечению населения в кооперативное предпринимательство.<br>
                План мероприятий по приглашению людей на презентацию. Составление ожидаемых FAQ.
              </div>
              <div class="content-modal-teor-text-1">
                «Близкие»
              </div>
              <div class="content-modal-teor-text" >
                Проведение пробных презентаций по вовлечению населения в кооперативное предпринимательство перед близкими <br>
                родственниками. Количество презентаций не ограничено.
              </div>
              <div class="content-modal-teor-text" >
                KPI: Составление корректировок в разработанную для своего региона презентацию и в составленные группой тезисы <br>
                проведения презентации по вовлечению населения в кооперативное предпринимательство, в план мероприятий по <br>
                приглашению людей на презентацию. Составление ожидаемых FAQ.
              </div>
              <div class="content-modal-teor-text-1">
                «Знакомые»
              </div>
              <div class="content-modal-teor-text" >
                Проведение пробных презентаций по вовлечению населения в кооперативное предпринимательство перед знакомыми, <br>
                соседями. Количество презентаций не ограничено.
              </div>
              <div class="content-modal-teor-text" >
                KPI: Составление корректировок в составленные группой тезисы проведения презентации по вовлечению населения в <br>
                кооперативное предпринимательство, в план мероприятий по приглашению людей на презентацию.  Составление <br>
                ожидаемых FAQ.  Формирование списка приглашенных на презентацию следующего уровня сложности.
              </div>
              <div class="content-modal-teor-text-1">
                «Коллективная работа»
              </div>
              <div class="content-modal-teor-text" >
                Проведение пробных презентаций по вовлечению населения в кооперативное предпринимательство перед людьми,<br>
                приглашенными в соответствии с планом мероприятий по приглашению людей на презентацию.
              </div>
              <div class="content-modal-teor-text" >
                На данном уровне необходимо отработать коллективную работу по подготовке и проведению презентаций:
              </div>
              <div class="content-modal-teor-text" >
                <li>
                  Приглашение людей на презентацию (через социальные сети, обзвон, агит- контакты).
                </li>
                <li>
                  Поддержка презентации из зала.
                </li>
                <li>
                  Фиксация результатов презентации.
                </li>
              </div>
              <div class="content-modal-teor-text" >
                Данный уровень проводиться до тех пор, пока каждый участник курса не проведет самостоятельную презентацию с группой<br>
                поддержки из сокурсников.
              </div>
              <div class="content-modal-teor-text" >
                KPI: Коллективное взаимодействие и взаимопомощь выпускников курса при проведении презентации.<br>
                Составление корректировок в составленные группой тезисы проведения презентации по вовлечению населения в<br>
                кооперативное предпринимательство, в план мероприятий по приглашению людей на презентацию. Составление <br>
                ожидаемых FAQ. Формирование списка приглашенных на презентацию следующего уровня сложности.
              </div>
              <div class="content-modal-teor-text-1">
                «Выход в свет»
              </div>
              <div class="content-modal-teor-text" >
                Проведение пробных презентаций по вовлечению населения в кооперативное предпринимательство перед людьми, <br>
                приглашенными в соответствии с планом мероприятий по приглашению людей на презентацию, подготовленную каждым <br>
                курсантом самостоятельно. Допускается участие сокурсников только в качестве наблюдателей.
              </div>
              <div class="content-modal-teor-text" >
                KPI: Презентация проводится для группы не менее 50 человек. Количество людей, оформивших подписку на получение <br>
                информации по кооперативным проектам, зарегистрированным в «Национальной ассоциации кооперативов и других форм <br>
                экономических сообществ РК» должно быть не менее 15 % от числа присутствующих в зале.
              </div>
              <div class="content-modal-teor-text-1">
                «Экзамен»
              </div>
              <div class="content-modal-teor-text" >
                Проведение пробных презентаций по вовлечению населения в кооперативное предпринимательство с прямым<br>
                вещанием в социальные сети.
              </div>
              <div class="content-modal-teor-text" >
                Экзаменационная комиссия производит анализ проведения презентации дистанционно через социальные сети и может<br>
                принять следующие решения:
                <li>
                  Кандидат аккредитован и получит сертификат.
                </li>
                <li>
                  Необходимо проведение повторного экзамена (с обязательным указанием ошибок в протоколе).
                </li>
                <li>
                  Кандидат не аккредитован. За неисполнение сроков и мероприятий практического модуля.
                </li>
              </div>
              <div class="content-modal-teor-text" >
                По окончанию экзамена составляется протокол и высылается учащемуся и в «Национальную ассоциацию кооперативов и<br>
                других форм экономических сообществ РК».    Презентация проводиться для группы не менее 50 человек.<br>
                Количество лайков в социальных сетях должно быть не менее 100.<br>
                Количество людей, оформивших подписку на получение информации по кооперативным проектам, зарегистрированным в <br>
                «Национальной ассоциации кооперативов и других форм экономических сообществ РК» должно быть не менее 15% от<br>
                числа присутствующих в зале.
              </div>
              <div class="content-modal-teor-text-1">
                «Экзамен»
              </div>
              <div class="content-modal-teor-text" >
                После окончания практического модуля и сдачи экзамена у Сертифицированного в "Национальной Ассоциации<br>
                Кооперативов и других форм экономических сообществ" Кооперативного бизнес-акселератора выпускник курса получает<br>
                Свидетельство об окончании курсов для предъявления в Сертификационный Центр для сдачи экзамена в виде 3-х<br>
                ситуационных задач для получения Сертификата по указанной в целях курса специализаций.<br>
                числа присутствующих в зале.
              </div>
            </div>
          </div>
          <div class="images">
            <div class="image" v-for="i in 3" :key="i">
              <img :src="require(`@/assets/img/obuchenie/img${2+i}.webp`)" :alt="`obuchenie-${2+i}`">
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
  margin: 0 auto;
  width: max-content;
}
video{
  width: 100%;
  height: auto;
}
.main-content {
  margin: 0 auto;
  max-width: 990px;
}
.course-button{
  margin: 0 auto;
  width: max-content;
  color: #147285;
  button{
    color: #147285;
    font-weight: bold;
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
  width: 680px;
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
