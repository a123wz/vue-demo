<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
    <router-link to="/user/11">user</router-link>
    <router-link to="/user-bb">获取通配符参数</router-link>
    <router-link to="/">home</router-link>
    <router-link to="/downExcel">下载</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
