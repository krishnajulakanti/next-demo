export async function getServerSideProps() {
	try {
		const response = await fetch('https://your-backend-api.com/endpoint');
		const data = await response.json();

		return {
			props: {
				data,
			},
		};
	} catch (error) {
		console.error('Error fetching data:', error);
		return {
			props: {
				data: null,
			},
		};
	}
}


export default function HomePage({ data }) {
	return (
		<div>
			<h1>Next.js App Router Example</h1>
			{data ? (
				<p>{data.message}</p>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}

// SSR code for PAGES router
