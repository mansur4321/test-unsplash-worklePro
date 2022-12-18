<template>
	<div class="author"
		@click="clickOnAuthor"
	>
		<img class="author__image"
			:src="imgUrl"
			:alt="nameUser"
			@click.stop
		>

		<div class="author__text-wrapper">
			<p class="author__user-name">
				{{ nameUser }}
			</p>

			<p class="author__user-tag">
				{{ this.correctUserInst }}
			</p> 
		</div>
	</div>
</template>

<script>
export default {
	props: {
		imgUrl: String,
		nameUser: String,
		userInst: String,
	},

	emits: {
		openAuthorAccount: null,
	},

	computed: {
		correctUserInst() {
			return this.userInst ? '@' + this.userInst : '' 
		}
	},

	methods: {
		clickOnAuthor() {
			this.$emit('openAuthorAccount')
		}
	}
}
</script>

<style>

</style>