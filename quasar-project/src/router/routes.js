
const routes = [
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/candidate/IndexPage.vue') },
    ]
  },
  {
    path: '/management',

    component: () => import('layouts/ManagementLayout.vue'),
    children: [
      {
        path: '', component: () => import('pages/management/homepage.vue')
      },
      {
        path: 'skills/:mode?',
        component: () => import('pages/management/SkillPage.vue'),
        props:true,
        children:[
          { path: '', component:() =>import('components/modules/management/skills/SkillForm.vue'),props:true}
       ]
      },
      {
        path: 'educations/:mode?',
        component: () => import('pages/management/EducationPage.vue'),
        props:true,
        children:[
          { path: '', component:() =>import('components/modules/management/educations/EducationForm.vue'),props:true}
       ]
      },
      {
        path: 'experiences/:mode?',
        component: () => import('pages/management/ExperiencePage.vue'),
        props:true,
        children:[
          { path: '', component:() =>import('components/modules/management/experience/ExperienceForm.vue'),props:true}
       ]
      },
      {
        path: 'post-job/:mode?',
        component: () => import('pages/management/PostJobPage.vue'),
        props:true,
        children:[
          { path: '', component:() =>import('components/modules/management/job/PostJobForm.vue'),props:true}
       ]
      },
      // {
      //   path: 'skills', component: () => import('pages/management/SkillPage.vue'),
      //   children: [
      //     {
      //       path: ':mode/:id?',
      //       component: () => import('components/modules/management/SkillForm.vue'),
      //       props: true
      //     }
      //   ]
      // },
      {
        path: 'Dashboard', component: () => import('pages/management/DashboardPage.vue'),
        children: [
          {
            path: ':mode/:id?',
            component: () => import('components/modules/management/DashboardForm.vue'),
            props: true
          }
        ]
      },
    ]
  },

  {
    path: '/management',

    component: () => import('layouts/BlankLayout.vue'),
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
        path: 'basic',
        component: () => import('pages/candidate/ProfilePage.vue'),
        children: [
          {
            path: '', component: () => import('components/modules/profile/CandidateBasic.vue'),
          },
          {
            path: 'education', component: () => import('components/modules/profile/CandidateEducation.vue'),
          },
          {
            path: 'experience', component: () => import('components/modules/profile/CandidateExperience.vue'),
          },
        ]
      },
      {
        path: 'contact',
        component: () => import('pages/candidate/ContactPage.vue'),
        children: [
          {
            path: '', component: () => import('components/modules/Home/ContactForm.vue'),
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
