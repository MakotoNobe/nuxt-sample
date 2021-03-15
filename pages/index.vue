<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <IconButton
        icon="mdi-open-in-new"
        name="YouTubeチャンネル"
        @click="clickButton(1)"
    /></v-col>

    <v-col cols="12">
      <IconButton
        icon="mdi-open-in-new"
        name="逆転エンジニアサロン"
        @click="clickButton(2)"
    /></v-col>

    <v-col cols="12">
      <IconButton name="送信する" @click="clickButton(3)"
    /></v-col>
  </v-row>
</template>

<script>
import IconButton from '~/components/atoms/IconButton/Index.vue'
export default {
  components: {
    IconButton,
  },
  methods: {
    clickButton(value) {
      alert(value)
    },
  },
}
</script>
