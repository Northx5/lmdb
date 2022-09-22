import { defineStore } from 'pinia';

export const useFilmsStore = defineStore('films', {
  state: () => ({
    filmId: null,
    filmName: '',
    filmList: []
  })
})