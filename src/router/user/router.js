
const User = {
  template: `
    <div class="user">
      <h2>接受参数: {{ $route.params.id }}</h2>
      <h2>通配符参数: {{$route.params.pathMatch}}</h2>
      <router-link to="/user/11/profile">嵌套路由</router-link>
      <router-view></router-view>
    </div>
  `
}
// const User = {
//   template: '<div>接受参数: {{ $route.params.id }}' +
//     ' 通配符参数: {{$route.params.pathMatch}}</div>'
// }
// 点击 <router-link :to="..."> 等同于调用 router.push(...)
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
// const routes = [
//
// ]
const UserProfile = { template: '<div>UserProfile</div>' }
const UserPosts = { template: '<div>UserPosts</div>' }

const userRouter = [{ path: '/user/:id', component: User, children: [
  {
    // 当 /user/:id/profile 匹配成功，
    // UserProfile 会被渲染在 User 的 <router-view> 中
    path: 'profile',
    component: UserProfile
  },
  {
    // 当 /user/:id/posts 匹配成功
    // UserPosts 会被渲染在 User 的 <router-view> 中
    path: 'posts',
    component: UserPosts
  }
]
},
{ path: '/user-*', component: User}]

export default userRouter
