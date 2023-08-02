<template>
  <select v-bind="$attrs" v-model="selectedValue" class="custom-select">
    <option
      v-for="item in formattedItems"
      :value="item.value"
      :key="item.value"
      :selected="item.selected"
    >
      {{ item.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: "CustomSelect",
  props: {
    items: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: [String],
      default: "",
    },
  },
  computed: {
    selectedValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
    formattedItems() {
      return this.items.map((item) => {
        return typeof item === "object" ? item : { value: item, label: item };
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";
.custom-select {
  min-height: 40px;
  min-width: 220px;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  padding: 8px 15px;
  cursor: pointer;
  display: inline-block;
}
</style>
