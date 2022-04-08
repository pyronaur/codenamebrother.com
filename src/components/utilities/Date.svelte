<script type="ts">
	export let date: string;
	const options: Intl.DateTimeFormatOptions = { 
		weekday: 'long',
		year: "numeric",
		month: "long",
		day: "numeric"
	};
	const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
		Date.parse(date)
	);
</script>

<time datetime={date}>{formattedDate}</time>
