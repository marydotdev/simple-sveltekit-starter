<script>
    import '../app.css';
    import Nav from '$lib/components/Nav.svelte';

    let dark = true;
</script>

<div class:dark>

<div class="flex flex-col min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
<main class="flex-grow">
    <Nav bind:dark />
    <slot />
</main>

<footer class="bottom-0">
    <div class="text-lg text-center font-medium mx-auto my-8">
        <p>Built with the <a href="https://github.com/marydotdev/simple-sveltekit-starter" target="_blank" class="hover:text-blue-400">Simple SvelteKit Starter</a>.</p>
        <p>Made by <a href="https://twitter.com/marydotdev" target="_blank" class="hover:text-blue-400">mary.dev</a> 👩‍💻</p>
    </div>
</footer>
</div>
</div>