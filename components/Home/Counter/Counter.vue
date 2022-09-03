<template>
  <div class="counter-wrap">
    <div id="watched_counter" />
    <v-container class="max-md">
      <v-row
        justify="center"
        align="center"
        class="counter-inner spacing6"
      >
        <v-col md="4" class="pa-6">
          <div class="counter-item">
            <div class="text">
              <h3 class="use-text-title">
                <span
                  v-if="loaded"
                  v-countUp:onWindowScroll.once="{
                    watchedElId: 'watched_counter',
                    startValue: 0,
                    endValue: 200,
                    options: { duration: 1 }
                  }"
                />M
              </h3>
              <p class="use-text-subtitle">
                <i class="ion-ios-cloud-download-outline" />
                {{ $t('retail.counter_downloads') }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col md="4" class="pa-6">
          <div class="counter-item">
            <div class="text">
              <h3 class="use-text-title">
                +<span
                  v-if="loaded"
                  v-countUp:onWindowScroll.once="{
                    watchedElId: 'watched_counter',
                    startValue: 0,
                    endValue: 180,
                    options: { duration: 1 }
                  }"
                />M
              </h3>
              <p class="use-text-subtitle">
                <i class="ion-ios-checkmark-circle-outline" />
                {{ $t('retail.counter_transactions') }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col md="4" class="pa-6">
          <div class="counter-item">
            <div class="text">
              <h3 class="use-text-title">
                +<span
                  v-if="loaded"
                  v-countUp:onWindowScroll.once="{
                    watchedElId: 'watched_counter',
                    startValue: 0,
                    endValue: 180,
                    options: { duration: 1 }
                  }"
                />K
              </h3>
              <p class="use-text-subtitle">
                <i class="ion-ios-home-outline" />
                {{ $t('retail.counter_merchants') }}
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import 'counter-style.scss';
</style>

<script>
export default {
  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>
