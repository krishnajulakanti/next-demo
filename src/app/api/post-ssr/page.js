import React from 'react';

const SSRPage = ({ serverData }) => {
	return (
		<div>
			<h1>Server-Side Rendered Page</h1>
			<p>{serverData}</p>
		</div>
	);
};

export async function getServerSideProps() {
	const response = await fetch('http://localhost:3000/api/example', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ data: 'Hello from SSR' }),
	});

	const result = await response.json();
	return {
		props: {
			serverData: result.data,
		},
	};
}

export default SSRPage;