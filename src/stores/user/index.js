import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    userId: 0,
    nRating: 0,
    lRating: 0,
    yearSeen: null
  })
});