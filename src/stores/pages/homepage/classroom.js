import { defineStore } from 'pinia'
import axios from 'axios'

export const useClassroom = defineStore('classroom', {
    state: () => ({
        classrooms:[],
        classroom_detail:[],
        course_outline:[],
        courses: [],
        projectStudentRecomment:[],

        search: "",
        subject:"",
        start_time:"",
        sort_col: "id", // created_at
        filter_time:'',
        filter_col: [],
        selected_id: 0,
        sort_dir: 'desc',
        loading: {
            search: false,
        },

    }),
    actions: {
        async loadClassroom() {
            const resClassrooms = await axios.get(`classrooms?page=1&per_page=8&search=${this.search}&filter_col=[subject_id, start_time]&filter_sub=${this.subject}&filter_start_time=${this.start_time}&sort_col=${this.sort_col}&sort_dir=${this.sort_dir}`)
            this.classrooms = resClassrooms.data.data;
          },

        async loadClassroomDetail(id) {
        const resClassroomDetail = await axios.get(`classrooms/${id}`)
        this.classroom_detail = resClassroomDetail.data.data;
        },

        async loadCourseOutlineDetail(id){
            const restCourseOutline = await axios.get(`courses/outlines/${id}`)
            this.course_outline = restCourseOutline.data.data;
        },
        
        async loadStudentProjectRecomment(course_name){
            const restprojectStudentRecomment = await axios.get(`/projects/course/recommend?course_name=${course_name}`)
            this.projectStudentRecomment = restprojectStudentRecomment.data.data;
        }
    },
})