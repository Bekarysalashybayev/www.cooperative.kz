<template>
  <div class="management">
    <div class="container">
      <div class="item first">
        <img src="@/assets/img/management/Kazybek.webp" alt="picture">
        <div class="item-detail">
          <div class="item-title">
            Казыбек Шайх
          </div>
          <div class="item-label">
            Президент
          </div>
          <div class="item-description">
            СРО ОЮЛ "Национальная ассоциация кооперативов и других форм экономических сообществ Республики Казахстан"
          </div>
        </div>
      </div>
      <div class="subtitle">
        КОМИТЕТЫ
      </div>
      <div class="item">
        <img src="@/assets/img/management/Arkadiy.webp" alt="picture">
        <div class="item-detail">
          <div class="item-title">
            Рубцов Аркадий Александрович
          </div>
          <div class="item-label">
            Председатель
          </div>
          <div class="item-description">
            Комитета  по жилищной реформе и развитию отношений субъектов рынка в сфере жилищно-коммунального хозяйства
          </div>
        </div>
      </div>
      <a href="" class="doc mb-2">Приказ о назначении</a>
      <a href="" class="doc mb-50">Положение о деятельности комитета</a>
      <div class="item">
        <img src="@/assets/img/management/Murat.webp" alt="picture">
        <div class="item-detail">
          <div class="item-title">
            Каримсаков Мурат Ратович
          </div>
          <div class="item-label">
            Председатель
          </div>
          <div class="item-description">
            Комитета  по развитию кредитных кооперативов и обществ взаимного страхования
          </div>
        </div>
      </div>
      <a href="" class="doc mb-2">Приказ о назначении</a>
      <a href="" class="doc mb-50">Положение о деятельности комитета</a>
      <div class="item">
        <img src="@/assets/img/management/Alma.webp" alt="picture">
        <div class="item-detail">
          <div class="item-title">
            Архабаева Алма Нураловна
          </div>
          <div class="item-label">
            Председатель
          </div>
          <div class="item-description">
            Комитета  по развитию MLM индустрии
          </div>
        </div>
      </div>
      <a href="" class="doc mb-2">Приказ о назначении</a>
      <a href="" class="doc mb-50">Положение о деятельности комитета</a>
      <div class="item">
        <img src="@/assets/img/management/Bakhytzhan.webp" alt="picture">
        <div class="item-detail">
          <div class="item-title">
            Асембеков Бакытжан Мырзанович
          </div>
          <div class="item-label">
            Председатель
          </div>
          <div class="item-description">
            Комитета  по развитию кооперативов вермифермеров
          </div>
        </div>
      </div>
      <a href="" class="doc mb-2">Приказ о назначении</a>
      <a href="" class="doc mb-50">Положение о деятельности комитета</a>
      <div class="item">
        <img src="@/assets/img/management/Dosmukhamed.webp" alt="picture">
        <div class="item-detail">
          <div class="item-title">
            Досмұхамет Нұр-Ахмет
          </div>
          <div class="item-label">
            Председатель
          </div>
          <div class="item-description">
            Комитета  по развитию сельскохозяйственных кооперативов и продовольственной безопасности
          </div>
        </div>
      </div>
      <a href="" class="doc mb-2">Приказ о назначении</a>
      <a href="" class="doc mb-50">Положение о деятельности комитета</a>
      <div class="item">
        <img src="@/assets/img/management/Dosmukhamed.webp" alt="picture">
        <div class="item-detail">
          <div class="item-title">
            Айгуль Акчалова
          </div>
          <div class="item-label">
            Председатель
          </div>
          <div class="item-description">
            Комитета  по развитию кооперативов кулмакшеров
          </div>
        </div>
      </div>
      <a href="" class="doc mb-2">Приказ о назначении</a>
      <a href="" class="doc mb-50">Положение о деятельности комитета</a>
      <div class="item">
        <img src="@/assets/img/management/Dina.webp" alt="picture">
        <div class="item-detail">
          <div class="item-title">
            Дина Сыргабаева
          </div>
          <div class="item-label">
            Председатель
          </div>
          <div class="item-description">
            Комитета  по развитию женской кооперации
          </div>
        </div>
      </div>
      <a href="" class="doc mb-2">Приказ о назначении</a>
      <a href="" class="doc mb-50">Положение о деятельности комитета</a>
      <div class="item">
        <img src="@/assets/img/management/Timur.webp" alt="picture">
        <div class="item-detail">
          <div class="item-title">
            Дина Сыргабаева
          </div>
          <div class="item-label">
            Председатель
          </div>
          <div class="item-description">
            Комитета  по развитию кооперативов карбоновых ферм
          </div>
        </div>
      </div>
      <a href="" class="doc mb-2">Приказ о назначении</a>
      <a href="" class="doc mb-50">Положение о деятельности комитета</a>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
  max-width: 864px;
}

.subtitle {
  color: #39729b;
  font-size: 31px;
  line-height: 1;
  font-weight: bold;
  margin-bottom: 50px;
  text-align: center;
}

.mb-50{
  margin-bottom: 50px;
}

.doc{
  display: block;
  color: #0C3C60;
  font-size: 15px;
  text-decoration: underline!important;
}

.management {
  .item {
    display: flex;
    background-color: #39729b;
    color: #d1e0eb;
    font-size: 18px;
    line-height: 1.3;
    font-weight: bold;
    margin-bottom: 40px;
    position: relative;

    &.first{
      background-color: #0c3c60;
      padding-bottom: 30px;

      .item-title{
        color: #FFFFFF!important;
      }
      .item-detail{
        padding: 20px 20px 20px 30px!important;
      }
      &:after{
        display: none!important;
      }
    }

    &:after{
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 12px solid transparent;
      border-right: 12px solid transparent;
      border-top: 12px solid #39729b;
    }

    &-detail {
      display: flex;
      flex-direction: column;
      padding: 20px 20px 30px 30px;
    }

    &-title {
      font-size: 24px;
    }

    &-label {
      font-weight: normal;
      margin-top: 50px;
    }

    &-description {
      margin-top: 5px;
    }
  }
}
</style>
