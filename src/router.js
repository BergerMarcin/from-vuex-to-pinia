import { createRouter, createWebHashHistory } from 'vue-router'
import EventList from './views/EventList.vue'
import EventDetails from './views/EventDetails.vue'
import EventCreate from './views/EventCreate.vue'
import ErrorDisplay from './views/ErrorDisplay.vue'
import User from "./views/User.vue"
import About from './views/About.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails
  },
  {
    path: '/event/create',
    name: 'EventCreate',
    component: EventCreate
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/error/:error',
    name: 'ErrorDisplay',
    props: true,
    component: ErrorDisplay
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
