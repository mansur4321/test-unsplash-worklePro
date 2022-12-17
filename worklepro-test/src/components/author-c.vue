<template>
  <div class="author">
    <img :src="imgUrl" :alt="nameUser" class="author__image">

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

	computed: {
		correctUserInst() {
			return this.userInst ? '@' + this.userInst : '' 
		}
	}
}
</script>

<style>

</style>