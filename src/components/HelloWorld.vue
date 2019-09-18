<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>11</h2>
    <pre style="text-align: left;tab-size: 19px">
      <h2>编程式导航</h2>
    方法定义:router.push(location, onComplete?, onAbort?)
    const userId = '123'
    router.push({ name: 'user', params: { userId }}) // -> /user/123
    router.push({ path: `/user/${userId}` }) // -> /user/123
    // 这里的 params 不生效
    router.push({ path: '/user', params: { userId }}) // -> /user

    router.replace(location, onComplete?, onAbort?)
    跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。

    声明式	编程式
    &lt;router-link :to="..." replace&gt;	router.replace(...)
    #router.go(n)
    这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 window.history.go(n)。
      <h2>命名路由</h2>
      const router = new VueRouter({
        routes: [
          {
            path: '/user/:userId',
            name: 'user',
            component: User
          }
        ]
      })

      &lt;router-link :to="{ name: 'user', params: { userId: 123 }}"&gt;User&lt;/router-link&gt;
      router.push({ name: 'user', params: { userId: 123 }})
      <h2>命名试图</h2>
      router-view 没有设置名字，那么默认为 default
      &lt;div&gt;
        &lt;h1&gt;User Settings&lt;/h1&gt;
        &lt;NavBar/&gt;
        &lt;router-view/&gt;
        &lt;router-view name="helper"/&gt;
      &lt;/div&gt;

      {
      path: '/settings',
      // 你也可以在顶级路由就配置命名视图
      component: UserSettings,
      children: [{
        path: 'emails',
        component: UserEmailsSubscriptions
      }, {
        path: 'profile',
        components: {
          default: UserProfile,
          helper: UserProfilePreview
        }
      }]
    }
    </pre>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    username () {
      // 我们很快就会看到 `params` 是什么
      return this.$route.params.username
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
