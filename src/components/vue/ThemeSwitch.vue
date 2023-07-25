<script lang="ts">
/**
 * Replica de ThemeSwitch.astro en Vue.js. No está instanciado
 *
 * import ThemeSwitchVue from '../components/vue/ThemeSwitch.vue'
 * <ThemeSwitchVue client:load />
 */
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			theme: localStorage.getItem('theme') || 'light'
		}
	},
	methods: {
		handleClick() {
			this.theme = this.theme === 'light' ? 'dark' : 'light'
		}
	},
	watch: {
		theme(newTheme) {
			if (newTheme === 'dark') {
				document.documentElement.classList.add('dark')
			} else {
				document.documentElement.classList.remove('dark')
			}
			localStorage.setItem('theme', newTheme)
		}
	}
})
</script>

<template>
	<div>
		<button @click="handleClick">{{ theme === 'light' ? '🌙' : '🌞' }}</button>
	</div>
</template>

<style></style>
