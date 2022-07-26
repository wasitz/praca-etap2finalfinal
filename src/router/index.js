import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductManager from '../views/ProductManager.vue'
import AddProduct from '../views/AddProduct.vue'
import EditProduct from '../views/EditProduct.vue'
import ViewProduct from '../views/ViewProduct.vue'
import PageNotFound from '../views/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: "/products",
    component: HomeView
  },
  {
    path: '/products',
    name: 'ProductManager',
    component: ProductManager
  },
  {
    path: '/products/add',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/products/edit/:productId',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/products/view/:productId',
    name: 'ViewProduct',
    component: ViewProduct
  },
  {
    path: '/:pathMatch(.*)',
    name: 'PageNotFound',
    component: PageNotFound
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
