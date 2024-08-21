<template>
  <div class="input">
    <label v-if="label" :for="id" class="input__label">
      {{ label }}
    </label>

    <input :id="id" 
      :type="type" 
      :value="modelValue || value" 
      :placeholder="placeholder" 
      :disabled="disabled"
      :autocomplete="autocomplete" 
      :class="[
      'input__area',
      color ? `input__area--${color}` : '',
      icon ? 'input__area--icon' : ''
      ]" 
      @input="emits('update:modelValue', $event.target.value)"
      @blur="emits('blur')" 
      @focus="emits('focus')"
    >

    <UIIcon :name="icon" class="input__icon" v-if="icon" />
    <div class="input__icon-devider" v-if="icon"></div>

    <p v-if="isError" class="input__error"> {{ errorText }} </p>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: undefined,
    default: '',
  },
  value: {
    type: undefined,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: '',
  },
  autocomplete: {
    type: String,
    default: 'off',
  },
  isError: {
    type: Boolean,
    default: false,
  },
  errorText: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: '',
  }
})

const emits = defineEmits(['update:modelValue', 'blur', 'focus'])
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  font-family: 'Aeroport';
  position: relative;

  &__label {
    display: block;

    @include text_normal;
    font-weight: 500;
    color: var(--black);

    margin-bottom: 12px;
  }

  &__area {
    width: 100%;
    height: 48px;

    padding: 12px 15px;

    @include text_normal;
    font-weight: 500;
    color: var(--white);

    background: var(--secondaryBg);
    border-radius: 16px;
    border: 1px solid #3E3E3E;

    &--icon {

      &::placeholder {
        padding-left: 50px;
      }
    }

    &--white {
      background: var(--white);
      border: 1px solid var(--grayText2);
    }

    &--gray {
      background: var(--grayBg);
    }

    &:disabled {
      background: var(--grayBg2);
    }

    &::-webkit-input-placeholder {
      color: var(--white);
      font-size: 16px;
      font-weight: 300;
    }

    &:-moz-placeholder {
      color: var(--white);
      font-size: 16px;
      font-weight: 300;
      opacity: 1;
    }

    &::-moz-placeholder {
      color: var(--white);
      font-size: 16px;
      font-weight: 300;
      opacity: 1;
    }

    &:-ms-input-placeholder {
      color: var(--white);
      font-size: 16px;
      font-weight: 300;
    }

    &::-ms-input-placeholder {
      color: var(--white);
      font-size: 16px;
      font-weight: 300;
    }

    &::placeholder {
      color: var(--white);
      font-size: 16px;
      font-weight: 300;
    }
  }

  &__error {
    padding-left: 5px;
    margin-top: 5px;
    font-size: 13px;
    color: var(--red);
  }

  &__icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    z-index: 1005;

    &-devider {
      width: 1px;
      height: 22px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 50px;
      background: var(--grayText);
    }

    &:deep(svg) {
      height: 20px;
      width: 20px;
    }

    &:deep(svg path) {
      height: 20px;
      width: 20px;

      fill: var(--grayText);
    }
  }
}
</style>
