<template>
  <form class="form" @submit.prevent="handleSubmit">
    <CustomSelect :items="cities" v-model="localCity" class="form__select" />
    <CustomInput
      v-model="localPrice"
      placeholder="Price, from"
      error-message="Not empty"
      :rules="[(value) => !!value]"
    />
    <SubmitButton type="submit" class="form__submit"
      >Housing selection</SubmitButton
    >
  </form>
</template>

<script>
import CustomInput from "../shared/CustomInput.vue";
import CustomSelect from "../shared/CustomSelect.vue";
import SubmitButton from "../shared/SubmitButton.vue";

export default {
  data() {
    return {
      localPrice: "",
      localCity: "",
    };
  },
  computed: {
    cities() {
      return [
        { value: "", label: "City", selected: true },
        "Kyiv",
        "Odesa",
        "Poltava",
        "Kharkiv",
        "Dnipro",
        "Lviv",
        "Kherson",
        "Mariupol",
      ];
    },
  },
  components: {
    CustomInput,
    CustomSelect,
    SubmitButton,
  },
  methods: {
    handleSubmit() {
      this.$emit("filter", { city: this.localCity, price: this.localPrice });
    },
  },
};
</script>
<style lang="scss" scoped>
.form {
  display: flex;
  &__select {
    margin-right: 30px;
  }
  &__submit {
    margin-left: auto;
  }
}
</style>
