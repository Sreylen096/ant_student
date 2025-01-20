<template>
    <div class="container px-md-0">
        <div class="row " style="margin-top: -40px;">
            <div class="col-12">
                <div class="col-12" v-if="showHeader">
                    <!-- <div class="d-flex justify-content-between">
                        <p class="text-800 fs-32 fw-semibold">{{ title }}</p>
                        <a :href="link" class="text-primary-500 fs-16 text-decoration-none mt-3">
                            {{ linkText }}
                            <i v-if="linkIcon" :class="linkIcon"></i>
                        </a>
                    </div> -->
                    <div class="d-flex justify-content-between align-items-start flex-wrap">
                        <p class="text-800 fs-32 fw-semibold me-3 ">
                            {{ title }}
                        </p>
                        <a :href="link" class="text-primary-500 fs-16 mt-1 mt-md-3">
                            {{ linkText }}
                            <i v-if="linkIcon" :class="linkIcon"></i>
                        </a>
                    </div>
                </div>
                <div class="row">
                    <StudentCard v-for="(card, index) in cards" :key="index" :image="card.image" :title="card.title"
                        :subject="card.subject" :creator="card.creator" :deadline="card.deadline" />
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

import StudentCard from './StudentCard.vue';
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
    cards: {
        type: Array,
        required: true,
    },
});

const cards = [
    {
        image: '/images/detail-course/stu-1.png',
        title: "បង្កើតកម្មវិធី គ្រប់គ្រងស្ដុកម៉ាត",
        subject: "CSS3 ",
        creator: "សេង សំណាង",
        deadline: "Oct 15, 2024",
    },
    {
        image: '/images/detail-course/stu-2.png',
        title: "បង្កើតកម្មវិធី គ្រប់គ្រងស្ដុកម៉ាត",
        subject: "C++ OOP",
        creator: "សេង សំណាង",
        deadline: "Oct 15, 2024",
    },
    {
        image: '/images/detail-course/stu-3.png',
        title: "បង្កើតកម្មវិធី គ្រប់គ្រងស្ដុកម៉ាត",
        subject: "HTML",
        creator: "តូច សុវណ្ណចាន់សំណាង",
        deadline: "Oct 15, 2024",
    },
    {
        image: '/images/detail-course/stu-4.png',
        title: "បង្កើតកម្មវិធី គ្រប់គ្រងស្ដុកម៉ាត",
        subject: "HTML",
        creator: "តូច សុវណ្ណចាន់សំណាង",
        deadline: "Oct 15, 2024",
    }
]
</script>