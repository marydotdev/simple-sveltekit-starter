import remarkAbbr from 'remark-abbr';
import rehypeSlug from 'rehype-slug';

export default {
	extensions: ['.svelte.md', '.md', '.svx'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [
		remarkAbbr
	],
	rehypePlugins: [
		rehypeSlug
	]
};
