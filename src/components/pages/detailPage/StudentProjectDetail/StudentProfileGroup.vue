<template>
    <div class="container p-0">
        <div class="card-body py-4">
            <div class="row d-flex justify-content-between">
                <div class="col-12 mt-4 mt-md-0">
                    <div class="p-c-2 border-cus rounded-3 px-3">
                        <div class="row">
                            <div class="col-12 col-md-4 ">
                                <img :src="avatarImage" alt="" class="img-fluid w-100">
                            </div>
                            <div class="col-12 col-md-8 m-md-0 mx-3 p-0">
                                <div class="pe-3 mt-3">
                                    <p class="text-700 fs-14 fw-semibold mb-0">
                                        {{ name }}
                                        <span class="text-700 fs-14 fw-medium">({{ nameEnglish }})</span>
                                    </p>
                                    <div class="d-md-flex mt-2 mb-0">
                                        <p class="text-600 me-3 fs-14">
                                            <svg class="me-1" width="16" height="14" viewBox="0 0 16 14" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M1 2.88595V11.1145C1 12.0234 1.69645 12.7602 2.55556 12.7602H13.4444C14.3036 12.7602 15 12.0234 15 11.1145V2.88595C15 1.97705 14.3036 1.24023 13.4444 1.24023H2.55556C1.69645 1.24023 1 1.97705 1 2.88595Z"
                                                    stroke="#726C6C" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M10.332 5.35449H12.6654" stroke="#726C6C"
                                                    stroke-linecap="round" />
                                                <path d="M10.332 7.82324H12.6654" stroke="#726C6C"
                                                    stroke-linecap="round" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M7.22049 5.3547C7.22049 6.26363 6.52406 7.00041 5.66493 7.00041C4.80582 7.00041 4.10938 6.26363 4.10938 5.3547C4.10938 4.4458 4.80582 3.70898 5.66493 3.70898C6.07746 3.70898 6.47312 3.88237 6.76486 4.19101C7.05661 4.49963 7.22049 4.91823 7.22049 5.3547Z"
                                                    stroke="#726C6C" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M2.55469 10.2917C4.71924 7.71036 7.2618 8.5217 8.77691 10.2917"
                                                    stroke="#726C6C" stroke-linecap="round" />
                                            </svg>
                                            {{ student_id }}
                                        </p>
                                        <p class="text-600 fs-14">
                                            <svg class="me-1" width="16" height="14" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M11.1828 0.482403C11.1446 0.209975 10.9032 0 10.6111 0C10.2925 0 10.0342 0.249888 10.0342 0.55814V1.17524H4.97525V0.55814L4.96999 0.482403C4.93178 0.209975 4.6904 0 4.39833 0C4.07971 0 3.82141 0.249888 3.82141 0.55814V1.18898C1.4562 1.34466 0 2.81536 0 5.18865V11.9233C0 14.4698 1.63195 16 4.24688 16H10.753C13.3711 16 14.9999 14.4954 14.9999 11.9796V5.18865C15.0075 2.81531 13.5569 1.34521 11.188 1.18907V0.55814L11.1828 0.482403ZM10.0342 2.29145V3.00709L10.0394 3.08283C10.0776 3.35526 10.319 3.56523 10.6111 3.56523C10.9297 3.56523 11.188 3.31534 11.188 3.00709V2.30787C12.9124 2.44526 13.8532 3.44182 13.8477 5.18687V5.51025H1.1554V5.18858C1.1554 3.44488 2.10102 2.44624 3.82141 2.30804V3.00709L3.82668 3.08283C3.86488 3.35526 4.10626 3.56523 4.39833 3.56523C4.71696 3.56523 4.97525 3.31534 4.97525 3.00709V2.29145H10.0342ZM1.1554 6.62653V11.9232C1.1554 13.8453 2.26282 14.8837 4.24843 14.8837H10.7546C12.747 14.8837 13.8477 13.867 13.8477 11.9795L13.8477 6.62653H1.1554ZM11.5009 8.97464C11.5009 8.66639 11.2426 8.4165 10.924 8.4165L10.8386 8.4216C10.557 8.45856 10.34 8.69208 10.34 8.97464C10.34 9.2829 10.5983 9.53278 10.924 9.53278L11.0023 9.52769C11.2839 9.49073 11.5009 9.25721 11.5009 8.97464ZM7.51093 8.4165C7.82955 8.4165 8.08785 8.66639 8.08785 8.97464C8.08785 9.25721 7.87081 9.49073 7.58921 9.52769L7.51093 9.53278C7.18518 9.53278 6.92688 9.2829 6.92688 8.97464C6.92688 8.69208 7.14392 8.45856 7.42552 8.4216L7.51093 8.4165ZM4.66561 8.97464C4.66561 8.66639 4.40731 8.4165 4.08869 8.4165L4.00327 8.4216C3.72168 8.45856 3.50464 8.69208 3.50464 8.97464C3.50464 9.2829 3.76293 9.53278 4.08156 9.53278L4.16697 9.52769C4.44857 9.49073 4.66561 9.25721 4.66561 8.97464ZM10.924 11.3091C11.2426 11.3091 11.5009 11.559 11.5009 11.8672C11.5009 12.1498 11.2839 12.3833 11.0023 12.4203L10.924 12.4254C10.5983 12.4254 10.34 12.1755 10.34 11.8672C10.34 11.5847 10.557 11.3511 10.8386 11.3142L10.924 11.3091ZM8.08785 11.8672C8.08785 11.559 7.82955 11.3091 7.51093 11.3091L7.42552 11.3142C7.14392 11.3511 6.92688 11.5847 6.92688 11.8672C6.92688 12.1755 7.18518 12.4254 7.51093 12.4254L7.58921 12.4203C7.87081 12.3833 8.08785 12.1498 8.08785 11.8672ZM4.08869 11.3091C4.40731 11.3091 4.66561 11.559 4.66561 11.8672C4.66561 12.1498 4.44857 12.3833 4.16697 12.4203L4.08156 12.4254C3.76293 12.4254 3.50464 12.1755 3.50464 11.8672C3.50464 11.5847 3.72168 11.3511 4.00327 11.3142L4.08869 11.3091Z"
                                                    fill="#726C6C" />
                                            </svg>

                                            {{ year }}
                                        </p>
                                    </div>
                                    <p class="text-600 me-3 fs-14" style="margin-top: -6px;"><svg class="me-1" width="16" height="17"
                                            viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 2.5L0.5 6.5L8 10.5L15.5 6.5L8 2.5Z" stroke="#726C6C"
                                                stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path
                                                d="M3.5 8.1001V11.5001C3.5 12.6001 5.5 14.0001 8 14.0001C10.5 14.0001 12.5 12.6001 12.5 11.5001V8.1001"
                                                stroke="#726C6C" stroke-miterlimit="10" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M15.5 6.5V13" stroke="#726C6C" stroke-miterlimit="10"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        សាកលវិទ្យាល័យ {{ university }}</p>
                                </div>
                            </div>
                            <div class="col-12">
                                <hr class="my-2">
                            </div>
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-12 col-md-9">
                                        <div class="d-flex align-items-center mb-0 justify-content-between">
                                            <p class="fs-12 text-400 me-2 mb-0 d-flex align-items-center">
                                                <a :href="fb_name" class="nav-link"><svg width="13" height="14"
                                                        viewBox="0 0 11 12" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M11 6.03347C11 2.97667 8.53831 0.5 5.5 0.5C2.46169 0.5 0 2.97667 0 6.03347C0 8.79529 2.01127 11.0845 4.64062 11.5V7.63304H3.24345V6.03347H4.64062V4.81432C4.64062 3.42761 5.46119 2.66162 6.71798 2.66162C7.31988 2.66162 7.94927 2.76961 7.94927 2.76961V4.13067H7.25556C6.5725 4.13067 6.35938 4.55728 6.35938 4.99483V6.03347H7.88474L7.64079 7.63304H6.35938V11.5C8.98873 11.0845 11 8.79529 11 6.03347Z"
                                                            fill="#1877FF" />
                                                    </svg>
                                                    Facebook</a>
                                            </p>
                                            <p class="fs-12 text-400 me-2 mb-0 d-flex align-items-center">
                                                <a :href="telegram" class="nav-link"><svg width="13" height="14"
                                                        viewBox="0 0 11 12" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M5.5 0.5C2.46169 0.5 0 2.96169 0 6C0 9.03831 2.46169 11.5 5.5 11.5C8.53831 11.5 11 9.03831 11 6C11 2.96169 8.53831 0.5 5.5 0.5ZM8.20121 4.26794L7.29859 8.52157C7.23206 8.82319 7.05242 8.89637 6.80181 8.75444L5.42681 7.74093L4.76371 8.37964C4.69052 8.45282 4.62843 8.51492 4.48649 8.51492L4.58407 7.11552L7.13226 4.81351C7.24315 4.71593 7.10786 4.66048 6.96149 4.75806L3.8123 6.74073L2.45504 6.31714C2.16008 6.22399 2.15343 6.02218 2.51714 5.88024L7.81976 3.83548C8.06593 3.74677 8.28105 3.89536 8.20121 4.26794Z"
                                                            fill="#24A1DE" />
                                                    </svg>
                                                    Telegram</a>
                                            </p>
                                            <p class="fs-12 text-400 me-2 mb-0 d-flex align-items-center">
                                                <a href="#" class="nav-link"><svg width="13" height="14"
                                                        viewBox="0 0 12 12" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="12" height="12" rx="6" fill="#487DFD" />
                                                        <path
                                                            d="M7.0686 3.41681C7.54384 2.89995 8.27582 2.85805 8.70354 3.32322C9.13125 3.78839 9.09271 4.58448 8.61748 5.10133L7.9291 5.85002M5.60578 6.6923C5.17807 6.22713 5.2166 5.43103 5.69184 4.91417L6.30263 4.24988"
                                                            stroke="white" stroke-linecap="round" />
                                                        <path
                                                            d="M6.81931 5.30762C7.30049 5.77279 7.25714 6.56888 6.7225 7.08574L5.94807 7.83441L5.17363 8.58312C4.63899 9.09998 3.81551 9.14186 3.33434 8.67669C2.85316 8.21152 2.89651 7.41543 3.43115 6.89857L4.20559 6.14986"
                                                            stroke="white" stroke-linecap="round" />
                                                    </svg>
                                                    Share link</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-3 d-flex justify-content-end mt-1 mt-md-0">
                                        <a href="#" class="nav-link mb-0 fs-12 text-primary-500">
                                            <i class="bi bi-eye me-1"></i>មើលបន្ថែម
                                        </a>
                                    </div>
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
defineProps({
    avatarImage: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    nameEnglish: {
        type: String,
        required: true,
    },
    student_id: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    university: {
        type: String,
        required: true,
    },
    fb_name: {
        type: String,
        required: true,
        default: '',
    },
    telegram: {
        type: String,
        required: true,
        default: '',
    },
});
</script>