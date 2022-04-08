<script type="ts">
	import type { Post } from "@data/post";
	import Date from "@components/utilities/Date";
	export let post: Post;
</script>

<div>
	<Date date={post.date} />
	<h2><a href={`/${post.slug}`}>{post.title}</a></h2>
	<p>{post.preview}</p>	
</div>

<style>
	h2 {
		margin-bottom: .25rem;
		margin-top: -0.25rem;
	}
</style>
