<template>
    <CardCourse title="ថ្នាក់បើកថ្មី" link="/more-courses"
    linkText="បង្ហាញទាំងអស់" linkIcon="bi bi-chevron-right" :cards="webDevelopment" />
    
</template>

<script setup>
import CardCourse from '@/components/layouts/partials/CardCourses.vue';


const webDevelopment = [
    {
        image: "/images/homepage/html.png",
        title: "HTML CSS",
        schedule: "ច័ន្ទ-សុក្រ",
        time: "១១:០០​-១២:២០ព្រឹក",
        startDate: "ចូលរៀន ថ្ងៃទី១៦ ខែកញ្ញា​ ឆ្នាំ២០២៤​",
        price: "$60.00",

    },
    {
        image: "/images/homepage/css.png",
        title: "CSS ",
        schedule: "ច័ន្ទ-សុក្រ",
        time: "២:០០​-៣:២០ល្ងាច",
        startDate: "ចូលរៀន ថ្ងៃទី១៨ ខែកញ្ញា​ ឆ្នាំ២០២៤​",
        price: "$70.00",
    },
    {
        image: "/images/homepage/javascript.png",
        title: "Javascript ",
        schedule: "ច័ន្ទ-សុក្រ",
        time: "២:០០​-៣:២០ល្ងាច",
        startDate: "ចូលរៀន ថ្ងៃទី១៨ ខែកញ្ញា​ ឆ្នាំ២០២៤​",
        price: "$70.00",
    },
    {
        image: "/images/homepage/node.js.png",
        title: "Node JS",
        schedule: "ច័ន្ទ-សុក្រ",
        time: "២:០០​-៣:២០ល្ងាច",
        startDate: "ចូលរៀន ថ្ងៃទី១៨ ខែកញ្ញា​ ឆ្នាំ២០២៤​",
        price: "$70.00",
    },
    {
        image: "/images/homepage/javascript.png",
        title: "Javascript ",
        schedule: "ច័ន្ទ-សុក្រ",
        time: "២:០០​-៣:២០ល្ងាច",
        startDate: "ចូលរៀន ថ្ងៃទី១៨ ខែកញ្ញា​ ឆ្នាំ២០២៤​",
        price: "$70.00",
    },
    {
        image: "/images/homepage/node.js.png",
        title: "Node JS",
        schedule: "ច័ន្ទ-សុក្រ",
        time: "២:០០​-៣:២០ល្ងាច",
        startDate: "ចូលរៀន ថ្ងៃទី១៨ ខែកញ្ញា​ ឆ្នាំ២០២៤​",
        price: "$70.00",
    },
    {
        image: "/images/homepage/javascript.png",
        title: "Javascript ",
        schedule: "ច័ន្ទ-សុក្រ",
        time: "២:០០​-៣:២០ល្ងាច",
        startDate: "ចូលរៀន ថ្ងៃទី១៨ ខែកញ្ញា​ ឆ្នាំ២០២៤​",
        price: "$70.00",
    },
    {
        image: "@/assets/images/homepage/node.js.png",
        title: "Node JS",
        schedule: "ច័ន្ទ-សុក្រ",
        time: "២:០០​-៣:២០ល្ងាច",
        startDate: "ចូលរៀន ថ្ងៃទី១៨ ខែកញ្ញា​ ឆ្នាំ២០២៤​",
        price: "$70.00",
    },
]
</script>

