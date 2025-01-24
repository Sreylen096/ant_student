<template>
    <section class="mt-4">
        <div class="container bg-white rounded-4 ">
                <div class="row p-0">
                    <div class="col-12 p-4">
                        <div class="d-flex align-items-center">
                            <div class="bg-primary-500 text-white rounded-circle d-flex align-items-center justify-content-center"
                                style="width: 30px; height: 30px;">
                                <i class="bi bi-search"></i>
                            </div>
                            <p class="fs-20 fw-semibold text-800 ms-3 mb-0">កំណត់ការបង្ហាញវគ្គសិក្សា</p>
                        </div>

                        <div class="mt-2">
                            <p class="text-700">
                                កំណត់ការបង្ហាញវគ្គសិក្សាជួយឲ្យអ្នកអាចស្វែងរកវគ្គសិក្សាដែលអ្នកចង់រកបានយ៉ាងឆាប់រហ័ស</p>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-4">
                                <div class="position-relative d-flex justify-content-between">
                                    <input type="text"
                                        class="form-control bg-body border-0 shadow-none fs-14 py-3 rounded-5"
                                        id="exampleFormControlInput1" placeholder="ស្វែងរកវគ្គសិក្សា..." style="height: 40px;">
                                    <div class="position-absolute top-50 end-0 translate-middle-y me-2 bg-white text-700 rounded-circle d-flex align-items-center justify-content-center"
                                        style="width: 24px; height: 24px;">
                                        <i class="bi bi-search"></i>
                                    </div>
                                </div>

                            </div>
                            <div class="col-12 col-md-4 mt-3 mt-md-0">
                                <div class="d-flex align-items-center position-relative">
                                    <select class="form-select bg-body border-0 shadow-none fs-14 text-700 rounded-5"
                                        id="exampleDropdown" style="padding-right: 50px; height: 40px;">
                                        <option selected disabled>មុខជំនាញ</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                    <div class="position-absolute top-50 end-0 translate-middle-y me-2 bg-white text-700 rounded-circle d-flex align-items-center justify-content-center"
                                        style="width: 24px; height: 24px;">
                                        <i class="bi bi-chevron-down fw-bolder"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-4 mt-3 mt-md-0">
                                <div class="d-flex align-items-center position-relative">
                                    <select class="form-select bg-body border-0 shadow-none fs-14 text-700 rounded-5"
                                        id="exampleDropdown" style="padding-right: 50px; height: 40px;">
                                        <option selected disabled>មុខវិជ្ជា</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                    <div class="position-absolute top-50 end-0 translate-middle-y me-2 bg-white text-700 rounded-circle d-flex align-items-center justify-content-center"
                                        style="width: 24px; height: 24px;">
                                        <i class="bi bi-chevron-down"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="d-flex align-items-center ">
                                    <button type="button" class="btn btn-cus-primary rounded-5 ">បង្ហាញវគ្គសិក្សា<i class="bi bi-chevron-right ms-1"></i></button>
                                    <button type="button" class="btn btn-cus-primary rounded-5 ms-4 ">កំណត់ឡើងវិញ<i class="bi bi-arrow-clockwise ms-1"></i></button>
                                </div>
                        </div>
                    </div>
                </div>

            </div>

    </section>
</template>