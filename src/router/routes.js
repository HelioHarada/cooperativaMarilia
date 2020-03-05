
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Lista.vue') },
      { path: 'cadastrar', component: () => import('pages/Cadastrar.vue') },
      { path: 'editarLista', component: () => import('pages/EditarLista.vue') },
      { path: 'editarDoenca/:id', name : 'editarDoenca', component: () => import('pages/EditarDoenca.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
