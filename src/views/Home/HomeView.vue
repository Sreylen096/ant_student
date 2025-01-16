
<template>
    <Navbar />
    <BannerHome />
    <SetCourseDisplay />
    <CardHome />
    <BannerDiscount />
    <StudentAssignment />
    <YouTubeChannel />
    <QA />
    <Footer />
</template>


<script setup>
  import Navbar from '@/components/layouts/Navbar.vue';
  import Footer from '@/components/layouts/Footer.vue';
  import BannerHome from '@/components/pages/home/BannerHome.vue';
  import SetCourseDisplay from '@/components/pages/home/SetCourseDisplay.vue';
  import CardHome from '@/components/pages/home/CardHome.vue';
  import BannerDiscount from '@/components/pages/home/BannerDiscount.vue';
  import StudentAssignment from '@/components/pages/home/StudentAssignment.vue';
  import YouTubeChannel from '@/components/pages/home/YouTubeChannel.vue';
  import QA from '@/components/pages/home/Q&A.vue';
</script>



