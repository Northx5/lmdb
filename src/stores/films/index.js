import { defineStore } from 'pinia';

import { getDatabase, ref, push, child, get } from 'firebase/database';

export const useFilmsStore = defineStore('films', {
	state: () => ({
		formData: {
			filmId: null,
			filmName: '',
			yearSeen: '',
			genres: []
		},
		filmsInDb: [],
	}),
	actions: {
		async submitFilms(payload, uId) {
			const db = getDatabase();
			await push(ref(db, `uId:${uId}/filmList`), {
				...payload
			});
		},
		async getFilms(uId) {
			const dbRef = ref(getDatabase());
			await get(child(dbRef, `uId:${uId}/filmList`)).then((snapshot) => {
				if (snapshot.exists()) {
					const data = Object.values(snapshot.val());
					this.filmsInDb = [].concat(...data);
					console.log(this.filmsInDb);
				} else {
					console.log('no data');
				}
			});
		}
	}
});