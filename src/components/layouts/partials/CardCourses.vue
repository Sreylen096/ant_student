<template>
  <section>
    <div class="container px-md-0">
      <div class="row " style="margin-top: -40px;">
        <div class="col-12" v-if="showHeader">
          <div class="d-flex justify-content-between">
            <p class="text-800 fs-32 fw-semibold">{{ title }}</p>
            <a
              :href="link"
              class="text-primary-500 fs-16 text-decoration-none mt-3"
            >
              {{ linkText }}
              <i v-if="linkIcon" :class="linkIcon"></i>
            </a>
          </div>
        </div>
        <div class="row pe-0">
          <Card
            v-for="(card, index) in cards"
            :key="index"
            :card="card"
            buttonText="ព័ត៌មានបន្ថែម"
            class="mb-lg-4"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Card from "./Card.vue";

defineProps({
  showHeader: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "#",
  },
  linkText: {
    type: String,
    default: "",
  },
  linkIcon: {
    type: String,
    default: null,
  },
  cards: {
    type: Array,
    required: true,
  },
});

</script>
