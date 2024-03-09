
const routes = [
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
    ]
  },



  {
    path: '/management',

    component: () => import('layouts/LoginLayout.vue'),
    children: [
      {
        path: 'auth',
        component: () => import('pages/management/AuthPage.vue'),

        children: [
          {
            path: 'login', component: () => import('components/modules/management/ManagementLogin.vue'),
          },
          {
            path: 'signup', component: () => import('components/modules/management/ManagementSignup.vue'),
          },
          {
            path: 'ForgotPassword', component: () => import('components/modules/management/ManagementForgotPassword.vue'),
          },
        ]
      },

    ]
  },





  {
    path: '/candidate',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      {
        path: '', component: () => import('pages/candidate/HomePage.vue')
      },
      {
        path: 'auth',
        component: () => import('pages/candidate/AuthPage.vue'),
        children: [
          {
            path: '', component: () => import('components/modules/auth/CandidateAuth.vue'),
            props: route => {
              return route?.query
            }
          },
        ]
      },
      {
        path: 'profile',
        component: () => import('pages/candidate/ProfilePage.vue'),
        children: [
          {
            path: 'profile', component: () => import('components/modules/profile/CandidateProfile.vue'),
          },
          {
            path: 'education', component: () => import('components/modules/profile/CandidateEducation.vue'),
          },
          {
            path: 'experience', component: () => import('components/modules/profile/CandidateExperience.vue'),
          },
        ]
      },
    ]
  },



  {
    path: '/recruiter',
    component: () => import('layouts/RecruiterLayout.vue'),
    children: [
      {
        path: '', component: () => import('pages/recruiter/HomePage.vue')

      },
      {
        path: 'auth',
        component: () => import('pages/recruiter/AuthPage.vue'),
        children: [
          {
            path: '', component: () => import('components/modules/auth/RecruiterAuth.vue'),
            props: route => {
              return route?.query
            }
          },
        ]
      },
      

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
