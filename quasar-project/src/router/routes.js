
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/candidate/HomePage.vue') },
      {
        path: 'auth',
        component: () => import('pages/candidate/AuthPage.vue'),
        children: [
          { path: 'login', component: () => import('components/modules/auth/CandidateLogin.vue'), },
          { path: 'signup', component: () => import('components/modules/auth/CandidateSignup.vue'), },
          { path: 'password', component: () => import('components/modules/auth/ForgotPassword.vue'), }
        ]
      },
      { path: 'profile', component: () => import('pages/candidate/ProfilePage.vue') },
      { path: 'profile', component: () => import('pages/candidate/ProfilePage.vue') },

    ]
  },




  
  {
    path: '/recruiter',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'Home', component: () => import('pages/recruiter/HomePage.vue') },
      { path: 'profile', component: () => import('pages/recruiter/ProfilePage.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),

  }

]
export default routes
