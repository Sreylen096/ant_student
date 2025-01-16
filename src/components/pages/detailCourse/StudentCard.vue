<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-lg-0 mt-4">
    <a href="">
      <div class="card border-0 rounded-4 shadow-none">
        <div>
          <img :src="image" class="card-img-top p-3 img-fluid" />
        </div>
        <div class="card-body py-0">
          <p class="card-title text-800 fw-bold fs-16 mb-0">{{ title }}</p>
          <div class="d-flex justify-content-between mt-2 mb-0">
            <p class="text-700 fs-16 ">
              <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M19.8978 16H7.89778C6.96781 16 6.50282 16 6.12132 16.1022C5.08604 16.3796 4.2774 17.1883 4 18.2235"
                    stroke="#5A5555" stroke-width="1.5"></path>
                  <path d="M8 7H16" stroke="#5A5555" stroke-width="1.5" stroke-linecap="round"></path>
                  <path d="M8 10.5H13" stroke="#5A5555" stroke-width="1.5" stroke-linecap="round"></path>
                  <path
                    d="M10 22C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16V8C4 5.17157 4 3.75736 4.87868 2.87868C5.75736 2 7.17157 2 10 2H14C16.8284 2 18.2426 2 19.1213 2.87868C20 3.75736 20 5.17157 20 8M14 22C16.8284 22 18.2426 22 19.1213 21.1213C20 20.2426 20 18.8284 20 16V12"
                    stroke="#5A5555" stroke-width="1.5" stroke-linecap="round"></path>
                </g>
              </svg>
              {{ subject }}
            </p>
            <p class="card-text fs-16 text-600">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.66699 14H6.00033C3.48617 14 2.22909 14 1.44804 13.2189C0.666992 12.4379 0.666992 11.1808 0.666992 8.66667V7.33333C0.666992 4.81917 0.666992 3.5621 1.44804 2.78105C2.22909 2 3.48617 2 6.00033 2H8.66699C11.1811 2 12.4383 2 13.2193 2.78105C14.0003 3.5621 14.0003 4.81917 14.0003 7.33333V8.66667C14.0003 11.1808 14.0003 12.4379 13.2193 13.2189C12.7838 13.6544 12.2004 13.8471 11.3337 13.9323"
                  stroke="#5A5555" stroke-linecap="round" />
                <path d="M4.00098 2V1" stroke="#5A5555" stroke-linecap="round" />
                <path d="M10.667 2V1" stroke="#5A5555" stroke-linecap="round" />
                <path d="M13.667 5.3335H10.417H6.50033M0.666992 5.3335H3.25033" stroke="#5A5555"
                  stroke-linecap="round" />
                <path
                  d="M11.3343 10.6667C11.3343 11.0349 11.0358 11.3333 10.6676 11.3333C10.2994 11.3333 10.001 11.0349 10.001 10.6667C10.001 10.2985 10.2994 10 10.6676 10C11.0358 10 11.3343 10.2985 11.3343 10.6667Z"
                  fill="#5A5555" />
                <path
                  d="M11.3343 8.00016C11.3343 8.36836 11.0358 8.66683 10.6676 8.66683C10.2994 8.66683 10.001 8.36836 10.001 8.00016C10.001 7.63196 10.2994 7.3335 10.6676 7.3335C11.0358 7.3335 11.3343 7.63196 11.3343 8.00016Z"
                  fill="#5A5555" />
                <path
                  d="M8.00033 10.6667C8.00033 11.0349 7.70186 11.3333 7.33366 11.3333C6.96546 11.3333 6.66699 11.0349 6.66699 10.6667C6.66699 10.2985 6.96546 10 7.33366 10C7.70186 10 8.00033 10.2985 8.00033 10.6667Z"
                  fill="#5A5555" />
                <path
                  d="M8.00033 8.00016C8.00033 8.36836 7.70186 8.66683 7.33366 8.66683C6.96546 8.66683 6.66699 8.36836 6.66699 8.00016C6.66699 7.63196 6.96546 7.3335 7.33366 7.3335C7.70186 7.3335 8.00033 7.63196 8.00033 8.00016Z"
                  fill="#5A5555" />
                <path
                  d="M4.66732 10.6667C4.66732 11.0349 4.36884 11.3333 4.00065 11.3333C3.63246 11.3333 3.33398 11.0349 3.33398 10.6667C3.33398 10.2985 3.63246 10 4.00065 10C4.36884 10 4.66732 10.2985 4.66732 10.6667Z"
                  fill="#5A5555" />
                <path
                  d="M4.66732 8.00016C4.66732 8.36836 4.36884 8.66683 4.00065 8.66683C3.63246 8.66683 3.33398 8.36836 3.33398 8.00016C3.33398 7.63196 3.63246 7.3335 4.00065 7.3335C4.36884 7.3335 4.66732 7.63196 4.66732 8.00016Z"
                  fill="#5A5555" />
              </svg>

              {{ deadline }}
            </p>
          </div>

        </div>
        <div class="card-body py-0 my-0">
          <div class="d-flex justify-content-between">
            <p class="text-700 fs-16" style="margin-top: -10px;">
              <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <circle cx="12" cy="6" r="4" stroke="#5A5555" stroke-width="1.5"></circle>
                  <path
                    d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634"
                    stroke="#5A5555" stroke-width="1.5" stroke-linecap="round"></path>
                </g>
              </svg>
              {{ creator }}
            </p>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  creator: String,
  subject: String,
  deadline: String,
  image: String
})
</script>