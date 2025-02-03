
import axios from "axios";
import { defineStore } from "pinia";

export const useProjectStore = defineStore("project", {
  state: () => ({
    project: {
      name: "",
      host_domain: "",
      description: "",
      finished_at: "",
      finished_at_format: "",
      website_photo: "",
      course: {
        course_name: "",
      },
      category: {
        id: '',
        name: ''
      },
      students: [
        {
          id:'',
          full_name:'',
          english_name: '',
          gender:'',
          phone_number:'',
          years:'',
          email:'',
          dob:'',
          register_at:'',
          photo:'',
          school_id:'',
          fb_name:'',
          telegram: '',
        }
      ]
    },
    search: "",
    subject:"",
    sort_col: "id",
    category:"",
    filter_col: [],
    filter_cate:"",
    selected_id: 0,
    loading: {
        search: false,
    },
    projects: [],
    categories: [],
    subjects: [],
    projectNewRecommends: [],
    projectRecommendTeamStudents: [],
    students: [],
  }),

  actions: {
    async getProject() {
      const res = await axios.get(`projects?search=${this.search}&filter_col=[category_id,subject_id]&filter_sub=${this.subject}&filter_cate=${this.filter_cate}`)
      this.projects = res.data.data;
      console.log('Stored Project Object:', this.projects);
    },
    async getCategory() {
      const res = await axios.get("categories/");
      this.categories = res.data.data;
    },
    async getSubject(){
      const res = await axios.get("subjects/");
      this.subjects = res.data.data;
    },
    async getProjectRecommend(){
      const res = await axios.get(`projects/course/recommend`);
      this.projectNewRecommends = res.data.data;
    },
    async getDetailProject(id) {
      const res = await axios.get(`projects/${id}`);
      this.project = res.data.data;
    },
    async getProjectRecommendTeamStudent(id){
      const res = await axios.get(`projects/students/team/recommend/${id}`);
      this.projectRecommendTeamStudents = res.data.data;
    }
  },
});
