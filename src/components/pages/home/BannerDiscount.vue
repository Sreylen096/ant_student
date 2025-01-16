<template>
    <section>
        <div class="container-fluid bg-banner">
            <div class="container p-md-0">
                <div class="row ">
                    <div class="col-12 col-md-6 d-flex align-items-center position-relative">
                        <div>
                            <p class="text-800 fw-bold fs-36">ទទួលបានការ​បញ្ចុះតម្លៃ ១០%</p>
                            <p class="text-800 fw-medium fs-20">
                                សិស្សានុសិស្សនឹងទទួលបានរាល់ពេលដែរចុះឈ្មោះសិក្សាចាប់ពី ៣នាក់​ ឡើងទៅ </p>
                            <button class="btn btn-primary rounded-5 mt-3 fs-16" type="submit">
                                ទំនាក់ទំនងឥឡូវនេះ
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                            stroke="#fff" stroke-width="2" stroke-linejoin="round"></path>
                                        <path
                                            d="M11 15L13.7158 12.2842V12.2842C13.8728 12.1272 13.8728 11.8728 13.7158 11.7158V11.7158L11 9"
                                            stroke="#fff" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                    </g>
                                </svg>

                            </button>
                        </div>
                        <!-- <div class="position-absolute top-0 end-0"
                                style="top: 40px!important; right: 70px!important;">
                                <img src="/src/assets/images/homepage/macro.png" alt="macro" class="img-fluid">
                            </div> -->
                        <div class="position-absolute top-0 end-0 responsive-position">
                            <img src="/images/homepage/macro.png" alt="macro" class="img-fluid">
                        </div>
                    </div>
                    <div class="col-12 col-md-6 d-flex justify-content-end align-items-center">
                        <img src="/images/homepage/discount.png" alt="discount" class="img-fluid py-4">
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>


<style scoped>
.responsive-position {
  top: 40px;
  right: 70px;
}

@media (max-width: 768px) {
  .responsive-position {
    top: 20px; 
    right: 20px; 
  }
}

@media (max-width: 480px) {
  .responsive-position {
    top: 10px; 
    right: 10px;
  }
}

</style>