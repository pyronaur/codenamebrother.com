<script type="ts">
	import type { Post } from "@data/post";
	import Date from "@components/utilities/Date";
	export let post: Post;
</script>

<div>
	<h2><a href={`/${post.slug}`}>{post.title}</a></h2>
	<Date date={post.date} />
	<p>{post.preview}</p>	
</div>
