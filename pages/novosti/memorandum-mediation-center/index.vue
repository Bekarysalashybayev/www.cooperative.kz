<template>
  <div class="home">
    <div class="container">
      <div class="home__content">
        <div class="title" >
          Чек-лист соответствия кооперативов требованиям СРО ОЮЛ НАК для противодействия <br>трансформации их в
          финансовые пирамидыЧек-лист соответствия кооперативов требованиям <br>СРО ОЮЛ НАК для противодействия трансформации
          их в финансовые пирамиды
        </div>
        <div class="line">

        </div>
      </div>
      <div class="main-content">
        <div class="instr-txt">
          20 июля 2021 года Казыбек Шайх - Президент ОЮЛ "Национальная ассоциация кооперативов и других форм экономических сообществ РК"  подписал Меморандум о сотрудничестве с Президентом ОО "Центр Медиации и Миротворчества "Альтернатива" Данилиной Анной Викторовной.
        </div>
        <div class="course-button">
          <a href="/media/9 Меморандум Медиация.PDF" target="_blank">
            Текст Меморандума читать
          </a>
        </div>
        <div class="content-modal">
          <div class="content-goal">
            <div class="content-modal-text-1">
              Миссия ОЮЛ СРО «Национальной ассоциации кооперативов и других
              <br>
              форм экономических сообществ Республики Казахстан»:
            </div>
            <div class="content-modal-text-last">
              <li>1. Создание условий для развития кооперативов и других форм экономических сообществ в качестве эффективного механизма обеспечения повышения благосостояния людей, за счет их самоорганизации, самоуправления, сотрудничества и взаимопомощи. </li>
              <li>2. Разработка и внедрение стандартов, правил, процедур взаимодействия с государственными органами и органами саморегулирования деятельности кооперативов, обеспечивающую защиту прав и имущества пайщиков кооператива, развития кооперативного движения и борьбу с финансовыми пирамидами. </li>
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
  font-size: 20px;
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

.main-content {
  margin: 0 auto;
  max-width: 990px;
}
.course-button{
  margin: 15px 0 40px 0;
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
.instr-txt{
  margin: 1rem auto 1rem auto;
  width: 100%;
  font-weight: bold;
  font-size: 17px;
  color: #0c3c60;
  text-align: center;
  button{
    text-decoration: underline;
    color: #147285;
  }
}
.content-goal{
  padding: 15px;
  margin: 0 auto;
  width: 811px;
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
  padding: 15px;
}
.content-modal-title{
  width: max-content;
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
  letter-spacing: 0.03em;
  li{
    font-weight: normal;
    font-size: 12px;
  }
}
.li-class{
  margin-top: 0.7rem;
}
.content-modal-text-1{
  color: #0c3c60;
  margin: 0 0 20px 0;
  font-size: 19px;
  font-weight: bold;
  text-align: center;
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
.unbolded{
  font-weight: normal;
}
</style>
