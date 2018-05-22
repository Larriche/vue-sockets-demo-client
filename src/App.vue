<template>
	<div class="row">
		<!-- sidebar -->
		<app-sidebar v-if="authenticated"></app-sidebar>

		<!-- main content -->
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
import Partials from './components/partials';
import { mapGetters, mapActions } from 'vuex';


export default {
	components: {
		...Partials
	},

	computed: {
			...mapGetters({
				authenticated: 'Auth/check',
				getUser: 'Auth/getUser',
			})
		},

		methods: {
			...mapActions({
				logout: 'Auth/logout',
			}),

			logoutUser() {
				this.logout();
				this.$router.push({ name: 'login' });
			}
		}
}
</script>


<style scoped>
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .3s
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
	  opacity: 0
	}
</style>