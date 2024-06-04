
const routes = [
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/candidate/IndexPage.vue') },
      { path: 'jobs', component: () => import('pages/candidate/JobList.vue') },
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
        path: 'job-applications/:mode?/:id?',
        component: () => import('pages/management/JobApplicationsPage.vue'),
        props: true,
        children: [
          { path: '', component: () => import('components/modules/management/Jobs/JobApplications/Form.vue'), props: true }
        ]
      },
      {
        path: 'post-job/:mode?/:id?',
        component: () => import('pages/management/PostJobPage.vue'),
        props: true,
        children: [
          { path: '', component: () => import('components/modules/management/Jobs/JobPosting/Form.vue'), props: true }
        ]
      },
      {
        path: 'candidates/:mode?/:id?',
        component: () => import('pages/management/CandidatePage.vue'),
        props: true,
        children: [
          { path: '', component: () => import('components/modules/management/Candidate/candidates/Form.vue'), props: true }
        ]
      },
      {
        path: 'skills/:mode?/:id?',
        component: () => import('pages/management/SkillPage.vue'),
        props: true,
        children: [
          { path: '', component: () => import('components/modules/management/skills/Form.vue'), props: true }
        ]
      },
      {
        path: 'industries/:mode?/:id?',
        component: () => import('pages/management/IndustryPage.vue'),
        props: true,
        children: [
          { path: '', component: () => import('components/modules/management/Industries/Form.vue'), props: true }
        ]
      },
      {
        path: 'qualifications/:mode?/:id?',
        component: () => import('pages/management/QualificationPage.vue'),
        props: true,
        children: [
          { path: '', component: () => import('components/modules/management/Qualifications/Form.vue'), props: true }
        ]
      },
      {
        path: 'jobcategory/:mode?/:id?',
        component: () => import('pages/management/JobCategoryPage.vue'),
        props: true,
        children: [
          { path: '', component: () => import('components/modules/management/JobCategory/Form.vue'), props: true }
        ]
      },
      {
        path: 'employers/:mode?/:id?',
        component: () => import('pages/management/EmployerPage.vue'),
        props: true,
        children: [
          { path: '', component: () => import('components/modules/management/Employers/Form.vue'), props: true }
        ]
      },
      {
        path: 'educations/:mode?/:id?',
        component: () => import('pages/management/EducationPage.vue'),
        props: true,
        children: [
          { path: '', component: () => import('components/modules/management/Candidate/Educations/Form.vue'), props: true }
        ]
      },
      {
        path: 'experiences/:mode?/:id?',
        component: () => import('pages/management/ExperiencePage.vue'),
        props: true,
        children: [
          { path: '', component: () => import('components/modules/management/Candidate/Experiences/Form.vue'), props: true }
        ]
      },
 
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
        path: 'profile/:step',
        component: () => import('pages/candidate/ProfilePage.vue'),
        props: true
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
    ]
  },

  {
    path: '/recruiter',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      {
        path: 'auth',
        component: () => import('pages/recruiter/AuthPage.vue'),
        children: [
          {
            path: 'login',
            component: () => import('components/modules/auth/RecruiterLogin.vue')
          },
          {
            path: 'singup',
            component: () => import('components/modules/auth/RecruiterSignup.vue')
          },
          {
            path: 'forgotpassword',
            component: () => import('components/modules/auth/RecruiterForgotPassword.vue')
          },
        ]
      }
    ]
  },


  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),

  }

]
export default routes
