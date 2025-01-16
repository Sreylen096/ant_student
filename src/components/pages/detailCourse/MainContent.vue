<template>
    <div class="bg-white rounded-4">
        <div class="p-4">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-between">
                        <p class="text-800 fs-20 fw-semibold">វគ្គសិក្សា HTML / HTML5 + CSS</p>
                        <form class="d-flex mt">
                            <button class="btn btn-primary ms-3 rounded-5 fs-16" type="button" @click="redirectToTelegram">
                                <i class="bi bi-telegram me-2"></i>ទំនាក់ទំនងចុះឈ្មោះសិក្សា
                            </button>
                        </form>
                    </div>
                    <p class="text-800 fs-18 fw-medium mb-2">តម្លៃ៖​ 60$</p>
                    <p class="text-800 fs-18 fw-medium mb-2">​សិក្សារយៈពេល ៖ ៥០ម៉ោង</p>
                    <p class="text-800 fs-18 fw-medium mb-2">សិក្សាពីថ្ងៃ ចន្ទ​ ដល់ សុក្រ​ ម៉ោង​ ១១:០០-១២:២០ព្រឹក</p>
                    <p class="text-800 fs-16 text-justify ">នេះជា​វគ្គ ​HTML (Hyper Text Markup
                        Language) ​ដែល​បាន​បង្កើត​ឡើង​សម្រាប់​អ្នក​ដែល​ចង់​សិក្សា​អំពី​កា​បង្កើត​វែបសាយ
                        ។HTML ជាគ្រឹះដ៏​សំខាន់ និង​មិនអាច​ខ្វះបាន​សម្រាប់​ការឈានទៅ​សិក្សា CSS3,
                        Bootstrap, JavaScript, PHP, ASP.NET ។ល។
                        ​វគ្គ​នេះ​លោកអ្នក​មិនត្រឹមតែ​សិក្សា​ពី HTML ប៉ុណ្ណោះទេ
                        លោកអ្នក​នឹង​សិក្សា​ពីការ​ប្រើ​ប្រាស់ Visual Studio Code និង
                        មុខងារថ្មីៗ​ដែល​មាន​ក្នុង HTML5 ថែម​ទៀតផង ។</p>

                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <p class="text-800 fs-20 fw-semibold mt-2 mb-0">គ្រោងនៃការសិក្សា</p>
                    <div class="accordion">
                        <div class="accordion-item">
                            <p class="accordion-header">
                                <button class="accordion-button text-700 fs-18 fw-medium" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                    aria-controls="collapseOne">
                                    តើមានថ្នាក់បើកថ្មីវេនយប់ដែលឬទេ?
                                </button>
                            </p>
                            <div id="collapseOne" class="accordion-collapse collapse show"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body text-700">
                                    ចំពោះវគ្គសិក្សាវេនរសៀល នៅថ្នាក់បណ្ដុះបណ្ដាលបច្ចេកវិទ្យាអាន-ANT គឺមិនមាននោះទេ
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <p class="accordion-header">
                                <button class="accordion-button collapsed text-700 fs-18 fw-medium" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                    aria-controls="collapseTwo">
                                    តើមានថ្នាក់បើកថ្មីថ្ងៃចុងសប្ដាហ៍ដែលឬទេ?
                                </button>
                            </p>
                            <div id="collapseTwo" class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body text-700">
                                    ចំពោះវគ្គសិក្សាវេនរសៀល នៅថ្នាក់បណ្ដុះបណ្ដាលបច្ចេកវិទ្យាអាន-ANT គឺមិនមាននោះទេ
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <p class="accordion-header">
                                <button class="accordion-button collapsed text-700 fs-18 fw-medium" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                    aria-controls="collapseThree">
                                    តើមានថ្នាក់បើកថ្មីថ្ងៃចុងសប្ដាហ៍ដែលឬទេ?
                                </button>
                            </p>
                            <div id="collapseThree" class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body text-700">
                                    ចំពោះវគ្គសិក្សាវេនរសៀល នៅថ្នាក់បណ្ដុះបណ្ដាលបច្ចេកវិទ្យាអាន-ANT គឺមិនមាននោះទេ
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <p class="accordion-header">
                                <button class="accordion-button collapsed text-700 fs-18 fw-medium" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                                    aria-controls="collapseFour">
                                    តើមានថ្នាក់បើកថ្មីថ្ងៃចុងសប្ដាហ៍ដែលឬទេ?
                                </button>
                            </p>
                            <div id="collapseFour" class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body text-700">
                                    ចំពោះវគ្គសិក្សាវេនរសៀល នៅថ្នាក់បណ្ដុះបណ្ដាលបច្ចេកវិទ្យាអាន-ANT គឺមិនមាននោះទេ
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <p class="accordion-header">
                                <button class="accordion-button collapsed text-700 fs-18 fw-medium" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                                    aria-controls="collapseFive">
                                    តើមានថ្នាក់បើកថ្មីថ្ងៃចុងសប្ដាហ៍ដែលឬទេ?
                                </button>
                            </p>
                            <div id="collapseFive" class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body text-700">
                                    ចំពោះវគ្គសិក្សាវេនរសៀល នៅថ្នាក់បណ្ដុះបណ្ដាលបច្ចេកវិទ្យាអាន-ANT គឺមិនមាននោះទេ
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const telegramLink = 'https://t.me/AntTechnologyTrainingCenter';

const redirectToTelegram = () => {
  window.open(telegramLink, '_blank');
};


</script>