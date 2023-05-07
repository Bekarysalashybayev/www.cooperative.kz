<template>
  <div class="home">
    <div class="container">
      <div class="home__content">
        <div class="title" >
          Национальная ассоциация кооперативов и
          других форм экономических сообществ РК<br>
          получила статус Саморегулируемой организации
        </div>
        <div class="line">

        </div>
      </div>
      <div class="main-content">
        <div class="instr-txt">
          21 апреля 2021 года ОЮЛ "Национальная ассоциация кооперативов и других форм экономических сообществ РК" получила статус Саморегулируемой организации и вошла в Реестр СРО Министерства индустрии и инфраструктурного развития Республики Казахстан.
        </div>
        <div class="course-button">
          <button onclick="window.open('#','_blank')" type="button">
            Подробнее
          </button>
        </div>
        <div class="course-button">
          <button onclick="window.open('#','_blank')" type="button">
            Подробнее
          </button>
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
  margin: 0 0 25px 15px;
  width: max-content;
  color: #147285;
  font-size: 15px;
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
.instr-txt{
  margin: 1rem auto 1rem auto;
  width: max-content;
  font-weight: bold;
  font-size: 17px;
  color: #0c3c60;
  text-align: center;
  max-width: 960px;
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
