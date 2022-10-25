<template>
<div class="form-field">
	<span> {{ labelText }} </span>
	<ul class="flex radio-group m-t-1">
		<li v-for="(option, index) in options" :key="index">
			<input 
				type="radio" 
				:name="name"
				class="radio-input"
				:id="genID(name + option.label)"
				:checked="option.value == value"
				:value="option.value"
				@input="$emit('change', $event)">
			<label :for="genID(name + option.label)" class="radio-label"> {{ option.label }}</label>
		</li>
	</ul>
</div>
</template>
<script>
import { generateID } from '@/mixins/generateID';
export default {
	mixins:[generateID],
	emits:[ 'change'],
	props: {
		name:{
			type: String,
			default: ''
		},
		value: {
			type: [String, Number],
			default: ''
		},
		labelText:{
			type: String,
			default: ''
		},
		options: {
			type: Array,
			default () {
				return [
					{ label: '1', value: 1},
					{ label: '2', value: 2},
					{ label: '3', value: 3},
					{ label: '4', value: 4},
					{ label: '5', value: 5},
					{ label: '6', value: 6},
					{ label: '7', value: 7},
					{ label: '8', value: 8},
					{ label: '9', value: 9},
					{ label: '10', value: 10}
				];
			}
		}
	},
	emits:['change']
  
};
</script>
<style lang="scss">
@import './radioGroupField.scss';
</style>