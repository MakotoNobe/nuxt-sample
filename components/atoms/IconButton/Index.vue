<template>
  <div>
    <v-btn
      :color="color"
      elevation="2"
      style="text-transform: none"
      @click="onClick"
    >
      <v-icon v-if="icon" left> {{ icon }} </v-icon>
      {{ name }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    name: {
      type: String,
      default: 'アイコンボタン',
    },
    icon: {
      type: String,
      required: false,
      default: null,
    },
    color: {
      type: String,
      default: 'orange',
    },
  },
  methods: {
    onClick() {
      this.$emit('click')
    },
  },
}
</script>
