
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="position-relative">
          <img :src="imgSrc" alt="banner-discount" class="img-fluid w-100 h-100" />
          <div class="position-absolute top-50 start-50 translate-middle">
            <p class="text-800 fs-32 fw-semibold text-center mb-0">{{ title }}</p>
            <p class="text-800 fs-16 fw-semibold">{{ description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    default: '/src/assets/images/new-opening-course/course-banner.png',
  },
});
</script>