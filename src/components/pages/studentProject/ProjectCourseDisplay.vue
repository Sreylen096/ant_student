<template>
    <section class="mt-4">
        <div class="container bg-white rounded-4">
            <div class="px-x py-3">
                <p class="fs-20 fw-semibold text-800 mb-0">ស្នាដៃសិស្សបញ្ចប់វគ្គសិក្សា</p>
                <div class="mt-2">
                    <p class="text-700">ស្នាដៃសិស្សដែលអ្នកអាចនឹងចាប់អារម្មណ៍</p>
                </div>
                <form @submit.prevent="searchProject" class="row">
                    <div class="col-12 col-md-4">
                        <div class="position-relative d-flex justify-content-between">
                            <input type="text" class="form-control bg-body border-0 shadow-none fs-14 py-3 rounded-5"
                                v-model="projectStore.search" placeholder="ស្វែងរកគម្រោង..." style="height: 40px;" />
                            <div class="position-absolute top-50 end-0 translate-middle-y me-2 bg-white text-700 rounded-circle d-flex align-items-center justify-content-center"
                                style="width: 24px; height: 24px;">
                                <i class="bi bi-search"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 mt-3 mt-md-0">
                        <div class="d-flex align-items-center position-relative">
                            <select class="form-select bg-body border-0 shadow-none fs-14 text-700 rounded-5"
                                v-model="projectStore.filter_cate" style="padding-right: 50px; height: 40px;">
                                <option value="" disabled>មុខជំនាញ</option>
                                <option v-for="category in projectStore.categories" :key="category.id"
                                    :value="category.id">
                                    {{ category.name }}
                                </option>
                            </select>
                            <div class="position-absolute top-50 end-0 translate-middle-y me-2 bg-white text-700 rounded-circle d-flex align-items-center justify-content-center"
                                style="width: 24px; height: 24px;">
                                <i class="bi bi-chevron-down fw-bolder"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-4 mt-3 mt-md-0">
                        <div class="d-flex align-items-center position-relative">
                            <select class="form-select bg-body border-0 shadow-none fs-14 text-700 rounded-5"
                                v-model="projectStore.subject" style="padding-right: 50px; height: 40px;">
                                <option value="" disabled>មុខវិជ្ជា</option>
                                <option v-for="subject in projectStore.subjects" :key="subject.id" :value="subject.id">
                                    {{ subject.name }}
                                </option>
                            </select>
                            <div class="position-absolute top-50 end-0 translate-middle-y me-2 bg-white text-700 rounded-circle d-flex align-items-center justify-content-center"
                                style="width: 24px; height: 24px;">
                                <i class="bi bi-chevron-down"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 d-flex align-items-center mt-4">
                        <button class="btn btn-cus-primary rounded-5" type="submit" @click="searchProject"
                            :disabled="projectStore.loading.search">
                            {{ projectStore.loading.search ? 'កំពុងបង្ហាញ...' : 'បង្ហាញគម្រោង' }}
                            <i class="bi bi-chevron-right ms-1"></i>
                        </button>
                        <button type="button" class="btn btn-cus-primary rounded-5 ms-md-4" @click="resetData">
                            កំណត់ឡើងវិញ
                            <i class="bi bi-arrow-clockwise ms-1"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>

    </section>
    <section class="mt-4">
        <div class="bg-white rounded-4 mt-4 mb-4">
            <div class="p-4">
                <p class="fs-20 fw-semibold text-800 mb-0">ស្នាដៃសិស្សបញ្ចប់វគ្គសិក្សា</p>
                <div class="mt-2">
                    <p class="text-700">ស្នាដៃសិស្សដែលអ្នកអាចនឹងចាប់អារម្មណ៍</p>
                </div>
                <div v-for="(card, index) in projectStore.projects" :key="index">
                    <a href="#" @click.prevent="viewStudentDetail(card.id)">
                        <BigCard :id="card.id" :image="card.website_photo" :title="card.name"
                            :subject="card.course.course_name"
                            :creator="card.students.length > 1 ? card.team.name : card.students[0].english_name"
                            :isTeam="card.students.length > 1"
                            :deadline="card.finished_at_format" :tag1="card.course.course_name"
                             />
                    </a>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { useProjectStore } from '@/stores/pages/studentProject/project';
import BigCard from '@/components/pages/studentProject/BigCard.vue';
import { useRoute } from 'vue-router';
import { useRouter } from "vue-router";

const projectStore = useProjectStore();
const router = useRouter();

onMounted(async () => {
    const route = useRoute();
    const getCategoryId = route.query.category_id;

    if (getCategoryId) {
        projectStore.filter_cate = getCategoryId;
    }
    await projectStore.getCategory();
    await projectStore.getSubject();
    await projectStore.getProject();
});

const searchProject = async () => {
    try {
        projectStore.loading.search = true;
        await projectStore.getProject();
        projectStore.loading.search = false;
    } catch (error) {
        console.error("Error fetching projects:", error);
        projectStore.loading.search = false;
    }
};

const resetData = async () => {
    projectStore.search = "";
    projectStore.subject = "";
    projectStore.filter_cate = "";
    router.replace({ name: 'StudentProjectView' });
    await projectStore.getProject();
};

const viewStudentDetail = async (id) => {
    router.push(`/DetailPage/StudentProjectDetail/${id}`)
};

</script>

<style scoped>
select {
    border: none !important;
    box-shadow: none !important;
}
</style>
