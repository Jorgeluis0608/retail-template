<template>
  <AuthFrame
    :title="$t('common.register_subtitle')"
    :subtitle="$t('common.auth_desc')"
  >
    <div>
      <div class="head">
        <h3 :class="isMobile2 ? 'use-text-title' : 'use-text-subtitle'">
          {{ $t('common.login_create') }}
        </h3>
      </div>
      <social-auth />
      <div class="separator">
        <p>
          {{ $t('common.register_or') }}
        </p>
      </div>
      <v-form
        ref="form"
        v-model="valid"
      >
        <v-row class="spacing3">
          <v-col cols="12" sm="12" class="px-3 py-0">
            <v-text-field
              v-model="name"
              :label="$t('common.register_name')"
              :rules="requiredRules"
              color="secondary"
              filled
              class="input-field"
              name="name"
              required
            />
          </v-col>
          <v-col cols="12" sm="12" class="px-3 py-0">
            <v-text-field
              v-model="email"
              :label="$t('common.register_email')"
              :rules="emailRules"
              color="secondary"
              filled
              class="input-field"
              name="email"
              required
            />
          </v-col>
          <v-col cols="12" md="6" class="px-3 py-0">
            <v-text-field
              v-model="password"
              :label="$t('common.register_password')"
              :rules="requiredRules"
              color="secondary"
              filled
              class="input-field"
              type="password"
              name="email"
              required
            />
          </v-col>
          <v-col cols="12" md="6" class="px-3 py-0">
            <v-text-field
              v-model="confirmPassword"
              :label="$t('common.register_confirm')"
              :rules="passwordRules"
              color="secondary"
              filled
              class="input-field"
              type="password"
              name="confirm"
              required
            />
          </v-col>
        </v-row>
        <div class="btn-area flex">
          <div class="form-helper">
            <div class="form-control-label">
              <v-checkbox
                v-model="checkbox"
                :label="$t('common.form_terms')"
                :rules="requiredRules"
                color="secondary"
                required
              />
              <span>
                <a href="#" class="link">
                  {{ $t('common.form_privacy') }}
                </a>
              </span>
            </div>
          </div>
          <v-btn
            :block="isTablet || isMobile"
            large
            color="secondary"
            @click="handleSubmit"
          >
            {{ $t('common.continue') }}
          </v-btn>
        </div>
      </v-form>
    </div>
  </AuthFrame>
</template>

<style lang="scss" scoped>
@import './form-style';
</style>

<script>
import SocialAuth from './SocialAuth'
import AuthFrame from './AuthFrame'

export default {
  components: {
    SocialAuth,
    AuthFrame
  },
  data() {
    return {
      valid: true,
      email: '',
      name: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      confirmPassword: '',
      requiredRules: [v => !!v || 'This field is required'],
      passwordRules: [
        v => !!v || 'This field is required',
        v => v === this.password || 'Passwords do not match'
      ],
      checkbox: false
    }
  },
  methods: {
    handleSubmit() {
      if (this.$refs.form.validate()) {
        console.log('data submited')
      }
    }
  },
  computed: {
    isTablet() {
      const mdDown = this.$store.state.breakpoints.mdDown
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdDown.indexOf(this.$mq) > -1 && mdUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    },
    isMobile2() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
