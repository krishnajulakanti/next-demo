async function getData() {
	const res = await fetch('https://your-backend-api.com/endpoint');
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	const data = await res.json();
	return data;
}

export default async function HomePage() {
	const data = await getData();

	return (
		<div>
			<h1>Next.js App Router SSR Example</h1>
			{data ? (
				<p>{data.message}</p>
			) : (
				<p>No data available</p>
			)}
		</div>
	);
}


// SSR code for APP router