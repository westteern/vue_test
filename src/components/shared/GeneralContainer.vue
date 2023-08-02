<template lang="">
  <div class="general-container">
    <slot>Default value</slot>
  </div>
</template>
<script>
export default {
  name: "GeneralContainer",
};
</script>
<style lang="scss" scoped>
.general-container {
  max-width: 1110px;
  margin: 0 auto;
}
</style>
