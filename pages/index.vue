<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <IconButton icon="mdi-open-in-new" name="YouTubeチャンネル"
    /></v-col>

    <v-col cols="12" sm="8" md="6">
      <IconButton icon="mdi-open-in-new" name="逆転エンジニアサロン"
    /></v-col>

    <v-col cols="12" sm="8" md="6"> <IconButton name="送信する" /></v-col>
  </v-row>
</template>

<script>
import IconButton from '~/components/atoms/IconButton/Index.vue'
export default {
  components: {
    IconButton,
  },
}
</script>
