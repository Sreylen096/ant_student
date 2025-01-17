
<template>
  <div class="container-fluid border-top border-bottom bg-white p-0 sticky-top mb-0">
    <div class="top-navbar">
      <div class="container p-md-0 ">
        <div class="row py-2">
          <div class="col-12 col-sm-12 col-lg-6 d-sm-flex justify-content-sm-start text-1000 fs-14">
            <p class="mb-0">
              <i class="bi bi-envelope-fill me-2"></i>anttrainingcenter@gmail.com
            </p>
            <p class="ms-md-4 mb-0">
              <i class="bi bi-telephone-fill me-2"></i>+855 10 666 653
            </p>
          </div>
          <div class="col-12 col-sm-12 col-lg-6 text-md-end text-1000 d-sm-flex justify-content-md-start justify-content-lg-end">
            <p class="mb-0 fs-14">
              <i class="bi bi-geo-alt-fill me-2"></i>ផ្ទះលេខ៤២, ផ្លូវ៦០៦,
              សង្កាត់បឹងកក់ទី១, ខណ្ឌទួលគោក, ភ្នំពេញ
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid sticky-top bg-white p-0">
  <div class="container p-md-0 shadow-none">
    <nav class="navbar navbar-expand-lg shadow-none px-0 py-3 py-sm-4 py-md-2">

      <a class="navbar-brand" href="#">
        <img src="/images/homepage/ANTlogo 1.png" alt="" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar">
        <span><svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#487DFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></span>
      </button>

      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
            <img src="/images/homepage/ANTlogo 1.png" alt="" />
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav mx-auto mb-lg-0 fs-16">
            <li class="nav-item me-md-2">
              <RouterLink class="nav-link text-900 navbar-hover" aria-current="page" to="/" :class="{'active': $route.path === '/'}">ទំព័រដើម</RouterLink>
            </li>
            <li class="nav-item me-md-2">
              <RouterLink class="nav-link text-900 navbar-hover" to="/NewOpeningCourse" :class="{'active': $route.path === '/NewOpeningCourse'}">ថ្នាក់បើកថ្មី</RouterLink>
            </li>
            <li class="nav-item me-md-2">
              <RouterLink class="nav-link text-900 navbar-hover" to="/DetailCourse" :class="{'active': $route.path === '/DetailCourse'}">អំពីវគ្គសិក្សា</RouterLink>
            </li>
            <li class="nav-item me-md-2">
              <RouterLink class="nav-link text-900 navbar-hover" to="/StudentProject" :class="{'active': $route.path === '/StudentProject'}">ស្នាដៃសិស្ស</RouterLink>
            </li>
          </ul>
          <div class="mt-0">
            <form class="d-flex mt">
              <button class="btn btn-primary rounded-5 mt-4 mt-lg-0 ms-md-0 ms-lg-3 " type="button" @click="redirectToTelegram">
                <i class="bi bi-telegram me-2"></i>Join Telegram
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  </div>
</div>

</template>

<script setup>

const telegramLink = 'https://t.me/AntTechnologyTrainingCenter';

const redirectToTelegram = () => {
  window.open(telegramLink, '_blank');
};


</script>

