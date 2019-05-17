<template>
  <div>
    <!-- ログイン中に表示される画面 -->
    <div v-if="isAuthenticated">
      {{ user.email }}でログイン中です<br />
      <button @v-on:click="logout">ログアウト</button><br />
      <a href="/member-page">メンバーページへ</a>
    </div>
    <!-- ログインしていない時に表示される画面 -->
    <div v-else>
      メール<br />
      <input v-model="email" type="text" /><br />
      パスワード<br />
      <input v-model="password" type="password" /><br />
      <button @v-on:click="login">ログイン</button>
    </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthenticated'])
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      this.setUser(user)
    })
  },
  methods: {
    ...mapActions(['setUser']),
    login() {
      alert(1)
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$router.push('/')
        })
        .catch(error => {
          alert(error)
        })
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.setUser(null)
        })
        .catch(error => {
          alert(error)
        })
    }
  }
}
</script>
