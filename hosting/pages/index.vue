<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          @seike460が主催しているフットサルです
        </v-card-title>
        <hr class="my-3" />
        <v-card-text>
          <p>
            参加資格は特にありません。フェアプレーでお願いします！
          </p>
          <p>
            次回開催日：6/15
          </p>
          <p>
            次回開催場所：
            <a href="https://goo.gl/maps/1uFMpbxif26js7hc8" target="_blank"
              >ピヴォーレ福岡</a
            >
          </p>
        </v-card-text>
        <hr class="my-3" />
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" flat nuxt to="/join">
            参加する方はこちら</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    VuetifyLogo
  }
}
</script>
