<template>
    <Navbar />
    <Banner title="ថ្នាក់បើកថ្មី"
    description="នេះជាទំព័រថ្នាក់បើកថ្មីដែលមាននៅថ្នាក់បណ្ដុះបណ្ដាលអានយើង"/>
    <CourseSearch />
    <CardOpeningCourse />


    <Footer />
</template>

<script setup>
import Navbar from '@/components/layouts/Navbar.vue';
import Footer from '@/components/layouts/Footer.vue';
import Banner from '@/components/layouts/partials/Banner.vue';
import CourseSearch from '@/components/pages/newOpeningCourse/CourseSearch.vue';
import CardOpeningCourse from '@/components/pages/newOpeningCourse/CardOpeningCourse.vue';
</script>