

<template>
    <div class="bg-white rounded-4 me-2 me-md-0">
        <div class="p-4">
            <div class="row">
                <div class="col-12">
                    <div class="row align-items-center">
                        <div class="col-12 col-lg-6">
                            <p class="text-800 fs-20 fw-semibold mb-md-0">វគ្គសិក្សា {{ classroomStore.classroom_detail.class_name }}</p>
                        </div>
                        <div class="col-12 col-lg-6 d-flex justify-content-lg-end mb-3 mt-lg-0 mt-md-3">
                            <form>
                                <button class="btn btn-primary rounded-5 fs-16" type="button"
                                    @click="redirectToTelegram">
                                    <i class="bi bi-telegram me-2"></i>ទំនាក់ទំនងចុះឈ្មោះសិក្សា
                                </button>
                            </form>
                        </div>
                    </div>
                 
                    <p v-if="classroomStore.classroom_detail && classroomStore.classroom_detail.course" 
                        class="text-800 fs-18 fw-medium mb-2">
                        តម្លៃ៖​ {{ classroomStore.classroom_detail.course.price }}$
                    </p>
                    <p v-else class="text-800 fs-18 fw-medium mb-2">Loading price...</p>
                    <p v-if="classroomStore.classroom_detail && classroomStore.classroom_detail.course" 
                       class="text-800 fs-18 fw-medium mb-2">
                       ​សិក្សារយៈពេល ៖ {{ classroomStore.classroom_detail.course.total_time }} ម៉ោង
                    </p>
                    <p v-if="classroomStore.classroom_detail && classroomStore.classroom_detail.course" 
                       class="text-800 fs-18 fw-medium mb-2">
                       សិក្សាពីថ្ងៃ {{ classroomStore.classroom_detail.course.study_start_day }} 
                       ដល់ {{ classroomStore.classroom_detail.course.study_end_day }} 
                    </p>
                    <p v-if="classroomStore.classroom_detail && classroomStore.classroom_detail.course" 
                       class="text-800 fs-18 fw-medium mb-2">
                       ម៉ោង​ {{ classroomStore.classroom_detail.course.study_times }}
                    </p>
                    <p v-if="classroomStore.classroom_detail && classroomStore.classroom_detail.course" 
                       class="text-800 fs-16 text-justify">
                       {{ classroomStore.classroom_detail.course.overview }}
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <p class="text-800 fs-20 fw-semibold mt-2 mb-0">គ្រោងនៃការសិក្សា</p>
                    <div class="accordion" v-for="outline in classroomStore.course_outline.outlines" :key="outline">
                        <div class="accordion-item">
                            
                            <p class="accordion-header">
                                <button class="accordion-button text-700 fs-18 fw-medium" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                    aria-controls="collapseOne">
                                    {{ outline.name }}
                                </button>
                            </p>
                            <div id="collapseOne" class="accordion-collapse collapse show"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body text-700">
                                    {{ outline.description }}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script setup>
import { useClassroom } from "@/stores/pages/homepage/classroom";
import { onMounted } from "vue";
import { useRoute } from 'vue-router';

const router = useRoute();
const classroomStore = useClassroom();

// Load classroom detail onMounted
onMounted(async () => {
   await classroomStore.loadClassroomDetail(router.params.id);
    if(classroomStore.classroom_detail.course.course_outline){
        await classroomStore.loadCourseOutlineDetail(classroomStore.classroom_detail.course.course_outline.id);
    }else{
        classroomStore.course_outline.outlines = [];
    }
    
});
  
const telegramLink = 'https://t.me/AntTechnologyTrainingCenter';
const redirectToTelegram = () => {
    window.open(telegramLink, '_blank');
};
</script>