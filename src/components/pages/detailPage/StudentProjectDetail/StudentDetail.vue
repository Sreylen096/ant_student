<template>
    <div class="container p-md-0">
        <div class="col-12">
            <div class="card border-0 mb-4 position-relative z-index-9 shadow-none rounded-4">
                <Banner title="ថ្នាក់បើកថ្មី" description="នេះជាទំព័រថ្នាក់បើកថ្មីដែលមាននៅថ្នាក់បណ្ដុះបណ្ដាលអានយើង"
                    class="container p-0" />
                <!-- <StudentProfile :avatarImage="profile.avatarImage" :name="profile.name"
                    :nameEnglish="profile.nameEnglish" :id="profile.id" :year="profile.year"
                    :university="profile.university" /> -->
                <div class="row d-flex flex-wrap">
                    <StudentProfileGroup v-for="(profile, index) in groupProfile" :key="index"
                        :avatar-image="profile.avatarImage" :name="profile.name" :nameEnglish="profile.nameEnglish"
                        :id="profile.id" :year="profile.year" :university="profile.university"
                        class="col-12 col-lg-6 col-xl-4" />
                </div>
            </div>
        </div>
        <div class="bg-white p-4 rounded-4 mb-5">
            <div class="row">
                <div class="col-12">
                    <p class="text-700 fs-32 fw-semibold">ស្នាដៃដែលសិស្សបានធ្វើ HTML5 + CSS</p>
                </div>
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="html-tab" role="tabpanel">
                        <div class="row">
                            <div class="col-12 col-lg-6">
                                <img src="/images/student-project/assignment.png" alt="" class="img-fluid h-100 rounded-5">
                            </div>
                            <div class="col-12 col-lg-6 p-0 mt-xl-3 ps-4 ps-lg-4 ps-xl-0">
                                <div class="pt-4 m-0">
                                    <div class="mb-4">
                                        <p class="text-800 fw-medium mb-0">Website Design HTML5 + CSS
                                        </p>
                                        <p class="fs-48 fw-semibold text-800 mt-1">គេហទំព័រ L-FILMS អិលហ្វៀម</p>
                                        <p class="text-800 fw-medium">
                                            បង្កើតគេហទំព័រនេះឡើងក្នុងគោល
                                            បំណងបង្កើនភាពងាយស្រួលទៅដល់អ្នកទស្សនាក្នុងការស្វែងរក
                                            និងទស្សនាខ្សែភាព យន្តល្បីៗជាច្រើនដោយសេរី​
                                        </p>
                                        <p class="text-800 fw-medium my-5">ថ្ងៃប្រគល់៖ Oct 26, 2024</p>
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
                                        <div class="col-12 col-md-6 mx-md-auto ms-lg-0 me-lg-0">
                                            <button class="btn btn-primary w-100 rounded-5" type="submit">
                                                ចុចទីនេះដើម្បីមើលជាក់ស្ដែង<i class="bi bi-chevron-right ms-2"></i>
                                            </button>
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
        <section>
            <StudentCardCourse title="ស្នាដៃសិស្សបានបញ្ចប់វគ្គសិក្សា HTML CSS" link="/more-courses"
                linkText="បង្ហាញទាំងអស់" linkIcon="bi bi-chevron-right" />
        </section>

    </div>
</template>

<script setup>
import Banner from '@/components/layouts/partials/Banner.vue';
import StudentProfile from './StudentProfile.vue';
import StudentCardCourse from '../../detailCourse/StudentCardCourse.vue';
import StudentProfileGroup from './StudentProfileGroup.vue';

const profile = {
    avatarImage: '/images/student-project/student-1.png',
    name: 'សួ លីឡាយ',
    nameEnglish: 'Suo Lylay',
    id: '០០០០១',
    year: '២០២៣',
    university: 'មេគង្គកម្ពុជា',
};

const groupProfile = [
    {
        avatarImage: '/images/student-project/student-2.png',
        name: 'សួ លីឡាយ',
        nameEnglish: 'Suo Lylay',
        id: '០០០០១',
        year: '២០២៣',
        university: 'មេគង្គកម្ពុជា',
    },
    {
        avatarImage: '/images/student-project/student-3.png',
        name: 'ចាន់ សីហា',
        nameEnglish: 'Chan Seyha',
        id: '១២៣១',
        year: '២០២២',
        university: 'តិចណូ',
    },
    {
        avatarImage: '/images/student-project/student-4.png',
        name: 'ចាន់ សីហា',
        nameEnglish: 'Chan Seyha',
        id: '១២៣១',
        year: '២០២២',
        university: 'តិចណូ',
    }

]
</script>