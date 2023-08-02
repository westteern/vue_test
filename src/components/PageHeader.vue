<template lang="">
  <header class="header">
    <GeneralContainer>
      <router-link to="/">
        <PageLogo />
      </router-link>
    </GeneralContainer>
  </header>
</template>
<script>
import GeneralContainer from "./shared/GeneralContainer.vue";
import PageLogo from "./shared/PageLogo.vue";
export default {
  name: "PageHeader",
  components: {
    GeneralContainer,
    PageLogo,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 16px 0;
  background: $secondary-color;
}
</style>
