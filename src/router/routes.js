
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/ex1', component: () => import('pages/Exercice1.vue') },
      { path: '/ex2', component: () => import('pages/Exercice2.vue') }
    ]
  }
]

// Always leave this as last one,
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}
export default routes
