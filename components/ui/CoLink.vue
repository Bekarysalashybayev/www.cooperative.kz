<template>
  <div>
    <nuxt-link :to="props.link" :class="classes" v-if="props.type === 'link'">
      {{ props.title }}
    </nuxt-link>
    <div :class="classes" v-else>
      {{ props.title }}
    </div>
  </div>
</template>

<script lang="ts" setup>

import {computed} from "vue";

const classes = computed(() => {
  return {
    'link': true,
    'underline': props.underline,
    'bold': props.bold
  }

})

const props = defineProps<{
  title: string,
  type: 'pdf' | 'word' | 'link' | 'none',
  link: string,
  underline?: boolean | undefined,
  bold?: boolean | undefined
}>()
</script>

<style scoped lang="scss">
.link {
  display: block;
  font-weight: bold;
  line-height: 1.2em;
  color: #39729B;
  font-size: 15px;
  position: relative;
  padding-left: 15px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 7px;
    height: 7px;
    background-color: #39729B;
    border-radius: 50%;
    transform: translateY(-50%);
  }
}

.underline {
  text-decoration: underline !important;
  cursor: pointer !important;
}

.bold {
  color: #0c3c60 !important;
}
</style>
