<template>
  <div>
    <div class="main-wrap">
      <main-header home />
      <div class="container-wrap bottom-shift">
        <div id="home">
          <banner-slider />
        </div>
        <section id="feature" class="space-top-short">
          <feature />
        </section>
        <section :class="isMobile ? 'space-top-short' : 'space-top'">
          <counter />
        </section>
        <section id="management" class="space-top">
          <management />
        </section>
        <section id="business" class="space-top">
          <business />
        </section>
        <section id="testimonials" :class="isTablet ? 'space-top' : 'space-top-short'">
          <testimonials />
        </section>
        <section id="blog" class="space-top-short">
          <news-event />
        </section>
        <section id="call-action" class="space-top-short space-bottom-short">
          <call-action />
        </section>
      </div>
      <main-footer />
      <hidden point="smDown">
        <corner />
      </hidden>
      <hidden point="mdDown">
        <notification />
      </hidden>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/pages';
</style>

<script>
import BannerSlider from '~/components/Home/BannerSlider'
import Counter from '~/components/Home/Counter'
import Feature from '~/components/Home/Feature'
import Management from '~/components/Home/Management'
import Business from '~/components/Home/Business'
import Testimonials from '~/components/Home/Testimonials'
import NewsEvent from '~/components/Home/NewsEvent'
import CallAction from '~/components/CallAction'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Hidden from '~/components/Hidden'
import Corner from '~/components/Home/Corner'
import Notification from '~/components/Notification'
import brand from '~/static/text/brand'

export default {
  components: {
    'main-header': Header,
    BannerSlider,
    Counter,
    Feature,
    Management,
    Business,
    Testimonials,
    NewsEvent,
    CallAction,
    Hidden,
    Corner,
    Notification,
    'main-footer': Footer
  },
  head() {
    return {
      title: brand.retail.desc
    }
  },
  computed: {
    isTablet() {
      return this.$mq === 'mdDown' || this.$mq === 'smDown' || this.$mq === 'xsDown' // eslint-disable-line
    },
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
