<script setup lang="ts">

interface IProps {
  type: string,
}
defineProps<IProps>();
</script>

<template>
<button>
  <slot></slot>
</button>
</template>

<style scoped lang="scss">

</style>