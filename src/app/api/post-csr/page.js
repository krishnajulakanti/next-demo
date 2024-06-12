import { useState } from 'react';

function ExampleComponent() {
  const [data, setData] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/example', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    });

    const result = await response.json();
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ExampleComponent;

// import SubmitForm from '../components/SubmitForm';

// export default function Home() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <SubmitForm />
//     </div>
//   );
// }
