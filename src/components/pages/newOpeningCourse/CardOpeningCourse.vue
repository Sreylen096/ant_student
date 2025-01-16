<template>
    <CardCourse title="Web Development" :cards="webDevelopment"  />
    <CardCourse title="Software Development" :cards="softwareDevelopment" />
    <CardCourse title="Mobile Application" :cards="appApplication" />
    <CardCourse title="Graphic Design" :cards="graphicDesign" />

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
        image: "/images/homepage/node.js.png",
        title: "Node JS",
        schedule: "ច័ន្ទ-សុក្រ",
        time: "២:០០​-៣:២០ល្ងាច",
        startDate: "ចូលរៀន ថ្ងៃទី១៨ ខែកញ្ញា​ ឆ្នាំ២០២៤​",
        price: "$70.00",
    },
]

const softwareDevelopment = [
    {
        image: "/images/new-opening-course/c++.png",
        title: "C++",
        schedule: "ច័ន្ទ-សុក្រ",
        time: "១១:០០​-១២:២០ព្រឹក",
        startDate: "ចូលរៀន ថ្ងៃទី១៦ ខែកញ្ញា​ ឆ្នាំ២០២៤​",
        price: "$60.00",
    },
    {
        image: "/images/new-opening-course/oop.png",
        title: "C++",
        schedule: "ច័ន្ទ-សុក្រ",
        time: "១១:០០​-១២:២០ព្រឹក",
        startDate: "ចូលរៀន ថ្ងៃទី១៦ ខែកញ្ញា​ ឆ្នាំ២០២៤​",
        price: "$60.00",
    },
    {
        image: "/images/new-opening-course/c++.png",
        title: "C++",
        schedule: "ច័ន្ទ-សុក្រ",
        time: "១១:០០​-១២:២០ព្រឹក",
        startDate: "ចូលរៀន ថ្ងៃទី១៦ ខែកញ្ញា​ ឆ្នាំ២០២៤​",
        price: "$60.00",
    },
    {
        image: "/images/new-opening-course/oop.png",
        title: "C++",
        schedule: "ច័ន្ទ-សុក្រ",
        time: "១១:០០​-១២:២០ព្រឹក",
        startDate: "ចូលរៀន ថ្ងៃទី១៦ ខែកញ្ញា​ ឆ្នាំ២០២៤​",
        price: "$60.00",
    }, {
        image: "/images/new-opening-course/c++.png",
        title: "C++",
        schedule: "ច័ន្ទ-សុក្រ",
        time: "១១:០០​-១២:២០ព្រឹក",
        startDate: "ចូលរៀន ថ្ងៃទី១៦ ខែកញ្ញា​ ឆ្នាំ២០២៤​",
        price: "$60.00",
    },
    {
        image: "/images/new-opening-course/oop.png",
        title: "C++",
        schedule: "ច័ន្ទ-សុក្រ",
        time: "១១:០០​-១២:២០ព្រឹក",
        startDate: "ចូលរៀន ថ្ងៃទី១៦ ខែកញ្ញា​ ឆ្នាំ២០២៤​",
        price: "$60.00",
    },
    {
        image: "/images/new-opening-course/c++.png",
        title: "C++",
        schedule: "ច័ន្ទ-សុក្រ",
        time: "១១:០០​-១២:២០ព្រឹក",
        startDate: "ចូលរៀន ថ្ងៃទី១៦ ខែកញ្ញា​ ឆ្នាំ២០២៤​",
        price: "$60.00",
    },
    {
        image: "/images/new-opening-course/oop.png",
        title: "C++",
        schedule: "ច័ន្ទ-សុក្រ",
        time: "១១:០០​-១២:២០ព្រឹក",
        startDate: "ចូលរៀន ថ្ងៃទី១៦ ខែកញ្ញា​ ឆ្នាំ២០២៤​",
        price: "$60.00",
    }
]

const appApplication = [
    {
        image: "/images/new-opening-course/flutter-1.png",
        title: "C++",
        schedule: "ច័ន្ទ-សុក្រ",
        time: "១១:០០​-១២:២០ព្រឹក",
        startDate: "ចូលរៀន ថ្ងៃទី១៦ ខែកញ្ញា​ ឆ្នាំ២០២៤​",
        price: "$60.00",
    },
    {
        image: "/images/new-opening-course/flutter-1.png",
        title: "C++",
        schedule: "ច័ន្ទ-សុក្រ",
        time: "១១:០០​-១២:២០ព្រឹក",
        startDate: "ចូលរៀន ថ្ងៃទី១៦ ខែកញ្ញា​ ឆ្នាំ២០២៤​",
        price: "$60.00",
    },
    {
        image: "/images/new-opening-course/flutter-1.png",
        title: "C++",
        schedule: "ច័ន្ទ-សុក្រ",
        time: "១១:០០​-១២:២០ព្រឹក",
        startDate: "ចូលរៀន ថ្ងៃទី១៦ ខែកញ្ញា​ ឆ្នាំ២០២៤​",
        price: "$60.00",
    },
    {
        image: "/images/new-opening-course/flutter-1.png",
        title: "C++",
        schedule: "ច័ន្ទ-សុក្រ",
        time: "១១:០០​-១២:២០ព្រឹក",
        startDate: "ចូលរៀន ថ្ងៃទី១៦ ខែកញ្ញា​ ឆ្នាំ២០២៤​",
        price: "$60.00",
    },
    {
        image: "/images/new-opening-course/flutter-1.png",
        title: "C++",
        schedule: "ច័ន្ទ-សុក្រ",
        time: "១១:០០​-១២:២០ព្រឹក",
        startDate: "ចូលរៀន ថ្ងៃទី១៦ ខែកញ្ញា​ ឆ្នាំ២០២៤​",
        price: "$60.00",
    },
    {
        image: "/images/new-opening-course/flutter-1.png",
        title: "C++",
        schedule: "ច័ន្ទ-សុក្រ",
        time: "១១:០០​-១២:២០ព្រឹក",
        startDate: "ចូលរៀន ថ្ងៃទី១៦ ខែកញ្ញា​ ឆ្នាំ២០២៤​",
        price: "$60.00",
    },
    {
        image: "/images/new-opening-course/flutter-1.png",
        title: "C++",
        schedule: "ច័ន្ទ-សុក្រ",
        time: "១១:០០​-១២:២០ព្រឹក",
        startDate: "ចូលរៀន ថ្ងៃទី១៦ ខែកញ្ញា​ ឆ្នាំ២០២៤​",
        price: "$60.00",
    },
    {
        image: "/images/new-opening-course/flutter-1.png",
        title: "C++",
        schedule: "ច័ន្ទ-សុក្រ",
        time: "១១:០០​-១២:២០ព្រឹក",
        startDate: "ចូលរៀន ថ្ងៃទី១៦ ខែកញ្ញា​ ឆ្នាំ២០២៤​",
        price: "$60.00",
    }
]

const graphicDesign = [
    {
        image: "/images/new-opening-course/design.png",
        title: "C++",
        schedule: "ច័ន្ទ-សុក្រ",
        time: "១១:០០​-១២:២០ព្រឹក",
        startDate: "ចូលរៀន ថ្ងៃទី១៦ ខែកញ្ញា​ ឆ្នាំ២០២៤​",
        price: "$60.00",

    },
    {
        image: "/images/new-opening-course/design.png",
        title: "C++",
        schedule: "ច័ន្ទ-សុក្រ",
        time: "១១:០០​-១២:២០ព្រឹក",
        startDate: "ចូលរៀន ថ្ងៃទី១៦ ខែកញ្ញា​ ឆ្នាំ២០២៤​",
        price: "$60.00",
    },
    {
        image: "/images/new-opening-course/design.png",
        title: "C++",
        schedule: "ច័ន្ទ-សុក្រ",
        time: "១១:០០​-១២:២០ព្រឹក",
        startDate: "ចូលរៀន ថ្ងៃទី១៦ ខែកញ្ញា​ ឆ្នាំ២០២៤​",
        price: "$60.00",
    },
    {
        image: "/images/new-opening-course/design.png",
        title: "C++",
        schedule: "ច័ន្ទ-សុក្រ",
        time: "១១:០០​-១២:២០ព្រឹក",
        startDate: "ចូលរៀន ថ្ងៃទី១៦ ខែកញ្ញា​ ឆ្នាំ២០២៤​",
        price: "$60.00",
    }
]
</script>