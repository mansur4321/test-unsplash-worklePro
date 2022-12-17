<template>
	<container-c>
		<main class="main">
			<user-card-c />
			<user-card-c />
			<user-card-c />
			<user-card-c />
			<user-card-c />
			<user-card-c />
		</main>

		<footer-c />
	</container-c>
</template>

<script>
import containerC from './components/container-c.vue'
import UserCardC from './components/user-card-c.vue'
import footerC from './components/footer-c.vue'

import UsersData from './API/UsersData'

export default {
	components: { containerC, UserCardC, footerC },

	async mounted() {
		const usersDataObj = new UsersData();
		let pageData = await usersDataObj.getPageData(1);
		console.log(pageData)

		//const response = await fetch(`https://api.unsplash.com/photos?page=1&client_id=xv5xcguRNO1pSxm3sisjL5uUIhp8AGLB_B-CN3b33NM`, {
        //    method: 'GET'
        //});
        //const message = await response.json();
        //console.log(message)
	}
	
}
</script>

<style src="./styles/index.scss" lang="scss">
</style>
