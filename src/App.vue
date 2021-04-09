<i18n>
{
  "en": {
    "helloWorld": "Welcome to Your Vue.js App"
  },
  "ja": {
    "helloWorld": "ようこそ、あなたのVue.jsアプリへ"
  }
}
</i18n>

<template>
  <div id="app">
    <select v-model="locale" class="locale">
      <option value="en">English</option>
      <option value="ja">日本語</option>
    </select>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="$t('helloWorld')"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  computed: {
    locale: {
      get() {
        return this.$i18n.locale
      },
      set(locale) {
        this.$i18n.locale = locale
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.locale {
  position: fixed;
  top: 16px;
  right: 20px;
}
</style>
