<template>
    <div class="container px-md-0">
        <div class="row " style="margin-top: -40px;">
            <div class="col-12">
                <div class="col-12" v-if="showHeader && projectStore.projectRecommendTeamStudents.length">
                    <div class="d-flex justify-content-between align-items-start flex-wrap">
                        <p  class="text-800 fs-32 fw-semibold me-3">
                            ស្នាដៃសិស្សបានបញ្ចប់វគ្គសិក្សា {{ projectStore.project.course.course_name }}
                        </p>

                        <RouterLink to="/StudentProject" class="text-primary-500 fs-16 mt-1 mt-md-3">
                            {{ linkText }}
                            <i v-if="linkIcon" :class="linkIcon"></i>
                        </RouterLink>
                    </div>
                </div>
                <div class="row" v-if="projectStore.projectRecommendTeamStudents.length">
                    <StudentCard v-for="(project, index) in projectStore.projectRecommendTeamStudents" :key="index" :project="project" />
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { useProjectStore } from "@/stores/pages/studentProject/project";
import StudentCard from '@/components/pages/detailCourse/StudentCard.vue';
import { onMounted } from "vue";
import { useRoute } from 'vue-router';

const router = useRoute();
const projectStore = useProjectStore();

onMounted(async () => {
    await projectStore.getProjectRecommendTeamStudent(router.params.id);  
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