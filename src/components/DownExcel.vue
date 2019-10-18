<template>
    <div @click="exportTest('sss')">
      下载excel
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "DownExcel",
        methods:{
          exportTest:function (url) {
            exportExcel("/base/credit/record/creditRecordExport");
          }
        }
    }
    var str2utf8 = window.TextEncoder ? function(str) {
      var encoder = new TextEncoder('iso8859-1');
      var bytes = encoder.encode(str);
      var result = '';
      for(var i = 0; i < bytes.length; ++i) {
        result += String.fromCharCode(bytes[i]);
      }
      console.log("test")
      return result;
    } : function(str) {
      return eval('\''+encodeURI(str).replace(/%/gm, '\\x')+'\'');
    }
    function exportExcel(url, options = {}) {
      return new Promise((resolve, reject) => {
        console.log(`${url} 请求数据，参数=>`, JSON.stringify(options))
        axios.defaults.headers['content-type'] = 'application/json;charset=UTF-8';
        // axios.defaults.headers['host']='127.0.0.1'
        // axios.defaults.headers['Authorization'] = 'Bearer fsfsgvsdfs'
        axios({
          method: 'get',
          url: url, // 请求地址
          data: options, // 参数
          responseType: 'blob' // 表明返回服务器返回的数据类型
        }).then(
          response => {
            resolve(response.data)
            console.log(response);
            console.log(response.headers['content-disposition'])
            console.log("返回数据type:{}",response.data.type)
            let blob = new Blob([response.data], {
              type: 'application/vnd.ms-excel'
            })


            // let objectUrl = URL.createObjectURL(blob);  //生成一个url
            // window.location.href = objectUrl;   //浏览器打开这个url

            console.log(blob)
            let fileName = response.headers['content-disposition'].replace("attachment;filename=","")
            console.log("文件名:",str2utf8(fileName));
            if (window.navigator.msSaveOrOpenBlob) {
              // console.log(2)
              navigator.msSaveBlob(blob, fileName)
            } else {
              // console.log(3)
              var link = document.createElement('a')
              link.href = window.URL.createObjectURL(blob)
              link.download = fileName
              link.click()
              //释放内存
              window.URL.revokeObjectURL(link.href)
            }
          },
          err => {
            reject(err)
          }
        )
      })
    }
</script>

<style scoped>

</style>
