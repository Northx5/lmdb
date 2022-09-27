<template>
<div class="grid">
	<label :for="`film-${filmId}`">Film name:</label>
	<input :id="`film-${filmId}`" type="text" />
	<label :for="`film-${filmYear}`">Year:</label>
	<input :id="`film-${filmYear}`" type="text" />
	<button>Add another one</button>
</div>
</template>
<script>
export default {
	name:'FilmBlock',
	props: {
		filmId: {
			type: String,
			default: ''
		},
		filmYear: {
			type: Number,
			default: 0
		}
	}  
};
</script>