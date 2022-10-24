<template>
<div>
	<div class="grid">
		<label :for="formData.filmName">Film name:</label>
		<input v-model="formData.filmName" :id="formData.filmName" type="text" />
		<label :for="formData.yearSeen">Year seen:</label>
		<input v-model="formData.yearSeen" :id="formData.yearSeen" type="text" />

		<RadioGroupField 
			name="lRating"
			label-text="Laura's Rating"
			:value="formData.lRating"
			@change="($event) => formData.lRating = $event.target.value" />

		<RadioGroupField 
			name="nRating"
			label-text="Nevzat's Rating"
			:value="formData.nRating"
			@change="($event) => formData.nRating = $event.target.value" />
		<button style="width: 200px; height:50px" @click="addFilm">Add another one</button>
	</div>

	<table class="list">
		<tr>
			<th>Film Name</th>
			<th>Year Seen</th>
			<th>Laura's Rating</th>
			<th>Nevzat's Rating</th>
		</tr>
		<tr v-for="(film, index) in filmList" :key="index">
			<td>{{ film.filmName }}</td>
			<td>{{ film.yearSeen }}</td>
			<td>{{ film.lRating }}</td>
			<td>{{ film.nRating }}</td>
			<td><button @click="removeItem(index)">Remove</button></td>
		</tr>
	</table>
	<button @click="submit" style="margin-top: 40px">Submit Films</button>

	<router-link :to="{ name: 'FilmsList' }">Films List</router-link>
	
</div>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useFilmsStore } from '@/stores/films';
import RadioGroupField from '@/components/FormComponents/RadioGroupField/RadioGroupField.vue';
export default {
	name: 'AddFilms',
	components: {
		RadioGroupField
	},
	data () {
		return {
			formData: {
				filmId: null,
				filmName: '',
				nRating: 0,
				lRating: 0,
				yearSeen: null
			},
			filmList: [],
			userId: 578
		};		
	},
	computed: {
		...mapState(useFilmsStore, ['filmsInDb'])
	},
	methods: {
		addFilm () {
			this.filmList.push({
				filmId: this.formData.filmName + Math.random(),
				filmName: this.formData.filmName,
				yearSeen: this.formData.yearSeen,
				lRating: this.formData.lRating,
				nRating: this.formData.nRating
			});
		},
		removeItem (index) {
			this.filmList.splice(index, 1);
		},
		submit () {
			const payload = this.filmList;
			console.log(payload);
			
			this.submitFilms(payload, this.userId).then(() => {
				console.log('submitted');
			});
		},
		...mapActions(useFilmsStore, ['submitFilms', 'getFilms'])
	}
};
</script>