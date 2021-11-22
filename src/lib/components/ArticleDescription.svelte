<script>
	export let description;
	export let slug = '';
	const href = slug && `/blog/${slug}`;
</script>

<p class="text-gray-800 dark:text-gray-200">
	{description}

	{#if slug}
		<a {href} class="font-bold hover:text-blue-400">Read More &rarr;</a>
	{/if}
</p>
