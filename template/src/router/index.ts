import Vue, {AsyncComponent} from 'vue'
import Router, { RouteConfig, Route, NavigationGuard } from 'vue-router'

// const HelloWorld: AsyncComponent = (): any => import('../components/HelloWorld.vue')

const HelloWorld:AsyncComponent  = (resolve) => {
  require.ensure([],() => {
    resolve(require('../components/HelloWorld.vue'))
  })
}

Vue.use(Router)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Hello',
    component: HelloWorld
  }
]

const route: Router  = new Router({
  mode: 'history',
  routes,
})

export default route
