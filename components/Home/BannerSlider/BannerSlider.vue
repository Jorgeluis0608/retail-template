<template>
  <div class="banner-wrap">
    <div class="carousel" v-if="loaded">
      <slick
        class="slider"
        ref="slider"
        :options="slickOptions"
        @afterChange="handleAfterChange"
      >
        <div class="slide" id="slide1">
          <div class="inner">
            <div class="img background-banner">
              <img
                class="img-2d3d"
                :src="imgAPI.retail[5]"
                :data-2d="imgAPI.retail[4]"
                :data-3d="imgAPI.retail[5]"
                alt="background"
              />
            </div>
            <v-container>
              <v-row>
                <v-col md="7" cols="12" class="px-6 d-flex align-center">
                  <div class="text">
                    <h4 class="use-text-title">{{ $t('retail.banner_title') }}</h4>
                    <h5 class="use-text-subtitle">{{ $t('retail.banner_desc') }}</h5>
                    <div class="btn-area">
                      <v-btn
                        text
                        large
                        color="primary"
                        href="#"
                        class="button"
                      >
                        {{ $t('common.btn_detail') }}
                      </v-btn>
                      <v-btn
                        large
                        outlined
                        color="secondary"
                        :href="link.retail.contact"
                        class="button"
                      >
                        {{ $t('common.btn_get') }}
                      </v-btn>
                    </div>
                  </div>
                </v-col>
                <v-col md="5" cols="12" class="px-lg-6">
                  <div class="img">
                    <img
                      class="img-2d3d img-slide1"
                      :src="imgAPI.retail[1]"
                      :data-2d="imgAPI.retail[0]"
                      :data-3d="imgAPI.retail[1]"
                      alt="banner 1 3D"
                    />
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
        <div class="slide" id="slide2">
          <div class="inner">
            <v-container>
              <v-row justify="end" :class="[isMobile ? 'column-reverse' : 'row']">
                <v-col lg="5" md="4" cols="12" class="px-lg-10">
                  <div class="img">
                    <img
                      class="img-2d3d img-slide2"
                      :src="imgAPI.retail[3]"
                      :data-2d="imgAPI.retail[2]"
                      :data-3d="imgAPI.retail[3]"
                      alt="banner 2 3D"
                    />
                  </div>
                </v-col>
                <v-col lg="7" md="8" cols="12" class="px-6 d-flex align-center">
                  <div class="text">
                    <h4 class="use-text-title">{{ $t('retail.banner_title') }}</h4>
                    <h5 class="use-text-subtitle">{{ $t('retail.banner_desc') }}</h5>
                    <div class="btn-area">
                      <v-btn
                        text
                        large
                        color="primary"
                        href="#"
                        class="button"
                      >
                        {{ $t('common.btn_detail') }}
                      </v-btn>
                      <v-btn
                        large
                        outlined
                        color="secondary"
                        :href="link.retail.contact"
                        class="button"
                      >
                        {{ $t('common.btn_get') }}
                      </v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
        <div class="slide center-content" id="slide3">
          <div class="inner">
            <v-container>
              <v-row justify="end">
                <v-col cols="12" class="px-sm-12 px-6">
                  <div class="text text-center">
                    <h4 class="use-text-title">{{ $t('retail.banner_title') }}</h4>
                    <h5 class="use-text-subtitle">{{ $t('retail.banner_desc') }}</h5>
                    <div class="btn-area">
                      <v-btn
                        text
                        large
                        color="primary"
                        href="#"
                        class="button"
                      >
                        {{ $t('common.btn_detail') }}
                      </v-btn>
                      <v-btn
                        large
                        outlined
                        color="secondary"
                        :href="link.retail.contact"
                        class="button"
                      >
                        {{ $t('common.btn_get') }}
                      </v-btn>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12">
                  <div class="img h-banner">
                    <img
                      class="img-2d3d"
                      :src="imgAPI.retail[7]"
                      :data-2d="imgAPI.retail[6]"
                      :data-3d="imgAPI.retail[7]"
                      alt="banner 3 3D"
                    />
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
      </slick>
    </div>
    <div class="slide-nav-group">
      <hidden point="smDown">
        <v-container>
          <nav class="slide-nav">
            <v-btn
              :class="{ active: currentSlide === 0 }"
              @click="gotoSlide(0)"
              text
            >
              <strong>First Slide</strong>
              Interdum et malesuada fames ac ante
            </v-btn>
            <v-divider class="divider" vertical inset />
            <v-btn
              :class="{ active: currentSlide === 1 }"
              @click="gotoSlide(1)"
              text
            >
              <strong>Second Slide</strong>
              Interdum et malesuada fames ac ante
            </v-btn>
            <v-divider class="divider" vertical inset />
            <v-btn
              :class="{ active: currentSlide === 2 }"
              @click="gotoSlide(2)"
              text
            >
              <strong>Third Slide</strong>
              Interdum et malesuada fames ac ante
            </v-btn>
          </nav>
        </v-container>
      </hidden>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './banner-styles';
</style>

<script>
import Hidden from '../../Hidden'
import link from '~/static/text/link'
import imgAPI from '~/static/images/imgAPI'

export default {
  components: {
    Hidden,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      currentSlide: 0,
      link: link,
      imgAPI: imgAPI,
      slickOptions: {
        dots: false,
        arrows: false,
        speed: 800,
        slidesToShow: 1,
        infinite: true,
        autoplay: false,
        cssEase: 'ease-out',
        responsive: [
          {
            breakpoint: 960,
            settings: {
              dots: true,
              fade: true
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    handleAfterChange(event, slick, currentSlide) {
      this.currentSlide = currentSlide
    },
    gotoSlide(index) {
      this.$refs.slider.goTo(index)
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
