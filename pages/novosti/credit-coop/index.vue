<template>
  <div class="home">
    <div class="container">
      <div class="home__content">
        <div class="title">
          <co-title title="Создан Комитет по развитию кредитных кооперативов и обществ взаимного страхования при
                    ОЮЛ Национальной ассоциации кооперативов и
                    других форм экономических сообществ Республики Казахстан"    :large="false"/>
        </div>
        <div>
          <div class="co-card mb-40">
            <div class="img-div">
              <img src="@/assets/img/home/person2.webp">
            </div>
            <div class="co-card-desc">
              <div class="text">
                21 июля 2022 года при Национальной ассоциации кооперативов и других форм экономических сообществ Республики Казахстан создан Комитет по развитию кредитных кооперативов и обществ взаимного страхования.

                Председателем Комитета назначен Каримсаков Мурат Ратович.
              </div>
              <div class="link" >
                <a href="#"> Положение о Комитете по развитию кредитных кооперативов и обществ взаимного страхования при Национальной ассоциации кооперативов и других форм экономических сообществ Республики Казахстан</a>
              </div>
              <div class="link">
                <a href="#"> Приказ о назначении Председателя Комитета по развитию кредитных кооперативов и обществ взаимного страхования при Национальной ассоциации кооперативов и других форм экономических сообществ Республики Казахстан </a>
              </div>
            </div>
          </div>
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
import CoTitle from "~/components/ui/CoTitle.vue";

</script>
<script lang="ts">
export default {
  head: {
    title: "New | Cooperative"
  }
}
</script>
<style scoped lang="scss">
.title{
  font-size: 20px;
}
.home {
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cards, .documents {
    width: 100%;
  }
}
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
      font-size: 26px;
      font-weight: bold;
      margin-bottom: 2.5rem;
    }

    .text {
      font-size: 20px;
      color: #0c3c60;
    }

    .link {
      display: block;
      margin-top: 2rem;
      color: #0c3c60;
      font-size: 14px;
      font-weight: bold;
      line-height: 1.1em;
      a{
        color: #0c3c60;
      }

      &:hover{
        opacity: .9;
      }
    }
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
  padding: 15px;
  margin: 0 auto;
  p{
    font-size: 11px;
    margin: 1rem 0 1rem 0;
  }
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
</style>
