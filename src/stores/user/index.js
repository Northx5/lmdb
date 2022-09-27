import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    nRating: 0,
    lRating: 0,
    yearSeen: null
  })
});