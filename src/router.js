import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Shop from './pages/Shop.vue'
import AboutUs from './pages/AboutUs.vue'
import ContactUs from './pages/ContactUs.vue'
import BlogPage from './pages/BlogPage.vue'
import BlogPost from './components/BlogPost.vue'
import Cart from './pages/Cart.vue'
import ProductDetails from './components/ProductDetails.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/shop', component: Shop },
    { path: '/about', component: AboutUs },
    { path: '/contact', component: ContactUs },
    { path: '/blog', component: BlogPage },
    { path: '/:notFound(.*)', redirect: '/' },
    { path: '/post/:id', name: 'blogPost', component: BlogPost },
    { path: '/cart', component: Cart },
    { path: '/pro', name: 'productDetails', component: ProductDetails },



];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
});

export default router;