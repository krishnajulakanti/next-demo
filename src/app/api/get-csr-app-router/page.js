'use client'
import { useEffect, useState } from 'react';

export default function HomePage() {
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('/api');
				const result = await response.json();
				console.log(result, "check");
				setData(result);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);


	return (
		<div>
			<h1>Next.js App Router CSR Example</h1>
			{data ? (<p>{data.message}</p>) : (<p>Loading...</p>)}
		</div>
	);
}


// CSR code same for both APP & PAGES router