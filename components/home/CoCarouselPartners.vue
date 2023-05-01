<template>
  <div class="partners">
    <div class="container">
      <div class="partners__items">
        <div class="item">
          <div class="w-100">
            <ssr-carousel show-arrows show-dots loop :autoplay-delay="3">
              <div class="bi-card">
                <div class="bi-card-item">
                  <div class="el">
                    <a href="#">
                      Единый Национальный Реестр
                    </a>
                    <a href="#">
                      Кооперативных Паев
                    </a>
                  </div>
                </div>
              </div>
              <div class="bi-card">
                <div class="bi-card-item">
                  <div class="el">
                    <a href="https://gkh.kz/" target="_blank">Сертификационный Центр ЖКХ</a>
                  </div>
                </div>
              </div>
              <div class="bi-card">
                <div class="bi-card-item">
                  <div class="el">
                    <a href="#" class="text">QazAGO</a>
                  </div>
                </div>
              </div>
              <template #back-arrow>
                <div class="left icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <polygon points="12 17.414 3.293 8.707 4.707 7.293 12 14.586 19.293 7.293 20.707 8.707 12 17.414"/>
                  </svg>
                </div>
              </template>
              <template #next-arrow>
                <div class="right icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <polygon points="12 17.414 3.293 8.707 4.707 7.293 12 14.586 19.293 7.293 20.707 8.707 12 17.414"/>
                  </svg>
                </div>
              </template>
            </ssr-carousel>
          </div>
        </div>
        <div class="item">
          <div class="w-100">
            <ssr-carousel show-arrows show-dots loop :autoplay-delay="3">
              <div class="bi-card">
                <div class="bi-card-item">
                  <div class="el">
                    <a href="#" class="text">QazAGO</a>
                  </div>
                </div>
              </div>
              <div class="bi-card">
                <div class="bi-card-item">
                  <div class="el">
                    <a href="#">
                      Единый Национальный Реестр
                    </a>
                    <a href="#">
                      Кооперативных Паев
                    </a>
                  </div>
                </div>
              </div>
              <div class="bi-card">
                <div class="bi-card-item">
                  <div class="el">
                    <a href="https://gkh.kz/" target="_blank">Сертификационный Центр ЖКХ</a>
                  </div>
                </div>
              </div>
              <template #back-arrow>
                <div class="left icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <polygon points="12 17.414 3.293 8.707 4.707 7.293 12 14.586 19.293 7.293 20.707 8.707 12 17.414"/>
                  </svg>
                </div>
              </template>
              <template #next-arrow>
                <div class="right icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <polygon points="12 17.414 3.293 8.707 4.707 7.293 12 14.586 19.293 7.293 20.707 8.707 12 17.414"/>
                  </svg>
                </div>
              </template>
            </ssr-carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SsrCarousel from 'vue-ssr-carousel'
// import ssrCarouselCss from 'vue-ssr-carousel/index.css'
export default {
  name: "CoCarouselPartners",
  components: {
    SsrCarousel
  },
  data() {
    return {
      slide: 0,
    }
  }

}
</script>

<style scoped lang="scss">
.partners {
  &__items {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .item {
      max-width: 450px;
      flex: 0 0 calc(50% - 15px);
      height: 380px;

      &::v-deep {
        .ssr-carousel-dots {
          margin-top: -35px !important;
          position: relative;
          z-index: 9;
        }
      }
    }
  }
}

.icon {
  fill: #a2a2a2;

  &.left {
    svg {
      transform: rotateZ(90deg);
    }
  }

  &.right {
    svg {
      transform: rotateZ(-90deg);
    }
  }
}

.bi-card {
  height: 380px;
  background-color: #ebebeb;
  display: flex;
  align-items: center;
  justify-content: center;

  &-item {
    width: calc(100% - 100px);
    height: calc(100% - 100px);
    background-image: url("@/assets/img/home/most.webp");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;


    .el {
      width: calc(100% - 60px);
      height: calc(100% - 60px);
      background-color: #ebebebdb;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      a {
        text-decoration: underline !important;
        color: #626262;
        font-size: 16px;
        letter-spacing: .4em;
        max-width: 90%;
        text-align: center;

        &:last-child {
          position: relative;
          margin-top: 10px;

          &::after {
            content: "";
            width: 30px;
            height: 1px;
            position: absolute;

            top: calc(100% + 15px);
            left: 50%;
            transform: translateX(-50%);
            background-color: black;
          }
        }

        &.text {
          font-size: 20px;
          font-weight: bold;
          letter-spacing: .5em;
          text-decoration: none !important;
        }
      }
    }
  }

}
</style>
