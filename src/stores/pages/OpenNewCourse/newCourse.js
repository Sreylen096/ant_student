import { defineStore } from 'pinia'
import axios from 'axios'

export const useNewCourse = defineStore('newCourse', {
    state: () => ({
        categories:[],
        newCourses:[],
        courses: [],
        classroom:{
            image:'',
            title: '',
            schedule: '',
            time: '',
            startDate: '',
            price: '',

        },
        search: "",
        subject:"",
        start_time:"",
        sort_col: "id",
        filter_time:'',
        category:"",
        filter_col: [],
        filter_cate:"",
        selected_id: 0,
        loading: {
            search: false,
        },

    }),
    actions: {
        async loadNewCourse() {
            const resNewCourse = await axios.get(`classrooms/with/categories?search=${this.search}&filter_col=[category_id,subject_id, start_time]&filter_sub=${this.subject}&filter_start_time=${this.start_time}&filter_cate=${this.filter_cate}`)
            this.newCourses = resNewCourse.data.data;
          },
          async loadCategory(){
            const resCategory = await axios.get(`/categories`)
            this.categories = resCategory.data.data;
          }
    },
})