

<template>
    <router-view />

</template>


<script setup>
import { RouterView, useRouter } from 'vue-router'
import { onMounted, onUnmounted } from 'vue';

const resetOverflow = () => {
    document.body.style.overflow = 'auto'
}

onMounted( () => resetOverflow());
onUnmounted( () => resetOverflow());
</script>
