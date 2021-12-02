<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
		// Use a `limit` querystring parameter to fetch a limited number of posts
		// e.g. fetch('blog.json?limit=5') for 5 most recent posts
		const posts = await fetch('/blog.json?limit=3').then((res) => res.json());
		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	import ArticleTitle from '$lib/components/ArticleTitle.svelte';
	import ArticleMeta from '$lib/components/ArticleMeta.svelte';
	import ArticleDescription from '$lib/components/ArticleDescription.svelte';
    import ArticleImage from '$lib/components/ArticleImage.svelte';
    import Card from '$lib/components/Card.svelte';
	export let posts;
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<div class="max-w-6xl mx-auto mt-12 px-8">
    <!--Hero Section-->
    <div class="md:flex md:justify-around md:items-center md:gap-12 md:my-24">
        <div class="max-w-md mx-auto">
            <h1 class="text-4xl font-bold">Jane Doeveloper is a front-end devloper building applications for the web.</h1>
            <p class="text-2xl font-medium text-right py-4">I'm currently available for contract work!</p>

            <!-- Replace with your own CTA -->
            <div class="relative text-center py-8 md:text-right">
                <button class="relative text-xl font-medium text-white rounded-lg px-4 py-2 shadow-lg drop-shadow-sm bg-gradient-to-tr from-blue-500 via-blue-400 to-blue-600 mb-12 sm:mb-0 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700">
                Work with me!
                </button>
            </div>
        </div>
        <!--- SVG Image | Image Credit https://undraw.co -->
        <div class="mx-auto">
            <img class="w-80 h-80 mx-auto mb-4" src="../janedoeveloper.svg" alt="developer" />
        </div>
    </div>

    <!--Displays 3 Most Recent Blog Posts on Card Component-->
    <div>
        <h2 class="text-4xl font-medium pb-8 text-center lg:text-left">Recent Posts</h2>
        <div class="max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
            {#each posts as { slug, title, author, description, date, image, alt }}
            <div class="relative">
                <div class="relative">
                <Card>
                    <div class="flex-shrink-0">
                    <ArticleImage {image} {alt} class="h-48 w-full object-cover"/>
                    </div>
                    <div class="p-2 flex flex-col gap-2">
                    <ArticleTitle {slug} {title} />
                    <ArticleMeta {author} {date} />
                    <ArticleDescription {description} {slug} />
                    </div>
                </Card>
            </div>
            </div>
            {/each}
        </div>
    <a href="/blog" class="block text-right text-xl font-medium py-12 hover:text-blue-400">View More &rarr;</a>
    </div>
</div>

