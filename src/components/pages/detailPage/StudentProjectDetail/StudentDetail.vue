<template>
    <div class="container p-md-0">
        <div class="col-12">
            <div class="card border-0 mb-4 position-relative z-index-9 shadow-none rounded-4">
                <Banner title="ថ្នាក់បើកថ្មី" description="នេះជាទំព័រថ្នាក់បើកថ្មីដែលមាននៅថ្នាក់បណ្ដុះបណ្ដាលអានយើង"
                    class="container p-0" />
                <div v-if="studentStore.student.length === 1">
                    <StudentProfile v-for="(student, index) in studentStore.student" :key="index"
                        :avatarImage="student?.photo || 'default-avatar.png'"
                        :name="student?.full_name || 'Unknown Name'"
                        :nameEnglish="student?.english_name || 'Unknown English Name'"
                        :student_id="student?.id || 'N/A'" :year="student?.years || 'Unknown Year'"
                        :university="student?.school || 'Unknown School'" :fb_name="student?.fb_name"
                        :telegram="student.phone_number" />
                </div>
                <div v-else class="row d-flex flex-wrap">
                    <div v-for="(student, index) in studentStore.student" :key="index" class="col-12 col-md-4">
                        <StudentProfileGroup :avatarImage="student?.photo || 'default-avatar.png'"
                            :name="student?.full_name || 'Unknown Name'"
                            :nameEnglish="student?.english_name || 'Unknown English Name'"
                            :student_id="student?.id || 'N/A'" :year="student?.years || 'Unknown Year'"
                            :university="student?.school || 'Unknown'" :fb_name="student?.fb_name"
                            :telegram="student.phone_number" />
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white p-4 rounded-4 mb-5">
            <div class="row">
               <div>
                <div class="col-12">
                    <p class="text-700 fs-32 fw-semibold">ស្នាដៃដែលសិស្សបានធ្វើវគ្គ {{ projectStore.project.course.course_name }}</p>
                </div>
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="html-tab" role="tabpanel">
                        <div class="row">
                            <div class="col-12 col-lg-6">
                                <img :src="projectStore.project.website_photo" alt=""
                                    class="img-fluid w-100 h-100 rounded-5">
                            </div>
                            <div class="col-12 col-lg-6 p-0 mt-xl-3 ps-4 ps-xl-0">
                                <div class="pt-4 m-0 ps-lg-4">
                                    <div class="mb-4">
                                        <p class="text-primary-500 fw-medium mb-0"> {{ projectStore.project.course.course_name }}
                                        </p>
                                        <p class="fs-36 fw-semibold text-800 mt-1">{{ projectStore.project.name }}</p>
                                        <p class="text-800 fs-16">
                                            {{projectStore.project.description}}
                                        </p>
                                        <p class="text-800 fw-medium my-5">ថ្ងៃប្រគល់៖ {{projectStore.project.finished_at_format}}</p>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 col-md-6">
                                            <ul class="nav flex-column gap-3">
                                                <li class="nav-item d-flex align-items-center">
                                                    <i class="bi bi-check-circle-fill text-800 me-2"></i>
                                                    <span class="text-800 fw-medium">អាចធ្វើការ Link បានគ្រប់
                                                        Page</span>
                                                </li>
                                                <li class="nav-item d-flex align-items-center">
                                                    <i class="bi bi-check-circle-fill text-800 me-2"></i>
                                                    <span class="text-800 fw-medium">អាចទស្សនាបានគ្រប់ទីកន្លែង</span>
                                                </li>
                                                <li class="nav-item d-flex align-items-center">
                                                    <i class="bi bi-check-circle-fill text-800 me-2"></i>
                                                    <span class="text-800 fw-medium">គេហទំព័រមានភាពស្រស់ស្អាត</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-12 col-md-6 mt-3 mt-md-0">
                                            <ul class="nav flex-column gap-3">
                                                <li class="nav-item d-flex align-items-center">
                                                    <i class="bi bi-check-circle-fill text-800 me-2"></i>
                                                    <span class="text-800 fw-medium">Website ងាយស្រួលយល់</span>
                                                </li>
                                                <li class="nav-item d-flex align-items-center">
                                                    <i class="bi bi-check-circle-fill text-800 me-2"></i>
                                                    <span class="text-800 fw-medium">Support គ្រប់ Device</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="row mt-5">
                                        <div class="col-12 col-md-6 col-xl-5 mx-md-auto ms-lg-0 me-lg-0">
                                            <a :href="projectStore.project.host_domain" target="blank" class="btn btn-primary w-100 border-0 rounded-5" >
                                                ចុចទីនេះដើម្បីមើលជាក់ស្ដែង<i class="bi bi-chevron-right ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="link-tab" role="tabpanel">
                        <h3>Link Content</h3>
                        <p>Details about this link go here.</p>
                    </div>
                    <div class="tab-pane fade" id="another-tab" role="tabpanel">
                        <h3>Another Link Content</h3>
                        <p>Details about another link go here.</p>
                    </div>
                </div>
               </div>
            </div>
        </div>
        <section>
            <StudentProjectRecommend title="ស្នាដៃសិស្សបានបញ្ចប់វគ្គសិក្សា HTML CSS" link="/more-courses"
                linkText="បង្ហាញទាំងអស់" linkIcon="bi bi-chevron-right" />
        </section>

    </div>
</template>

<script setup>
import Banner from '@/components/layouts/partials/Banner.vue';
import StudentProfile from './StudentProfile.vue';
import StudentProjectRecommend from './StudentProjectRecommend.vue';
import StudentProfileGroup from './StudentProfileGroup.vue';
import { onMounted } from 'vue';
import { useStudentStore } from '@/stores/pages/studentProject/student';
import { useProjectStore } from '@/stores/pages/studentProject/project';
import { useRoute } from 'vue-router';

const studentStore = useStudentStore();
const projectStore = useProjectStore();
const route = useRoute();



onMounted(async () => {
    await studentStore.getStudent(route.params.id);
    await projectStore.getDetailProject(route.params.id);
    await projectStore.getProjectRecommendTeamStudent(route.params.id);
    console.log(projectStore.projectRecommendTeamStudents);
    console.log(projectStore.project);
    

});

</script>