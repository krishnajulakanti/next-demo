import Link from 'next/link';

export default function Products() {
  const productId = 100;
    return (
        <div>
          <h1>List of Products</h1>
            <ul>
                <li><Link href="/products/1">Product 1</Link></li>
                <li><Link href="/products/2">Product 2</Link></li>
                <li><Link href="/products/3">Product 3</Link></li>
                <li><Link href={`/products/${productId}`}>Product {productId}</Link></li>
            </ul>
        </div>
    );
  }
  