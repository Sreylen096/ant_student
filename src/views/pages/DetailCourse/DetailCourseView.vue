<template>
    <Navbar />
    <Banner title="អំពីវគ្គសិក្សា                                                                                                                 "
    description="នេះជាទំព័រអំពីវគ្គសិក្សាដែលមាននៅថ្នាក់បណ្ដុះបណ្ដាលអានយើង" />
    <section>
        <div class="container p-0">
            <div class="row g-4 justify-content-between">
                <div class="col-12 col-md-5 col-lg-4 pe-0 pe-md-3">
                   <SideBarCourse />
                </div>
                <div class="col-12 col-md-7 col-lg-8 pe-0 pe-md-3">
                    <MainContent />
                </div>
            </div>
        </div>
    </section>
        
    <section>
        <StudentCardCourse title="ស្នាដៃសិស្សបានបញ្ចប់វគ្គសិក្សា HTML CSS" link="/more-courses"
        linkText="បង្ហាញទាំងអស់" linkIcon="bi bi-chevron-right" />
    </section>
    <Footer />
</template>

<script setup>
import Navbar from "@/components/layouts/Navbar.vue";
import Footer from "@/components/layouts/Footer.vue";
import Banner from "@/components/layouts/partials/Banner.vue";
import SideBarCourse from "@/components/pages/detailCourse/SideBarCourse.vue";
import MainContent from "@/components/pages/detailCourse/MainContent.vue";
import StudentCardCourse from "@/components/pages/detailCourse/StudentCardCourse.vue";
</script>