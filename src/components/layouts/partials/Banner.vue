
<template>
  <div class="container-fluid">
  <div class="row">
    <div class="col-12">
      <div class="position-relative">
        <img 
          :src="imgSrc" 
          alt="banner-discount" 
          class="img-fluid w-100" 
          style="object-fit: cover; height: 250px;" 
        />
        <div class="position-absolute top-50 start-50 translate-middle text-center">
          <p class="text-800 fw-semibold mb-0 fs-32" >
            {{ title }}
          </p>
          <p class="text-800 fw-semibold fs-16 text-sm-nowrap ">
            {{ description }}
          </p>
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
    default: '/images/new-opening-course/course-banner.png',
  },
});
</script>