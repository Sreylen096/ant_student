import axios from 'axios';
import { defineStore } from 'pinia'

export const useStudentStore = defineStore("student", {
  state: () => ({
    student: {
      id: '',
      full_name: '',
      english_name: '',
      gender: '',
      phone_number: '',
      years: '',
      email: '',
      dob: '',
      register_at: '',
      photo: '',
      school_id: '',
      fb_name: '',

    },
    students: [],
  }),
  actions: {
    async getStudent(id) {
      const res = await axios.get(`projects/students/get/${id}`);
      this.student = res.data.data;
      console.log("Get Students", this.student);
    }
  }
    
})