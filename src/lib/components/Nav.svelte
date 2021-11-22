<script>
    import { fly } from 'svelte/transition';

    export let dark;
    
    let navOpen = false;

    function toggleNav() {
        navOpen = !navOpen;
    }

    const tailwindClasses = 'px-3 py-2 rounded-md font-medium \
    focus:outline-none text-gray-900 \
    hover:text-blue-500 dark:text-gray-50 \
    dark:hover:text-blue-400';
</script>

<nav>
    <!--Regular Nav-->
    <div class="hidden max-w-7xl mx-auto px-2 sm:px-8 pt-8 h-16 md:flex items-center text-xl">
        <div class="flex-1">
            <a href="/" class={tailwindClasses}>Home</a>
            <a href="/about" class={tailwindClasses}>About</a>
            <a href="/blog" class={tailwindClasses}>Blog</a>
        </div>
        <div class="flex-0 px-2 text-2xl">
            <a
            href="/"
            on:click|preventDefault={() => {
            dark = !dark;
            }}>
            {dark ? '☼' : '☼'}
            </a>
        </div>
    </div>
    <!--Mobile Nav-->
    <div class="grid grid-cols-1 justify-items-end px-4 pt-2 md:hidden">
        <button on:click={toggleNav} class="block items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            {#if !navOpen}
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            {:else}
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            {/if}
        </button>
       
        {#if navOpen}
        <div on:click={toggleNav} transition:fly="{{ x: -100, duration: 300}}" class="fixed inset-0 bg-gray-50 dark:bg-gray-900 z-50 mt-12 p-20 space-y-8 text-4xl font-semibold text-center">
            <a href="/" class="block">Home</a>
            <a href="/about" class="block">About</a>
            <a href="/blog" class="block">Blog</a>
            <a
            href="/"
            class="block"
            on:click|preventDefault={() => {
            dark = !dark;
            }}>
            {dark ? '☼' : '☼'}
            </a>
        </div>
        {/if}
    </div>
</nav>