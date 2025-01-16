<template>
    <section class="mt-4">
        <div class="bg-white rounded-4 mt-4 mb-4">
    <div class="p-4">
      <p class="fs-20 fw-semibold text-800 mb-0">ស្នាដៃសិស្សបញ្ចប់វគ្គសិក្សា</p>
      <div class="mt-2">
        <p class="text-700">ស្នាដៃសិស្សដែលអ្នកអាចនឹងចាប់អារម្មណ៍</p>
      </div>
      <div v-for="(card, index) in cards" :key="index">
        <BigCard
            :id="card.id"
            :image="card.image"
            :title="card.title"
            :subject="card.subject"
            :creator="card.creator"
            :deadline="card.deadline"
            :tag1="card.tag1"
            :tag2="card.tag2"
        />
      </div>
    </div>
  </div>
    </section>
</template> 

<script setup>
import BigCard from './BigCard.vue'

const cards = [
    {
        id: 1,
        image: '/src/assets/images/student-project/student.png',
        title: "បង្កើតកម្មវិធី គ្រប់គ្រងស្ដុកម៉ាត",
        subject: "គ្រប់គ្រងស្ដុកម៉ាត",
        creator: "សេង សំណាង",
        deadline: "Oct 15, 2024",
        tag1: "Javascript",
        tag2: "Programming",
    },
    {
        id: 2,
        image: '/src/assets/images/student-project/student.png',
        title: "បង្កើតកម្មវិធី គ្រប់គ្រងស្ដុកម៉ាត",
        subject: "គ្រប់គ្រងស្ដុកម៉ាត",
        creator: "សេង សំណាង",
        deadline: "Oct 15, 2024",
        tag1: "Javascript",
        tag2: "Programming",
    },
    {
        id: 3,
        image: '/src/assets/images/student-project/student.png',
        title: "បង្កើតកម្មវិធី គ្រប់គ្រងស្ដុកម៉ាត",
        subject: "គ្រប់គ្រងស្ដុកម៉ាត",
        creator: "សេង សំណាង",
        deadline: "Oct 15, 2024",
        tag1: "Javascript",
        tag2: "Programming",
    }
]
</script>