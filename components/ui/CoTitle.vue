<template>
  <div :class="['mb-30', props.large && 'large', props.bold && 'bold']">
    {{props.title}}
    <co-hr v-if="props.line"/>
  </div>
</template>

<script lang="ts" setup>
import CoHr from "~/components/ui/CoHr.vue";

const props = defineProps<{
  title: string,
  large?: boolean | undefined,
  line?: boolean | undefined,
  bold?: boolean | undefined,
}>()
</script>

<style scoped lang="scss">
div {
  font-weight: bold;
  font-size: 30px;
  line-height: 1.2em;
  text-align: center;
  color: #6ea4ca;

  .large{
    font-size: 50px;
  }
}
.bold {
  color: #0c3c60 !important;
}
</style>
