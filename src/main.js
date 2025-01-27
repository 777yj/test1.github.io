// import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


// import { createApp } from 'vue';
// import { createRouter, createWebHistory } from 'vue-router';
// import router from './router'

// import App from './App.vue';
// import HomeYear from './Home/components/HomeYear.vue';
// import AboutOur from './Home/components/AboutOur.vue';
// import ProductCenter from './Home/components/ProductCenter.vue';
// import NewsNews from './Home/components/NewsNews.vue';
// import EngineeringCases from './Home/components/EngineeringCases.vue';
// import ContactLe from './Home/components/ContactLe.vue';

// const routes = [
//   { path: '/', component: HomeYear },
//   { path: '/about', component: AboutOur },
//   { path: '/product-center', component: ProductCenter },
//   { path: '/news', component: NewsNews },
//   { path: '/engineering-cases', component: EngineeringCases },
//   { path: '/contact', component: ContactLe }
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// });

// const app = createApp(App);
// app.use(router);
// app.mount('#app');