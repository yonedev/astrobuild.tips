<template>
	<div>
		<button @click="mostrarAlerta">Haz clic</button>
	</div>
</template>

<script>
export default {
	methods: {
		mostrarAlerta() {
			alert('¡Hola!')
		}
	}
}
</script>
