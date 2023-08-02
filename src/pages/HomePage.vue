<template>
  <main class="homepage">
    <GeneralContainer>
      <ApartmentFilterForm class="apartment-filter" @filter="filter" />
    </GeneralContainer>
    <GeneralContainer>
      <p v-if="!filteredApartments.length">Nothing found</p>
      <ApartmentsList v-else :items="filteredApartments">
        <template v-slot:apartment="{ apartment }">
          <ApartmentsItem
            :key="apartment.id"
            :id="apartment.id"
            :descr="apartment.descr"
            :rating="apartment.rating"
            :imgSrc="apartment.imgUrl"
            :price="apartment.price"
          />
        </template>
      </ApartmentsList>
    </GeneralContainer>
  </main>
</template>

<script>
import ApartmentsList from "../components/apartment/ApartmentsList.vue";
import ApartmentsItem from "../components/apartment/ApartmentsItem.vue";
import ApartmentFilterForm from "../components/apartment/ApartmentFilterForm.vue";
import GeneralContainer from "../components/shared/GeneralContainer.vue";

import { getApartmentsList } from "../services/apartments.service";

export default {
  name: "App",
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentFilterForm,
    GeneralContainer,
  },
  data() {
    return {
      apartments: [],
      filters: {
        cityValue: "",
        priceValue: 0,
      },
    };
  },
  async created() {
    try {
      const { data } = await getApartmentsList();
      this.apartments = data;
    } catch (error) {
      console.error(error);
    }
  },
  computed: {
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments));
    },
  },
  methods: {
    filter({ city, price }) {
      console.log(city, price, "--before");
      this.filters.cityValue = city;
      this.filters.priceValue = price;
    },
    filterByCityName(apartments) {
      if (!this.filters.cityValue) return apartments;

      return apartments.filter((apartment) => {
        return apartment.location.city === this.filters.cityValue;
      });
    },
    filterByPrice(apartments) {
      if (!this.filters.priceValue) return apartments;

      return apartments.filter((apartment) => {
        return apartment.price >= this.filters.priceValue;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.apartment-filter {
  margin-bottom: 40px;
}
</style>
