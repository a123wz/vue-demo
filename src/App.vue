<template>
  <div id="app">
    <CarouselList></CarouselList>
    <FormTest></FormTest>
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
  import CarouselList from "./components/CarouselList"
  import FormTest from "./components/FormTest"
  export default {
    name: 'App',
    components:{
      CarouselList:CarouselList,
      FormTest:FormTest
    }
  }
</script>

<style>
  body{
    margin:0px;
    padding:0px;
    text-align: center;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0px auto;
    width: 100%;
    max-width: 700px;
  }
</style>
