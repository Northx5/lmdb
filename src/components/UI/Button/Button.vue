<template>
<button
	@click="$emit('btnClick')"
	:type="btnType"
	:class="['btn flex align-items-center justify-content-center', classes]"> 
	{{ btnText }}
</button>
</template>

<script>
export default {
	emits:['btnClick'],
	props: {
		btnType: {
			type: String,
			default: 'button'
		},
		btnText: {
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
@import './button.scss'
</style>