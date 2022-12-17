<template>
	<container-c>
		<main class="main" v-if="check">
			<user-card-c 
				v-for="user in users"
				:key="user.id"
				:userData="user"
			></user-card-c>
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

	data() {
		return {
			users: [],
			check: false,
		}
	},

	async mounted() {
		const usersDataObj = new UsersData();
		this.users = await usersDataObj.getPageData(1);
		
		this.check = true;
	}
	
}
</script>

<style src="./styles/index.scss" lang="scss">
</style>
