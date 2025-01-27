import { createRouter, createWebHistory } from 'vue-router'
// import AboutOur from '@/Home/components/AboutOur.vue'
// import ContactLe from '@/Home/components/ContactLe.vue'
// import EngineeringCases from '@/Home/components/EngineeringCases.vue'
// import HomeYear from '@/Home/components/HomeYear.vue'
// import NewsNews from '@/Home/components/NewsNews.vue'
// import ProductCenter from '@/Home/components/ProductCenter.vue'
import Home from '@/views/Home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // routes
  routes: [
    {
    path: '/',
    name: 'Home',
    component: Home
  }
  //   {
  //     path:'/',
  //     component:App,
  //     children:[
  //       { path:'/HomeYear',
  //         component:HomeYear
  //       },
  //       {
  //         path:'/NewsNews',
  //         component:NewsNews
  //       },
  //       {
  //         path:'/ContactLe',
  //         component:ContactLe
  //       },
  //        {
  //         path:'/EngineeringCases',
  //         component:EngineeringCases
  //       },
  //       {
  //         path: '/ProductCenter',
  //         component:ProductCenter
  //       },
  //       {
  //         path: '/AboutOur',
  //         component:AboutOur
  //       }
  //     ]
  //   }
  ],
})

export default router
