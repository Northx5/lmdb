<template>
<div class="form-field"> 
	<label class="m-r-5" for="genID(name + text)"> {{ text }} </label>
	<input 
		:value="value" 
		:name="name" 
		:id="genID(name + text)" 
		:type="type" 
		@input="$emit('input', $event)" 
		:class="['input-el', classes]"/>
</div>
</template>

<script>
import { generateID } from '@/mixins/generateID';
export default {
	mixins:[generateID],
	emits: ['input'],
	props: {
		name: {
			type: String,
			default: ''
		},
		type: {
			type: String,
			default: ''
		},
		text: {
			type: String,
			default: ''
		},
		value: {
			type: String, 
			default: ''
		},
		classes: {
			type: String,
			default: ''
		}
	}
};
</script>
<style lang="scss">
@import './inputField.scss';
</style>