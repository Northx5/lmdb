<template>
<div>
	<div class="grid">
		<table class="list" style="margin-top:2rem">
			<tr>
				<th @click="sortList('filmName')">Film Name</th>
				<th @click="sortList('yearSeen')">Year Seen</th>
				<th @click="sortList('lRating')">Laura's Rating</th>
				<th @click="sortList('nRating')">Nevzat's Rating</th>
			</tr>
			<tr v-for="(film, index) in sortedData" :key="index">
				<td>{{ film.filmName }}</td>
				<td>{{ film.yearSeen }}</td>
				<td>{{ film.lRating }}</td>
				<td>{{ film.nRating }}</td>
			</tr>
		</table>    
	</div>
	<router-link :to="{ name: 'AddFilms' }">Add Films</router-link>
</div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useFilmsStore } from '@/stores/films';
export default {
	name: 'FilmsList',
	data () {
		return {
			sortedData: [],
			sortedByDESC: true,
			userId: 578
		};
	},
	mounted() {
		this.getFilmsForUser();
	},
	computed: {
		...mapState(useFilmsStore, ['filmsInDb'])
	},
	methods: {
		sortList(sortBy) {
			if (this.sortedByDESC) {
				this.sortedData.sort((x, y) => (x[sortBy] > y[sortBy] ? -1 : 1));
				this.sortedByDESC = false;
			} else {
				this.sortedData.sort((x, y) => (x[sortBy] < y[sortBy] ? -1 : 1));
				this.sortedByDESC = true;
			}
		},
		getFilmsForUser() {
			this.getFilms(this.userId).then(()=> {
				this.sortedData = this.filmsInDb;
			});
		},
		...mapActions(useFilmsStore, ['getFilms'])
	}
};
</script>