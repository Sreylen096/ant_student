<template>
  <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mt-lg-0 mt-4">
    <a href="" @click = 'onDetailClassroom(card.id)'>
      <div class="card border-0 rounded-4 shadow-none">
      <div>
        <img :src="card.course.photo" class="card-img-top p-3 img-fluid" :alt="card.course.course_name" />
      </div>
      <div class="card-body py-0">
        <h5 class="card-title text-800 fw-bold fs-18">{{ card.course.course_name }}</h5>
        <div class="d-flex justify-content-between mt-3">
          <p>
            <svg class="me-1" width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M9.39297 0.922103C9.36088 0.683728 9.15812 0.5 8.91278 0.5C8.64514 0.5 8.42817 0.718652 8.42817 0.988372V1.5283H4.17747V0.988372L4.17305 0.922103C4.14096 0.683728 3.9382 0.5 3.69286 0.5C3.42522 0.5 3.20825 0.718652 3.20825 0.988372V1.54042C1.22237 1.6772 -0.000200491 2.96393 -0.000200491 5.04003V10.9328C-0.000200491 13.161 1.37064 14.5 3.56718 14.5H9.03235C11.2315 14.5 12.5998 13.1835 12.5998 10.9821V5.04003C12.6061 2.96324 11.3875 1.67688 9.39739 1.54038V0.988372L9.39297 0.922103ZM8.42817 2.505V3.13121L8.43259 3.19747C8.46468 3.43585 8.66744 3.61958 8.91278 3.61958C9.18043 3.61958 9.39739 3.40093 9.39739 3.13121V2.51945C10.8452 2.64 11.6351 3.51194 11.6304 5.03849V5.32139H0.968935V5.03999C0.968935 3.5143 1.76321 2.6405 3.20825 2.51953V3.13121L3.21267 3.19747C3.24476 3.43585 3.44752 3.61958 3.69286 3.61958C3.96051 3.61958 4.17747 3.40093 4.17747 3.13121V2.505H8.42817ZM0.968935 6.29813V10.9328C0.968935 12.6146 1.89917 13.5232 3.56709 13.5232H9.03226C10.7059 13.5232 11.6304 12.6336 11.6304 10.982L11.6304 6.29813H0.968935ZM9.66075 8.35281C9.66075 8.08309 9.44379 7.86444 9.17614 7.86444L9.1044 7.8689C8.86786 7.90124 8.68554 8.10557 8.68554 8.35281C8.68554 8.62253 8.90251 8.84118 9.17614 8.84118L9.2419 8.83673C9.47844 8.80439 9.66075 8.60006 9.66075 8.35281ZM6.30881 7.86444C6.57645 7.86444 6.79342 8.08309 6.79342 8.35281C6.79342 8.60006 6.61111 8.80439 6.37457 8.83673L6.30881 8.84118C6.03518 8.84118 5.81821 8.62253 5.81821 8.35281C5.81821 8.10557 6.00052 7.90124 6.23706 7.8689L6.30881 7.86444ZM3.91993 8.35281C3.91993 8.08309 3.70297 7.86444 3.43532 7.86444L3.36358 7.8689C3.12704 7.90124 2.94472 8.10557 2.94472 8.35281C2.94472 8.62253 3.16169 8.84118 3.42933 8.84118L3.50108 8.83673C3.73762 8.80439 3.91993 8.60006 3.91993 8.35281ZM9.17614 10.3952C9.44379 10.3952 9.66075 10.6138 9.66075 10.8836C9.66075 11.1308 9.47844 11.3351 9.2419 11.3675L9.17614 11.3719C8.90251 11.3719 8.68554 11.1533 8.68554 10.8836C8.68554 10.6363 8.86786 10.432 9.1044 10.3996L9.17614 10.3952ZM6.79342 10.8836C6.79342 10.6138 6.57645 10.3952 6.30881 10.3952L6.23706 10.3996C6.00052 10.432 5.81821 10.6363 5.81821 10.8836C5.81821 11.1533 6.03518 11.3719 6.30881 11.3719L6.37457 11.3675C6.61111 11.3351 6.79342 11.1308 6.79342 10.8836ZM3.43532 10.3952C3.70297 10.3952 3.91993 10.6138 3.91993 10.8836C3.91993 11.1308 3.73762 11.3351 3.50108 11.3675L3.42933 11.3719C3.16169 11.3719 2.94472 11.1533 2.94472 10.8836C2.94472 10.6363 3.12704 10.432 3.36358 10.3996L3.43532 10.3952Z"
                fill="#C03744" />
            </svg>{{ card.course.study_days }}
          </p>
          <p>
            <svg width="15" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M7 0.5C3.13375 0.5 0 3.63375 0 7.5C0 11.3662 3.13375 14.5 7 14.5C10.8662 14.5 14 11.3662 14 7.5C14 3.63375 10.8662 0.5 7 0.5ZM7 1.55C10.2864 1.55 12.95 4.21365 12.95 7.5C12.95 10.7864 10.2864 13.45 7 13.45C3.71365 13.45 1.05 10.7864 1.05 7.5C1.05 4.21365 3.71365 1.55 7 1.55ZM7.28334 4.52122C7.24858 4.26497 7.02892 4.06746 6.76313 4.06746C6.47319 4.06746 6.23813 4.30251 6.23813 4.59246V7.98536L6.24398 8.06358C6.26718 8.21762 6.35807 8.35504 6.49417 8.43623L9.13317 10.0105L9.1968 10.0429C9.43468 10.1443 9.71684 10.0569 9.853 9.82863L9.88538 9.76499C9.98681 9.52711 9.89936 9.24496 9.6711 9.10879L7.28785 7.68653L7.28813 4.59246L7.28334 4.52122Z"
                fill="#C03744" />
            </svg>
            {{ card.course.study_times }}
          </p>
        </div>
        <p class="card-text mb-3 mt-1">{{ card.course.start_date_format }}</p>
      </div>
      <div class="card-body py-0 my-0">
        <hr class="mt-0" />
        <div class="d-flex justify-content-between">
          <p class="text-700 fw-semibold fs-24 text-error">${{ card.course.price }}.00</p>
          <span><a :href="telegramLink" class="btn btn-primary rounded-5 border-0" target="_blank">
              <i class="bi bi-telegram me-2"></i>{{ buttonText }}
            </a></span>
        </div>
      </div>
    </div>
    </a>
  </div>
</template>

<script setup>
  import {useRouter} from 'vue-router';
  const Router = useRouter()

defineProps({
  card: {
    type: Object,
    required: true,
  },
  telegramLink: {
    type: String,
    default: "https://t.me/AntTechnologyTrainingCenter",
  },
  buttonText: {
    type: String,
    default: "ព័ត៌មានបន្ថែម",
  },
});



const  onDetailClassroom = async (classroom_id)  =>{
  event.preventDefault()
  Router.push(`/pageDetail/courseOutlineDetail/${classroom_id}`);
}
</script>


