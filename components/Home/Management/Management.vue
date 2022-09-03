<template>
  <div class="root">
    <title-main align="center">
      {{ $t('retail.management_title') }}
    </title-main>
    <p class="use-text-subtitle2 text-center px-4 px-sm-15">
      {{ $t('retail.management_desc') }}
    </p>
    <div class="slider-wrap">
      <div class="carousel carousel-side" v-if="loaded">
        <slick
          class="slider-side"
          ref="sliderSide"
          :options="sideOptions"
        >
          <div
            v-for="(item, index) in managementData"
            :key="index"
            class="item"
          >
            <div class="paper-round">
              <img
                class="img-2d3d"
                :src="item.illustration[1]"
                :data-2d="item.illustration[0]"
                :data-3d="item.illustration[1]"
                alt="illustration"
              />
              <h4 :class="item.color+'--text'">
                {{ $t('retail.management_'+item.title) }}
              </h4>
            </div>
          </div>
        </slick>
      </div>
      <div class="carousel carousel-center" v-if="loaded">
        <slick
          class="slider-center"
          ref="sliderCenter"
          :options="centerOptions"
        >
          <div
            v-for="(item, index) in managementData"
            :key="index"
            class="item"
          >
            <div class="item" :class="index % 2 ? 'mobile' : 'desktop'">
              <figure>
                <img :src="item.img" alt="screen" />
              </figure>
              <div class="desc">
                <div>
                  <img
                    class="img-2d3d"
                    :src="item.illustration[1]"
                    :data-2d="item.illustration[0]"
                    :data-3d="item.illustration[1]"
                    alt="illustration"
                  />
                  <div class="text">
                    <h4 :class="item.color+'--text'">
                      {{ $t('retail.management_'+item.title) }}
                    </h4>
                    <p>{{ $t('retail.management_'+item.desc) }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </slick>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './management-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import Title from '../../Title'

const managementData = [
  {
    title: 'item1_title',
    desc: 'item1_desc',
    color: 'primary',
    illustration: [imgAPI.retail[13], imgAPI.retail[14]],
    img: imgAPI.retail[28]
  },
  {
    title: 'item2_title',
    desc: 'item2_desc',
    color: 'secondary',
    illustration: [imgAPI.retail[15], imgAPI.retail[16]],
    img: imgAPI.retail[29]
  },
  {
    title: 'item3_title',
    desc: 'item3_desc',
    color: 'accent',
    illustration: [imgAPI.retail[17], imgAPI.retail[18]],
    img: imgAPI.retail[30]
  },
  {
    title: 'item4_title',
    desc: 'item4_desc',
    color: 'primary',
    illustration: [imgAPI.retail[19], imgAPI.retail[20]],
    img: imgAPI.retail[31]
  },
  {
    title: 'item5_title',
    desc: 'item5_desc',
    color: 'secondary',
    illustration: [imgAPI.retail[21], imgAPI.retail[22]],
    img: imgAPI.retail[32]
  },
  {
    title: 'item6_title',
    desc: 'item6_desc',
    color: 'accent',
    illustration: [imgAPI.retail[23], imgAPI.retail[24]],
    img: imgAPI.retail[33]
  }
]

export default {
  components: {
    'title-main': Title,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      managementData: managementData,
      sideOptions: {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 7000,
        slidesToShow: 3,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        asNavFor: '.slider-center'
      },
      centerOptions: {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        fade: true,
        arrows: false,
        pauseOnHover: true,
        asNavFor: '.slider-side'
      }
    }
  },
  mounted() {
    this.loaded = true
    setTimeout(() => {
      this.$refs.sliderSide.goTo(1)
    }, 100)
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
