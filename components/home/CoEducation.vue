<template>
  <div class="certification">
    <co-hr/>
    <co-title class="mt-lg-5" title="ОБУЧЕНИЕ" :large="true"/>
    <div class="certification__list">
      <div class="link mb-2" v-for="(link, i) in documentsEducationLinkList" :key="i">
        <co-link
          :title="link.title"
          :type="link.type"
          :link="link.link"
          :underline="link.underline"
          :bold="link.bold"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CoHr from "~/components/ui/CoHr.vue";
import CoTitle from "~/components/ui/CoTitle.vue";
import CoLink from "~/components/ui/CoLink.vue";
import {documentsCertLinkList, documentsEducationLinkList} from "~/components/home/core/DocumentsLinkList";

</script>

<style scoped lang="scss">
.certification {
  &__list{
    padding: 0 2rem;
  }
}
</style>
