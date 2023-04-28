<template>
  <div class="contacts">
    <div class="container">
      <div class="title">
        <co-title title="КОНТАКТЫ" :large="true" :line="true"/>
      </div>
      <div class="content mb-4">
        <div class="mb-4">
          Обучающий центр вермифермеров QazAGO: 87010704470, 87017024470, 87277557171
        </div>
        <div class="mb-4">
          Сертификационный центр ЖКХ: +7 708 378 9908
        </div>
        <div class="mb-4">
          Учебный центр ЖКХ-ИНФО: +7 708 378 9908
        </div>
        <div class="mb-4">
          Сертификация Председателей кооперативов, бизнес-акселераторов, кооперативных агентов: + 7 777 170 7488
        </div>
        <div class="mb-4">
          Обучение кооперативному предпринимательству: + 7 777 170 7488
        </div>
        <div class="mb-4">
          Единый национальный центр кооперативных паев: + 7 777 170 7488
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import CoTitle from "~/components/ui/CoTitle.vue";
</script>

<style scoped lang="scss">
.contacts {
  color: #0C3C60;
  font-weight: bold;
  line-height: 1.3rem;

  .title {
    margin: 0 auto;
    width: max-content;
  }

  .content {
    padding: 2rem;
    background-color: #d1e0eb;
    border: 1px solid #6ea4ca;
  }
}
</style>
