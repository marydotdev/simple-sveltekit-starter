<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
		// Use a `limit` querystring parameter to fetch a limited number of posts
		// e.g. fetch('blog.json?limit=5') for 5 most recent posts
		const posts = await fetch('/blog.json').then((res) => res.json());
		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	import ArticleTitle from '$lib/components/ArticleTitle.svelte';
	import ArticleDescription from '$lib/components/ArticleDescription.svelte';
	export let posts;
</script>

<div class="max-w-4xl mx-auto pt-8 md:pt-24 px-8 space-y-8">
{#each posts as { slug, title, description }}
	<div>
		<ArticleTitle {slug} {title} />
		<ArticleDescription {description} {slug} />
	</div>
{/each}
</div>
