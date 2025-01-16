import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import NewOpeningCourseView from '@/views/pages/NewOpeningCourse/NewOpeningCourseView.vue'
import DetailCourseView from '@/views/pages/DetailCourse/DetailCourseView.vue'
import StudentProjectView from '@/views/pages/StudentProject/StudentProjectView.vue'
import StudentProjectDetailView from '@/views/pages/DetailPage/StudentProjectDetail/StudentProjectDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/NewOpeningCourse',
      name: 'NewOpeningCourse',
      component: NewOpeningCourseView
    },
    {
      path: '/DetailCourse',
      name: 'DetailCourseView',
      component: DetailCourseView
    },
    {
      path: '/StudentProject',
      name: 'StudentProjectView',
      component: StudentProjectView
    },
    {
      path: "/DetailPage/StudentProjectDetail/:id",
      name: "DetailPage.StudentProjectDetailView",
      component: StudentProjectDetailView
    },
   
  ]
})

export default router
