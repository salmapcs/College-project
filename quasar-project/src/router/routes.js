
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [ 
    { path: '',
        component: () => import('pages/IndexPage.vue'),
    
      },


      {
        path: '/form',
        component: () => import('layouts/formlayout.vue'),
        children: [
          {
            path: '',
            component: () => import('pages/formpage.vue'),
            children:[
              {
                path: 'about',
                component: () => import('components/modules/form/about.vue'),  
              },
              {
                path: 'contact',
                component: () => import('components/modules/form/contact.vue'),  
              },
              {
                path: 'education',
                component: () => import('components/modules/form/education.vue'),  
              },
              {
                path: 'project',
                component: () => import('components/modules/form/project.vue'),  
              },
              {
                path: 'skills',
                component: () => import('components/modules/form/skills.vue'),  
              },
            ]
          }
        ]
      }         
      
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/formlayout.vue'),
   
  }

]
export default routes
