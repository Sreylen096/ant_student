<template>
    <div class="bg-white rounded-4">
        <div class="p-4">
            <p class="fs-20 text-800 fw-semibold">ស្នាដៃសិស្សទើបបញ្ចប់ថ្មីៗ</p>
            <div v-for="(card, index) in projectStore.projectNewRecommends" :key="index">
                <a href="#" @click.prevent="viewStudentDetail(card.id)">
                    <SmallCard
                    :image="card.website_photo"
                    :title="card.name"
                    :subject="card.course.course_name"
                    :creator="card.students.length > 1 ? card.team.name : card.students[0].english_name"
                    :isTeam="card.students.length > 1"
                    :deadline="card.finished_at_format"
                />
                </a>
            </div>
        </div>
    </div>
</template>


<script setup>

import { onMounted } from 'vue';
import { useProjectStore } from '@/stores/pages/studentProject/project';
import SmallCard from './SmallCard.vue';
import { useRouter } from 'vue-router';

const projectStore = useProjectStore();
const router = useRouter();

onMounted(async() => {
    await projectStore.getProjectRecommend();
    await projectStore.getProject();
})

const viewStudentDetail = async (id) => {
    router.push(`/DetailPage/StudentProjectDetail/${id}`)
};


</script>