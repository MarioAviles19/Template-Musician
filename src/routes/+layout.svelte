<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>


<main class="shadow-2xl">{@render children()}</main>

<footer class="bg-soft-black p-4">
<p class="text-white text-center">&copy 2024</p>
</footer>
