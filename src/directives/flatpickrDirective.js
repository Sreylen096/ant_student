// src/directives/flatpickrDirective.js
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';

export const flatpickrDirective = {
  mounted(el, binding) {
    flatpickr(el, {
      ...binding.value, 

    });
  },
};
