<template>
    <h2 title="ស្នាដៃសិស្សបានបញ្ចប់វគ្គសិក្សា HTML CSS"></h2>
    <div class="container px-md-0">
        <div class="row " style="margin-top: -40px;">
            <div class="col-12">
                <div class="col-12" v-if="showHeader">
                    <div class="d-flex justify-content-between align-items-start flex-wrap">
                        <p  class="text-800 fs-32 fw-semibold me-3" v-for="(project, index) in classroomStore.projectStudentRecomment.slice(0, 1)" :key="index">
                            ស្នាដៃសិស្សបានបញ្ចប់វគ្គសិក្សា {{ project.course.course_name }}
                        </p>

                        <RouterLink to="/StudentProject" class="text-primary-500 fs-16 mt-1 mt-md-3">
                            {{ linkText }}
                            <i v-if="linkIcon" :class="linkIcon"></i>
                        </RouterLink>
                    </div>
                </div>
                <div class="row">
                    <StudentCard v-for="(project, index) in classroomStore.projectStudentRecomment" :key="index" :project="project" />
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { useClassroom } from "@/stores/pages/homepage/classroom";
import StudentCard from './StudentCard.vue';
import { onMounted } from "vue";
import { useRoute } from 'vue-router';

const router = useRoute();
const classroomStore = useClassroom();

onMounted(async () => {
    await classroomStore.loadClassroomDetail(router.params.id);
    await classroomStore.loadStudentProjectRecomment(classroomStore.classroom_detail.course.course_name);
    
});


defineProps({
    showHeader: {
        type: Boolean,
        default: true,
    },
    title: {
        type: String,
        default: "",
    },
    link: {
        type: String,
        default: "#",
    },
    linkText: {
        type: String,
        default: "",
    },
    linkIcon: {
        type: String,
        default: null,
    },
});

</script>