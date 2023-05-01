<template>
  <div class="home">
    <div class="container">
      <div class="home__content">
        <div class="cards">
          <template v-for="(item, i) in items">
            <co-card
              class="mb-50"
              :key="i"
              :title="item.title"
              :text="item.text"
              :image="item.image"
              :hr-color="item.color"
              :link="item.link"/>
          </template>
        </div>
        <div class="documents mb-50">
          <co-legal-documents/>
        </div>
        <div class="documents mb-50">
          <co-certification/>
        </div>
        <div class="documents mb-50">
          <co-education/>
        </div>
        <div class="documents mb-50">
          <co-partners/>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import CoCard from "~/components/home/CoCard.vue";
import {IHomeItem} from "~/types/link.interface";
import CoLegalDocuments from "~/components/home/CoLegalDocuments.vue";
import CoCertification from "~/components/home/CoCertification.vue";
import CoEducation from "~/components/home/CoEducation.vue";
import CoPartners from "~/components/home/CoPartners.vue";

const items: IHomeItem[] = [
  {
    title: 'Что такое кооперативы?',
    text: `
          История возникновения кооперативов
          <br>
          Все самые значимые успехи человечества были достигнуты за счет объединения сил и интеллекта людей.
          <br>
          Кооперативное предприятие — это уже оформленная документально суть парадигмы человеческого благополучия:
          объединение сил, ресурсов и мозгов для достижения целей, безопасной, благополучной и наполненной смыслом
          жизни.`,
    image: 'item1.webp',
    link: '/',
  },
  {
    title: 'Круглый стол «Потребительская кооперация – механизм повышения благосостояния населения»',
    text: `5 апреля 2023 года USAID и СРО ОЮЛ «Национальная Ассоциация кооперативов и других
            форм экономических сообществ» Республики Казахстан был проведен Круглый стол
            «Потребительская кооперация – механизм повышения благосостояния населения».`,
    image: 'item2.webp',
    link: '/',
  },
  {
    title: 'Круглый стол «Потребительская кооперация – механизм повышения благосостояния населения»',
    text: `5 апреля 2023 года USAID и СРО ОЮЛ «Национальная Ассоциация кооперативов и других форм экономических
           сообществ» Республики Казахстан был проведен Круглый стол «Потребительская
           кооперация – механизм повышения благосостояния населения».`,
    image: 'item3.webp',
    link: '/',
    color: '#d4e4ef'
  }
]

</script>
<script lang="ts">
export default {
  head: {
    title: "СРО ОЮЛ НАК | Cooperative"
  }
}
</script>
<style scoped lang="scss">
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
</style>
