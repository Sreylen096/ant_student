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
            :image="card.website_photo"  
            :title="card.name"            
            :subject="card.course.course_name"
            :creator="card.student.full_name"       
            :deadline="card.finished_at_format"  
            :tag1="card.course.course_name" 
          />
      </div>
    </div>
  </div>
    </section>
</template> 
<script setup>
import { ref, onMounted } from 'vue';
import { useProjectStore } from '@/stores/pages/studentProject/project';
import BigCard from './BigCard.vue';

const projectStore = useProjectStore();
const cards = ref([]);

onMounted(async () => {
  await projectStore.getProject(); 
  cards.value = projectStore.projects; 
});


</script>