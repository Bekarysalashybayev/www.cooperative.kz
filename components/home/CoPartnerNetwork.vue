<template>
  <div class="partner">
    <div class="title">
      <co-title title="ПАРТНЕРСКАЯ СЕТЬ" :large="true" :line="true"/>
    </div>
    <div class="content">
      <div class="link mb-2" v-for="(link, i) in documentsPartnerLinkList" :key="i">
        <co-link
          :title="link.title"
          :type="link.type"
          :link="link.link"
          :underline="link.underline"
          :bold="link.bold"
          :target="link.target"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CoTitle from "~/components/ui/CoTitle.vue";
import {documentsPartnerLinkList} from "~/components/home/core/DocumentsLinkList";
import CoLink from "~/components/ui/CoLink.vue";
</script>

<style scoped lang="scss">
.partner {

  .content {
    padding: 0 0 0 5rem;
  }

  .title {
    width: max-content;
    margin: 0 auto;
  }
}
</style>
