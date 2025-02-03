<template>
  <CardCourse
    title="ថ្នាក់បើកថ្មី"
    link="/more-courses"
    linkText="បង្ហាញទាំងអស់"
    linkIcon="bi bi-chevron-right"
    :cards="classroomStore.classrooms"
  />
  <!-- {{ classroomSt   ore.classrooms }} -->
</template>

<script setup>
import CardCourse from "@/components/layouts/partials/CardCourses.vue";
import { useClassroom } from "@/stores/pages/homepage/classroom";
const classroomStore = useClassroom();



</script>

