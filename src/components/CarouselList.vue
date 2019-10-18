<template>
  <div>
    <div class="block">
      <span class="demonstration">默认 Hover 指示器触发</span>
      <el-carousel height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <!--<h3 class="small">{{ item }}</h3>-->
          <!--<img src="@/assets/img/1.jpg">-->
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="block">
      <span class="demonstration">Click 指示器触发</span>
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <el-tooltip :content="'Switch value: ' + value" placement="top">
      <el-switch
        value="100"
        @change = "valueChange"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-value="100"
        inactive-value="0">
      </el-switch>
    </el-tooltip>
  </div>
</template>

<script>
  import axios from '@/utils/api.request'

  export default {
    name: 'CarouselList',
    methods:{
      valueChange (value) {
        console.log("value:"+value);
        return 0;
      }
    },
    data(){
      return {
        value:100
      }
    }
  }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
