<template>
  <footer>
    <div class="container">
      <div class="text">© 2018 «Национальная Ассоциация Кооперативов и других форм экономических сообществ РК"</div>
      <div class="social">
        <a href="#">
          <img src="../../../assets/img/social/vk.webp" alt="">
        </a>
        <a href="#">
          <img src="../../../assets/img/social/facebook.png" alt="">
        </a>
        <a href="#">
          <img src="../../../assets/img/social/twitter.webp" alt="">
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
footer {
  background-color: #0c3c60;
  padding: 2.5rem 0;

  .container{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .text{
    font-size: 14px;
    color: #FFFFFF;
  }
  .social{
    display: flex;
    align-items: center;
    margin-left: auto;

    a{
      margin-left: 10px;
    }
  }
}
</style>
