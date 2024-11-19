<script lang="ts">
	let { children, ...rest } = $props();
   
</script>

<div class="max-w-clamp-lg m-auto p-4 {rest.class}" {...rest}>
    {@render children()}
</div>