<template>
<form class="films-form grid content" @submit.prevent="submit">
	<InputField
		classes=""
		type="text"
		name="filmName"
		text="Film name:"
		:value="formData.filmName"
		@input="formData.filmName = $event.target.value" />

	<InputField
		classes=""
		type="number"
		name="yearSeen"
		text="Year seen:"
		:value="formData.yearSeen"
		@input="formData.yearSeen = $event.target.value" />

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
			
	<Button
		@btnClick="addFilm"
		btnText="Add film"
		classes="primary" />

	<table class="film-list text-align-center">
		<tr>
			<th>Film Name</th>
			<th>When Seen</th>
			<th>Laura's Rating</th>
			<th>Nevzat's Rating</th>
		</tr>
		<tr v-for="(film, index) in filmList" :key="index">
			<td>{{ film.filmName }}</td>
			<td>{{ film.yearSeen.slice(0, 4) }}</td>
			<td>{{ film.lRating }}</td>
			<td>{{ film.nRating }}</td>
			<td>
				<Button 
					@btnClick="removeItem(index)"
					btnText="Remove"
					classes="alternative"  /></td>
		</tr>
	</table>

	<Button
		btnText="Submit Films"
		classes="primary" />
	
</form>

<router-link class="content" :to="{ name: 'FilmsList' }">Films List</router-link>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useFilmsStore } from '@/stores/films';
import RadioGroupField from '@/components/FormComponents/RadioGroupField/RadioGroupField.vue';
import InputField from '@/components/FormComponents/InputField/InputField.vue';
import Button from '@/components/UI/Button/Button.vue';
export default {
	name: 'AddFilms',
	components: {
		RadioGroupField,
		InputField,
		// eslint-disable-next-line vue/no-reserved-component-names
		Button
	},
	data () {
		return {
			formData: {
				filmId: null,
				filmName: '',
				nRating: 0,
				lRating: 0,
				yearSeen: new Date().toISOString().slice(0, 4),
				genres: []
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
<style lang="scss">
@import '../assets/scss/pages/add-films.scss';
</style>