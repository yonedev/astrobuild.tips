import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function get(context) {
	const posts = await getCollection('tips')
	console.log(posts)
	return rss({
		title: 'AstroBuild.tips',
		description: 'Página de ejemplo',
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			link: `/post/${post.slug}/`,
			description: post.data.description || '',
			pubDate: post.data.date
		})),
		customData: `<language>es-es</language>`
	})
}
