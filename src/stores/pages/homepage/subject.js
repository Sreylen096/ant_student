import axios from 'axios'
import { defineStore } from 'pinia';
export const useSubjectStore = defineStore('subject', {
    state: () => ({
        getSubjects: [],
    }),
    actions: {
        async subjectsData() {
            const resGetSubjects = await axios.get(`subjects`)
            this.getSubjects = resGetSubjects.data.data;
          },
    },
    
    
  
})