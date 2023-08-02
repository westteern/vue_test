<template>
  <div class="wraper-input">
    <input
      v-model="inputValue"
      type="number"
      :placeholder="placeholder"
      class="custom-input"
      :class="!isValid && 'custom-input--error '"
    />
    <span v-if="!isValid" class="custom-input__error">{{ errorMessage }}</span>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "CustomInput",
  data() {
    return {
      isValid: true,
    };
  },
  props: {
    errorMessage: {
      type: String,
      default: "",
    },
    rules: {
      type: Array,
      default: () => [],
    },
    modelValue: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  watch: {
    modelValue(value) {
      this.validate(value);
      // console.log(value);
    },
  },
  methods: {
    validate(value) {
      this.isValid = this.rules.every((rule) => rule(value));
    },
  },
  setup(props, { emit }) {
    const inputValue = ref(props.modelValue);
    watch(
      () => props.modelValue,
      (val) => {
        inputValue.value = val;
      }
    );
    watch(inputValue, (val) => {
      emit("update:modelValue", val);
    });
    return {
      inputValue,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";
.wraper-input {
  position: relative;
  display: inline-flex;
}
.custom-input {
  min-height: 40px;
  max-width: 220px;
  width: 100%;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;

  &::placeholder {
    color: inherit;
  }
  &--error {
    border-color: red;
  }

  &__error {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    font-size: 12px;
    color: red;
    line-height: 1.3;
  }
}
</style>
