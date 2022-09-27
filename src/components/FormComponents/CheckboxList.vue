<template>
<span> {{ labelText }} </span>
<ul :ref="name" :id="name">
	<li v-for="(option, index) in options" :key="index">
		<input
			v-model="selected"
			type="checkbox" 
			:name="name" 
			:id="genID(option.label)"
			:value="option.value"
			:checked="values.indexOf(option.value) > -1"
			@changed="$emit('change', selected)">	
		<label :for="genID(option.label)"> {{ option.label }} </label>
	</li>
</ul>
</template>
<script>
import { generateID } from '@/mixins/generateID';
export default {
	name: 'CheckboxList',
	mixins: [generateID],
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
					{ label: '1aa 3dS2a', value: 1},
					{ label: '2bbqw cSEb', value: 2},
					{ label: '3cc QWqc', value: 3},
				];
			}
		},
		values: {
			type: Array,
			default () {
				return [];
			}
		}
	},
	emits:['change'],
	data () {
		return {
			selected: this.values
		};
	},
	watch: {
		values () {
			this.selected = this.values;
		}
	}
};
</script>