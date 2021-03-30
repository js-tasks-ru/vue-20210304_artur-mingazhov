<template>
  <div class="dropdown" :class="{ show: show }" @click="show = !show">
    <button type="button" class="button dropdown__toggle" :class="{ dropdown__toggle_icon: hasIcon }">
      <app-icon v-if="selected.icon !== undefined" :icon="selected.icon" />
      {{ title }} - {{ selected.text }}
    </button>

    <div class="dropdown__menu" :class="{ show: show }">
      <button
        v-for="(option, index) in options"
        :key="index"
        class="dropdown__item"
        :class="{ dropdown__item_icon: hasIcon }"
        type="button"
        @click="$emit(`change`, option.value)"
      >
        <app-icon v-if="option.icon !== undefined" :icon="option.icon" />
        {{ option.text }}
      </button>
    </div>
  </div>
</template>

<script>
import AppIcon from './AppIcon';

export default {
  name: 'DropdownButton',

  components: { AppIcon },

  model: {
    prop: 'value',
    event: 'change',
  },

  props: {
    title: {
      type: String,
      required: true,
    },

    options: {
      type: Array,
      required: true,
    },

    value: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      show: false,
    };
  },

  computed: {
    selected() {
      if (this.value) {
        return this.options.find((el) => el.value === this.value);
      }
      return {};
    },

    hasIcon() {
      return this.options.some((el) => Object.prototype.hasOwnProperty.call(el, 'icon'));
    },
  },
};
</script>

<style src="@/assets/styles/_button.css" scoped></style>
<style src="@/assets/styles/_dropdown.css" scoped></style>
