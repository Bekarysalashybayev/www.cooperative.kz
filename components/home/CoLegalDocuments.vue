<template>
  <div class="documents">
    <co-title title="НОРМАТИВНО-ПРАВОВЫЕ ДОКУМЕНТЫ"/>
    <div class="documents__body">
      <div class="text mb-3">
        <strong>Правовая основа деятельности потребительских кооперативов</strong> и других форм экономических сообществ
        в Республике
        Казахстан в системе организации работы, развиваемой «Национальной Ассоциацией кооперативов и других форм
        экономических сообществ Республики Казахстан» <strong>регулируется следующими нормативно-правовыми
        документами:</strong>
      </div>
      <div class="pl-2">
        <div class="mb-lg-5">
          <div class="link mb-2" v-for="(link, i) in documentsFirsLinkList" :key="i">
            <co-link
              :title="link.title"
              :type="link.type"
              :link="link.link"
              :underline="link.underline"
              :bold="link.bold"
            />
          </div>
        </div>
        <div class="mb-lg-5">
          <div class="link mb-2" v-for="(link, i) in documentsSecondLinkList" :key="i">
            <co-link
              :title="link.title"
              :type="link.type"
              :link="link.link"
              :underline="link.underline"
              :bold="link.bold"
            />
          </div>
        </div>
        <div class="text">
          Для того, чтобы знать о своих правах и обязанностях в потребительских кооперативах в соответствии с
          законодательством Республики Казахстан предлагаем изучить представленные документы.
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {documentsFirsLinkList, documentsSecondLinkList} from './core/DocumentsLinkList'
import CoTitle from "~/components/ui/CoTitle.vue";
import CoLink from "~/components/ui/CoLink.vue";


</script>

<style scoped lang="scss">
.documents {
  width: 100%;

  &__body {
    padding: 2rem;
    background-color: #d1e0eb;
    border: 1px solid #6ea4ca;

    .text {
      color: #0C3C60;
      font-size: 15px;
      line-height: 2em;
    }
  }
}
</style>
