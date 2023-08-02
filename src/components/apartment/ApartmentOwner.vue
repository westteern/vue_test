<template lang="">
  <section class="apartment-owner">
    <h2 class="apartment-owner__title">Information about the owner</h2>
    <p class="apartment-owner__info">{{ owner.name }}</p>
    <p class="apartment-owner__info">tel: {{ owner.phone }}</p>
    <p class="apartment-owner__info">e-mail: {{ owner.email }}</p>
  </section>
</template>
<script>
export default {
  name: "ApartmentOwner",
  props: {
    owner: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.apartment-owner {
  padding: 20px;
  background: #e1efff;
  font-weight: 400;

  &__title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  &__info {
    margin-top: 6px;
  }
}
</style>
