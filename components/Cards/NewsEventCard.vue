<template>
  <div class="news">
    <figure>
      <img :src="img" alt="thumb">
    </figure>
    <div class="desc">
      <div class="text">
        <p class="type caption">
          {{ $t('retail.' + type) }}
        </p>
        <p>{{ text }}</p>
      </div>
      <v-btn small text class="btn">
        {{ $t('common.btn_read_more') }}
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './news-event.scss';
</style>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  }
}
</script>
