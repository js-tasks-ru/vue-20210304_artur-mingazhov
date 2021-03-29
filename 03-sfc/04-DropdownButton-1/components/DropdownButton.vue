<!--вариант 1-->

<template>
  <div class="dropdown" :class="{ show: show }" @click="show = !show">
    <button type="button" class="button dropdown__toggle" :class="{ dropdown__toggle_icon: hasIcon }">
      <app-icon :icon="selected.icon" v-if="selected.icon !== undefined" />
      {{ title }} - {{ selected.text }}
    </button>

    <div class="dropdown__menu" :class="{ show: show }">
      <button
        class="dropdown__item"
        :class="{ dropdown__item_icon: hasIcon }"
        type="button"
        v-for="(option, index) in options"
        :key="index"
        @click="$emit(`change`, option.value)"
      >
        <app-icon :icon="option.icon" v-if="option.icon !== undefined" />
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
      for (let i = 0; i < this.options.length; i++) {
        if (Object.prototype.hasOwnProperty.call(this.options[i], 'icon')) {
          return true;
        }
      }
      return false;
    },
  },
  methods: {},
};
</script>

<style src="@/assets/styles/_button.css" scoped></style>
<style src="@/assets/styles/_dropdown.css" scoped></style>


<!--вариант 2-->
<!--
<template>
  <div class="dropdown" :class="{ show: show }" @click="show = !show">
    <button type="button" class="button dropdown__toggle" :class="{ dropdown__toggle_icon: hasIcon }">
      <app-icon :icon="selected.icon" v-if="selected.icon !== undefined" />
      {{ title }} - {{ selected.text }}
    </button>

    <div class="dropdown__menu" :class="{ show: show }">
      <button
        class="dropdown__item"
        :class="{ dropdown__item_icon: hasIcon }"
        type="button"
        v-for="(option, index) in options"
        :key="index"
        @click="$emit(`change`, option)"
      >
        <app-icon :icon="option.icon" v-if="option.icon !== undefined" />
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

  props: {
    title: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    selected: {
      type: Object,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    hasIcon() {
      for (let i = 0; i < this.options.length; i++) {
        if (Object.prototype.hasOwnProperty.call(this.options[i], 'icon')) {
          return true;
        }
      }
      return false;
    },
  },
};
</script>

<style src="@/assets/styles/_button.css" scoped></style>
<style src="@/assets/styles/_dropdown.css" scoped></style>
-->

