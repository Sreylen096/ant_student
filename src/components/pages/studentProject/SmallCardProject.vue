<template>
    <div class="bg-white rounded-4">
        <div class="p-4">
            <p class="fs-20 text-800 fw-semibold">ស្នាដៃសិស្សទើបបញ្ចប់ថ្មីៗ</p>
            <div v-for="(card, index) in cards" :key="index">
                <SmallCard
                    :image="card.image"
                    :title="card.title"
                    :subject="card.subject"
                    :creator="card.creator"
                    :deadline="card.deadline"
                />
            </div>
        </div>
    </div>
</template>


<script setup>

import SmallCard from './SmallCard.vue';
const cards = [
    {
        image: '/images/student-project/student.png',
        title: "បង្កើតកម្មវិធី គ្រប់គ្រងស្ដុកម៉ាត",
        subject: "CSS3 ",
        creator: "សេង សំណាង",
        deadline: "Oct 15, 2024",
    },
    {
        image: '/images/student-project/student.png',
        title: "បង្កើតកម្មវិធី គ្រប់គ្រងស្ដុកម៉ាត",
        subject: "C++ OOP",
        creator: "សេង សំណាង",
        deadline: "Oct 15, 2024",
    },
    {
        image: '/images/student-project/student.png',
        title: "បង្កើតកម្មវិធី គ្រប់គ្រងស្ដុកម៉ាត",
        subject: "HTML",
        creator: "តូច សុវណ្ណចាន់សំណាង",
        deadline: "Oct 15, 2024",
    }
]
</script>