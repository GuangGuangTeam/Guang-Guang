import Index from './view/index.vue'
import Main from './view/main/main.vue'
import Classify from './view/classify/classify.vue'
import Brand from './view/brand/brand.vue'
import Cart from './view/cart/cart.vue'
import Home from './view/home/home.vue'

export default [
  {
    path: '/',
    component: Index,
    redirect: '/main',
    children: [
      {
        path: '/main',
        component: Main
      },
      {
        path: '/classify',
        component: Classify
      }
      
    ]
  },
  {
    path: '/brand',
    component: Brand
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/home',
    component: Home
  }
//   {
//     path: '/detail/:id',
//     component: Detail,
//     name: 'detail'
//   }
]
