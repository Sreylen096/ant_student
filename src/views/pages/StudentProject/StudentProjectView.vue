<template>
    <Navbar />
    <section>
        <div class="container p-0">
            <div class="row g-4 justify-content-between">
                <div class="col-12 col-md-8 pe-0 pe-md-3">
                    <ProjectBanner />
                    <ProjectCourseDisplay />
                    <BigCardProject />
                </div>
                <div class="col-12 col-md-4 pe-0 pe-md-3">
                    <SmallCardProject />
                    <DisplayYouTube />
                </div>
            </div>
        </div>
    </section>
    <Footer />
</template>

<script setup>
import Navbar from "@/components/layouts/Navbar.vue";
import Footer from "@/components/layouts/Footer.vue";
import ProjectBanner from "@/components/pages/studentProject/ProjectBanner.vue";
import ProjectCourseDisplay from "@/components/pages/studentProject/ProjectCourseDisplay.vue";
import BigCardProject from "@/components/pages/studentProject/BigCardProject.vue";
import SmallCardProject from "@/components/pages/studentProject/SmallCardProject.vue";
import DisplayYouTube from "@/components/pages/studentProject/DisplayYouTube.vue";
</script>
