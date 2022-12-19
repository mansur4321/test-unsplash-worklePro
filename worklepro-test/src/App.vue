<template>
	<container-c>
		<main class="main" 
			v-if="check"
		>
			<user-card-c 
				v-for="user in users"
				:key="user.id"
				:userData="user"
			/>
		</main>
		<expect-c 
			v-else
		/>

		<footer-c
			:rangePage="$options.maxRangePage"
			@openNewPage="openNewPage"
		/>
	</container-c>
</template>

<script>
import UsersData from './API/UsersData'

import containerC from './components/container-c.vue'
import UserCardC from './components/user-card-c.vue'
import footerC from './components/footer-c.vue'
import ExpectC from './components/expect-c.vue'

export default {
	components: { containerC, UserCardC, footerC, ExpectC },

	maxRangePage: 59,

	data() {
		return {
			users: [],
			check: false,
		}
	},

	async mounted() {
		const usersDataObj = new UsersData();

		try {
			const arrUsersData = await usersDataObj.getPageData(1);
			this.users = arrUsersData;
			this.check = true;
		} catch (error) {
			alert(error.message);
		}
	},

	methods: {
		async openNewPage(newPage) {
			this.check = false;
			const usersDataObj = new UsersData();
			
			try {
				const arrUsersData = await usersDataObj.getPageData(newPage);
				this.users = arrUsersData;
				this.check = true;
			} catch (error) {
				alert(error.message);
			}
		}
	}
	
}
</script>

<style src="./styles/index.scss" lang="scss">
</style>
