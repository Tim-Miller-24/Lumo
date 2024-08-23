<template>
  <div class="textarea">
    <textarea
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="[
        'textarea__area',
        color ? `textarea__area--${color}` : '',
        icon ? 'textarea__area--icon' : ''
      ]"
      @input="handleInput"
    />

    <UIIcon :name="icon" class="textarea__icon" v-if="icon && isShowIcon" />
    <div class="textarea__icon-devider" v-if="icon && isShowIcon"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  modelValue: {
    type: undefined,
    default: '',
  },
  value: {
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
  icon: {
    type: String,
    default: '',
  }
})

const emits = defineEmits(['update:modelValue'])

const isShowIcon = ref(true);

const handleInput = (event) => {
  const inputValue = event.target.value;

  emits('update:modelValue', inputValue);

  isShowIcon.value = inputValue.length === 0;
}
</script>

<style lang="scss" scoped>
.textarea {
  width: 100%;
  font-family: 'Aeroport';
  position: relative;

  &__area {
    width: 100%;
    height: 100px;

    padding: 12px 15px;

    @include text_normal;
    font-weight: inherit;

    background: var(--grayBg3);
    border-radius: 16px;
    border: 1px solid #3E3E3E;

    resize: none;

    &--icon {

      &::placeholder {
        padding-left: 50px;
      }
    }

    &--white {
      background: var(--white);
      border: 1px solid var(--grayText);
    }

    &--gray {
      background: var(--grayBg);
    }

    &:disabled {
      background: var(--grayBg2);
    }

    &::-webkit-input-placeholder {
      color: var(--black);
      font-size: 16px;
      font-weight: 300;
    }
    &:-moz-placeholder {
      color: var(--black);
      font-size: 16px;
      font-weight: 300;
      opacity:  1;
    }
    &::-moz-placeholder {
      color: var(--black);
      font-size: 16px;
      font-weight: 300;
      opacity:  1;
    }
    &:-ms-input-placeholder {
      color: var(--black);
      font-size: 16px;
      font-weight: 300;
    }
    &::-ms-input-placeholder {
      color: var(--black);
      font-size: 16px;
      font-weight: 300;
    }
    &::placeholder {
      color: var(--black);
      font-size: 16px;
      font-weight: 300;
    }
  }

  &__icon {
    position: absolute;
    
    top: 12px;
    left: 20px;
    z-index: 1005;

    &-devider {
      width: 1px;
      height: 22px;
      position: absolute;
      
      top: 12px;
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
