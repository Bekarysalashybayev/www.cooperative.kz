<template>
  <div class="home">
    <div class="container">
      <div class="home__content">
        <div class="title">
          <co-title title="ОБУЧЕНИЕ" :large="true" :line="true"/>
        </div>
        <div class="main-content">
          <div class="korp">
            <div class="image">
              <img src="@/assets/img/home/corp.webp">
            </div>
            <div class="button-pos">
              <button>
                Онлайн-курс
              </button>
            </div>
          </div>
            <div class="uprav">
              <div class="image">
                <img src="@/assets/img/home/uprav.webp">
              </div>
              <div class="button-pos">
                <button>
                  Онлайн-курс
                </button>
              </div>
            </div>
            <div class="vermi">
              <div class="image">
                <img src="@/assets/img/home/verm.webp">
              </div>
              <div class="button-pos-3">
                <button>
                  Онлайн-курс
                </button>
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

  .main-content {
    margin: 0 auto;
    max-width: 796px;


    img {
      margin-bottom: 1rem;
    }
    div{
      margin-bottom: 3rem;
    }
  }
  .korp{
    position: relative;
    width: 100%;
  }
  .uprav{
    position: relative;
    width: 100%;
  }
  .vermi{
    position: relative;
    width: 100%;
  }
  .korp{
    position: relative;
    width: 100%;
  }
  .uprav{
    position: relative;
    width: 100%;
  }
  .vermi{
    position: relative;
    width: 100%;
  }
  .button-pos {
    position: absolute;
    top: 70%;
    left: 20%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    color: #0B2F5B;
    font-size: 16px;
    padding: 12px 24px;
    border: 1px solid #0B2F5B;
    cursor: pointer;
    border-radius: 5px;
    button{
      color: #0B2F5B;
    }
  }
  .button-pos-3 {
    position: absolute;
    top: 70%;
    left: 20%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    color: white;
    font-size: 16px;
    padding: 12px 24px;
    border: 1px solid #3f7652;
    cursor: pointer;
    border-radius: 5px;
    background-color: #3f7652;
    button{
      color: white;
    }
  }
    .image {
      margin-bottom: 1rem;
      flex: 0 0 calc(50% - .5rem) !important;

      img {
        width: 100% !important;
      }
  }
</style>
