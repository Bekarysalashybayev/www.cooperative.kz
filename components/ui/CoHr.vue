<template>
  <div :style="props.color ? {backgroundColor: props.color}: {}"></div>
</template>

<script lang="ts" setup>
const props = defineProps<{

  color?: string | undefined,
}>()
</script>

<style scoped lang="scss">
div {
  height: 6px;
  width: 100%;
  background-color: #6ea4ca;
  margin-bottom: 10px;
}
</style>
