import Link from 'next/link';

export default function Blog() {
    return (
      <div>
      <h1>My Blog</h1>
      <Link href="blog/first">First</Link> <br />
      <Link href="blog/second">Second</Link>
      </div>
    );
  }