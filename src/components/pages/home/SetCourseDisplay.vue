<template>
    <section>
            <div class="container bg-white rounded-4 px-4 ">
                <div class="row ">
                    <div class="col-12 py-4">
                        <div class="d-flex align-items-center">
                            <div class="bg-primary-500 text-white rounded-circle d-flex align-items-center justify-content-center"
                                style="width: 30px; height: 30px;">
                                <i class="bi bi-search"></i>
                            </div>
                            <p class="fs-20 fw-semibold text-800 ms-3 mb-0">កំណត់ការបង្ហាញវគ្គសិក្សា</p>
                        </div>
                        <div class="mt-2">
                            <p class="text-700">
                                កំណត់ការបង្ហាញវគ្គសិក្សាជួយឲ្យអ្នកអាចស្វែងរកវគ្គសិក្សាដែលអ្នកចង់រកបានយ៉ាងឆាប់រហ័ស</p>
                        </div>
                        <div class="row">
                            <form @submit.prevent="onSearchNewCourse()" class="row">
                                <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xxl-3">
                                    <div class="position-relative d-flex justify-content-between">
                                        <input type="text"
                                            class="form-control bg-body border-0 shadow-none fs-14 py-3 rounded-5"
                                            id="exampleFormControlInput1" placeholder="ស្វែងរកវគ្គសិក្សា..." style="height: 40px;" v-model="classroomStore.search">
                                        <div class="position-absolute top-50 end-0 translate-middle-y me-2 bg-white text-700 rounded-circle d-flex align-items-center justify-content-center"
                                            style="width: 24px; height: 24px;">
                                            <i class="bi bi-search"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xxl-3 mt-3 mt-md-0">
                                    <div class="d-flex align-items-center position-relative">
                                        <select class="form-select bg-body border-0 shadow-none fs-14 text-700 rounded-5"  v-model="classroomStore.subject">
                                            <option selected value="">មុខវិជ្ជា</option>
                                            <option v-for="subject in subjectStore.getSubjects" :key="subject.id" :value="subject.id" >
                                            {{ subject.name }}
                                            </option>
                                        </select>
                                        <div class="position-absolute top-50 end-0 translate-middle-y me-2 bg-white text-700 rounded-circle d-flex align-items-center justify-content-center"
                                            style="width: 24px; height: 24px;">
                                            <i class="bi bi-chevron-down fw-bolder"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xxl-3 mt-3 mt-md-0">
                                    <div class="d-flex align-items-center position-relative">
                        
                                        <select class="form-select bg-body border-0 shadow-none fs-14 text-700 rounded-5"  v-model="classroomStore.start_time">
                                            <option  value="">ម៉ោងសិក្សា</option>
                                            <option  value="9:00">៩:០០​ - ១០:៣០</option>
                                            <option  value="11:00">១១:០០​ - ១២:២០</option>
                                            <option  value="13">១៣:៥០ - ១៥: ២០</option>
                                            <option  value="15">១៥:៣០ - ១៧:០០</option>
                                            
                                        </select>
                                        <div class="position-absolute top-50 end-0 translate-middle-y me-2 bg-white text-700 rounded-circle d-flex align-items-center justify-content-center"
                                            style="width: 24px; height: 24px;">
                                            <i class="bi bi-chevron-down"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-6 col-xxl-3 mt-3 mt-md-4 mt-xxl-0">
                                    <div class="d-flex align-items-center ">
                                        <button class="btn btn-cus-primary rounded-5" type="submit"
                                            :disabled="classroomStore.loading.search">
                                            {{ classroomStore.loading.search ? 'កំពុងបង្ហាញ...' :
                                                'បង្ហាញវគ្គសិក្សា' }}<i class="bi bi-chevron-right ms-1"></i>
                                        </button>
                                        <button type="submit" class="btn btn-cus-primary rounded-5 ms-md-4 ms-3" @click="refreshData()">កំណត់ឡើងវិញ<i class="bi bi-arrow-clockwise ms-1"></i></button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <CardHome/>
</template>
<script setup>

import {useSubjectStore} from '@/stores/pages/homepage/subject';
import CardHome from '@/components/pages/home/CardHome.vue';
import { useClassroom } from "@/stores/pages/homepage/classroom";
import {onMounted} from 'vue'



const classroomStore = useClassroom()
const subjectStore = useSubjectStore();

onMounted(async () => {
   await subjectStore.subjectsData();
   await classroomStore.loadClassroom();

}) 

const onSearchNewCourse = async () => {
  try {
    classroomStore.loading.search = true;
    await classroomStore.loadClassroom();
    classroomStore.loading.search = false;
    
  } catch (error) {
  }
};
const refreshData = async ()=>{
    classroomStore.subject = '';
    classroomStore.search = '';
    classroomStore.start_time = '';
    await classroomStore.loadClassroom();
}


</script>

