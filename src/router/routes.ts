import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/purchases',
        name: 'purchases',
        component: () => import('pages/purchases/PageIndex.vue')
      },
      {
        path: '/new-purchase',
        name: 'newPurchase',
        component: () => import('pages/purchases/PageForm.vue')
      },
      {
        path: '/purchase-items',
        name: 'purchaseItems',
        component: () => import('pages/purchases/PurchaseItems.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
