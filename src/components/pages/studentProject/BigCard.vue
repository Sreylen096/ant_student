<template>
  <RouterLink :to="`/DetailPage/StudentProjectDetail/${id}`">
    <div class="row border-cus rounded-3 mx-0 mb-4">
      <div class="col-12 col-md-5 p-3">
        <img :src="image" alt="" class="img-fluid w-100" />
      </div>
      <div class="col-12 col-md-7 py-3">
        <div>
          <p class="fs-20 fw-semibold text-800 mt-2">
            {{ title }}
          </p>
          <p class="text-700 mb-0">សម្រាប់មុខវិជ្ជា៖ {{ subject }}</p>
          <p class="text-700 mb-0 mt-2">បង្កើតឡើងដោយ៖ {{ creator }}</p>
          <p class="text-700 mt-2">ថ្ងៃប្រគល់៖ {{ deadline }}</p>
        </div>
        <div class="d-flex">
          <p class="bg-body py-1 px-3 rounded-5 d-inline-flex text-700 fs-14">
            {{ tag1 }}
          </p>
          <p class="bg-body py-1 px-3 rounded-5 d-inline-flex text-700 fs-14 ms-3">
            {{ tag2 }}
          </p>
        </div>
      </div>
    </div>
  </RouterLink>
</template>


<script setup>
defineProps({
  id: Number,
  image: String,
  title: String,
  subject: String,
  creator: String,
  deadline: String,
  tag1: String,
  tag2: String,
})

</script>
