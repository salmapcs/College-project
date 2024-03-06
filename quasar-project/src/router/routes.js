
const routes = [
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue')
      },
        { path: 'find-job', component: () => import('src/components/modules/find-job/Search-filters.vue')
      },
    ]
  },


  // {
  //   path: '/',
  //   component: () => import('layouts/HomeLayout.vue'),
  //   children: [
      
  //     { path: 'home', component: () => import('') },
      
  //     { path: 'post-job', component: () => import('') },
  //     { path: 'about', component: () => import('') },
  //     { path: 'contact', component: () => import('') },
  //   ]
  // },


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
              props:route =>{
                return route?.query
              }
            },
            
            // {
            //   path: 'login', component: () => import('components/modules/auth/CandidateLogin.vue'),
            // },
            
            // {
            //   path: 'signup', component: () => import('components/modules/auth/CandidateSignup.vue'),
            // },
            // {
            //  {path: 'ForgotPassword', component: () => import('components/modules/auth/ForgotPassword.vue'),
            // },
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
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      {
        path: '', component: () => import('pages/recruiter/HomePage.vue')

      },
      {
        path: 'auth',
        component: () => import('pages/recruiter/AuthPage.vue'),

        children: [
          {
            path: 'login', component: () => import('components/modules/auth/RecruiterLogin.vue'),
          },
          {
            path: 'signup', component: () => import('components/modules/auth/RecruiterSignup.vue'),
          },
          {
            path: 'ForgotPassword', component: () => import('components/modules/auth/RecruiterForgotPassword.vue'),
          },
        ]
      },
      {
        path: 'profile',
        component: () => import('pages/recruiter/ProfilePage.vue'),
        children: [
          {
            path: 'recruiter', component: () => import('components/modules/profile/RecruiterProfile.vue'),
          },
          {
            path: 'education', component: () => import('components/modules/profile/RecruiterProfile.vue'),
          },
          {
            path: 'experience', component: () => import('components/modules/profile/recruiterHomePage.vue'),
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
