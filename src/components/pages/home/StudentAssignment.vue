<template>
     <section>
            <div class="container mt-5 p-md-0">
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-4">
                        <p class="text-800 fw-bold fs-32 text-nowrap">ស្នាដៃសិស្សបញ្ចប់វគ្គសិក្សា</p>
                        <p class="text-700 text-wrap ">
                            ស្នាដៃសិស្សបញ្ចប់វគ្គសិក្សាធ្វើឡើងក្នុងគោលបំណងបង្ហាញ ពីចំណេះដឹងដែលសិស្សបាន
                            សិក្សារៀនសូត្រគន្លងមក
                        </p>

                    </div>
                    <div class="col-12 col-md-8">
                        <div class="row">
                            <div class="col-12 col-sm-6 col-md-3 mt-4 mt-md-0" v-for="(card, index) in cards" :key="index">
                                <div class="card border-0 rounded-4 shadow-none">
                                    <div class="px-3 pt-3">
                                        <img :src="card.image" class="card-img-top img-fluid w-40" :alt="card.alt">
                                    </div>
                                    <div class="card-body ps-3" style="margin-top: -10px;">
                                        <p class="card-title text-800 fw-semibold fs-15">{{card.title}}</p>
                                        <p class="card-text text-700 fs-14">{{ card.schedule }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script setup>
const cards = [
    {
        image: '/src/assets/images/homepage/web.png',
        title: 'Web Development',
        alt: 'Web Development',
        schedule: 'ស្នាដៃសិស្សបញ្ចប់វគ្គសិក្សាដូចជា HTML, CSS, JS, PHP...',
    },
    {
        image: '/src/assets/images/homepage/mobile.png',
        title: 'Mobile Application',
        alt: 'Mobile Application',
        schedule: 'ស្នាដៃសិស្សបញ្ចប់វគ្គសិក្សាដូចជា Flutter Lv1, Flutter Lv2...',
    },
    {
        image: '/src/assets/images/homepage/software.png',
        title: 'Software Application',
        alt: 'Software Application',
        schedule: 'ស្នាដៃសិស្សបញ្ចប់វគ្គសិក្សាដូចជា C++, C++OOP, C#...',
    },
    {
        image: '/src/assets/images/homepage/graphic.png',
        title: 'Graphic Designer',
        alt: 'Graphic Designer',
        schedule: 'ស្នាដៃសិស្សបញ្ចប់វគ្គសិក្សាដូចជា Adobe photoshop',
    }

]

</script>