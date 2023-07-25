<script lang="ts">
/**
 * Ejemplo usando Vue del themeSwitch, actualmente lo tengo nativo en Astro
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
