import { defineStore } from 'pinia';

import { getDatabase, ref, set, push } from 'firebase/database';

export const useFilmsStore = defineStore('films', {
	state: () => ({
		formData: {
			filmId: null,
			filmName: '',
			filmYear: '',
		},
		filmList: []
	}),
	actions: {
		async submitFilms(payload) {
			console.log('payload at action', payload);
			const db = getDatabase();
			await push(ref(db), {
				filmList: payload
			});
		}
	}
});