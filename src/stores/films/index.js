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
		async submitFilms(payload, uId) {
			console.log('payload at action', payload);
			const db = getDatabase();
			await set(ref(db, '/films/', uId), {
				filmList: payload
			});
		}
	}
});