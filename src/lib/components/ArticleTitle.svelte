<script>
	export let slug = '';
	export let title;
	const id = title
		.toLowerCase()
		.replace(/[^a-zA-Z ]/g, '')
		.replace(/\s/g, '-');
	const href = slug ? `/blog/${slug}` : '#' + id;
</script>

{#if slug}
	<h3 class="heading text-2xl font-semibold hover:text-blue-400" class:large={!slug} {id}>
		<a {href}>
			{title}
		</a>
	</h3>
{:else}
	<h2 class="heading text-2xl font-semibold hover:text-blue-400" class:large={!slug} {id}>
		<a {href}>
			{title}
		</a>
	</h2>
{/if}
