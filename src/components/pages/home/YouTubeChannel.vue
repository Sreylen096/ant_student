<template>
    <section>
        <div class="container p-md-0">
            <div class="row align-items-center">
                <div class="col-12 col-md-9 mb-3 mb-md-0">
                    <div class="d-flex flex-column flex-md-row align-items-md-center mb-2">
                        <p class="text-800 fs-24 fs-md-32 fw-semibold text-center text-md-start mb-2 mb-md-0">
                            តាមដានស្នាដៃសិស្សលើ Channel Youtube
                        </p>
                        <span class="ms-0 ms-md-2 mt-1 mt-md-0 text-center">
                            <img src="/images/homepage/youtube.png" alt="youtube" class="img-fluid"
                                style="max-width: 30px;">
                        </span>
                    </div>
                    <p class="text-700 fs-14 fs-md-16 text-center text-md-start">
                        ស្នាដៃសិស្សបញ្ចប់វគ្គសិក្សាដែលបានធ្វើឡើងជាលក្ខណៈ
                        វីដេអូសម្រាប់សិស្សានុសិស្សអាចទស្សនាស្នាដៃរបស់ពួកគេឬស្នាដៃសិស្សផ្សេងៗទៀត
                    </p>
                </div>
                <div class="col-5 col-md-3 d-flex justify-content-end align-items-center mx-auto">
                    <button class="btn btn-primary rounded-5 w-100 w-md-auto" type="button" @click="redirectToYoutube">
                        មើលឥឡូវនេះ
                        <svg class="ms-1" width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                stroke="#fff" stroke-width="2" stroke-linejoin="round"></path>
                            <path d="M11 15L13.7158 12.2842C13.8728 12.1272 13.8728 11.8728 13.7158 11.7158L11 9"
                                stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const youtubeLink = 'https://www.youtube.com/@ANTTechnologyTrainingCenter';

const redirectToYoutube = () => {
  window.open(youtubeLink, '_blank');
};


</script>

