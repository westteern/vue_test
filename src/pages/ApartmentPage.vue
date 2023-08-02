<template lang="">
  <main class="apartment-page">
    <GeneralContainer>
      <div v-if="apartment" class="apartment-page__content">
        <ApartmentInfo :apartment="apartment" />
        <ApartmentOwner
          class="apartment-page__owner"
          :owner="apartment.owner"
        />
      </div>
    </GeneralContainer>
  </main>
</template>

<script>
import GeneralContainer from "../components/shared/GeneralContainer.vue";
import ApartmentInfo from "@/components/apartment/ApartmentInfo.vue";
import ApartmentOwner from "@/components/apartment/ApartmentOwner.vue";

import { getApartmentById } from "../services/apartments.service";

export default {
  name: "ApartmentPage",
  components: {
    GeneralContainer,
    ApartmentInfo,
    ApartmentOwner,
  },
  data() {
    return {
      apartment: null,
    };
  },
  async created() {
    try {
      const { id } = this.$route.params;
      const { data } = await getApartmentById(id);
      this.apartment = data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 55px;

  &__content {
    display: flex;
    align-items: flex-start;
  }
  &__owner {
    min-width: 350px;
    margin-left: 30px;
  }
}
</style>
