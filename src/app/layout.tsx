import Link from 'next/link';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>

        <header style={{ backgroundColor: "lightcyan", padding: "1rem" }}>
          <h2>Header</h2>
        </header>
        
        <div style={{ backgroundColor: "lightgreen", padding: "0.8rem" }}>
          <Link href="/">Home | </Link>
          <Link href="/login">Login</Link>
        </div>
        
        <div style={{ backgroundColor: "lightpink", padding: "1rem 1rem", height: "500px" }}>  
        {children}
        </div>

        <footer style={{ backgroundColor: "lightcyan", padding: "1rem" }}>
          <h2>Footer</h2>
        </footer>

      </body>
    </html>
  )
}