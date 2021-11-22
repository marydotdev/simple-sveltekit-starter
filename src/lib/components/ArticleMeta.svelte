<script>
	export let author;
	export let date;
	const formattedDate = new Date(date).toDateString();
</script>

<p class="text-gray-700 dark:text-gray-400">
	<span class="author">{author} | </span>
	<span class="date">{formattedDate}</span>
</p>
