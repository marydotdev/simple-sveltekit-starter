<script>
    import Twitter from '$lib/components/icons/twitter.svelte';
    import Github from '$lib/components/icons/github.svelte';
    import Dribbble from '$lib/components/icons/dribbble.svelte';
</script>

<svelte:head>
    <title>About</title>
</svelte:head>

<!--- SVG Image | Image Credit https://undraw.co -->
<div class="mx-auto pt-24 px-2 grid grid-cols-1 place-items-center max-w-md lg:max-w-4xl lg:grid-cols-2">
    <img class="w-40 h-40 mx-auto mb-4 md:mb-8 md:w-60 md:h-60" src="../avatar.svg" alt="avatar" />
    <div class="px-8 md:px-2 text-center">
        <h1 class="text-2xl font-bold md:text-4xl pt-4">Hey, I'm Jane!</h1>
            <div class="flex justify-center gap-6 py-4">
                <a href="https://twitter.com" target="_blank" class="hover:text-blue-400">
                    <Twitter />
                </a>
                <a href="https://github.com" target="_blank" class="hover:text-gray-500">
                    <Github />
                </a>
                <a href="https://dribbble.com" target="_blank" class="hover:text-pink-400">
                    <Dribbble />
                </a>
            </div>
            <h2 class="text-lg font-medium md:text-2xl pb-4">I'm a front-end devloper who is passionate about creating accessible, performant user interfaces.</h2>
    </div>
</div>

<div class="mx-auto md:mt-8 lg:mt-12 px-8 md:px-0 max-w-sm text-center text-lg md:text-2xl">
    <p>I'm currently available for freelance work! If you're interested in collaborating send me an <a href="mailto:youremail@address.com">email</a> or <a href="https://twitter.com">DM me</a> on twitter!</p>
</div>




