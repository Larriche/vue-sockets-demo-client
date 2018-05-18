<template>
	<div class="row">
		<!-- sidebar -->
		<app-sidebar></app-sidebar>

		<!-- main content -->
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>

		<!-- footer -->
		<app-footer></app-footer>
	</div>
</template>

<script>
import Partials from './components/partials';

export default {
	components: {
		...Partials
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