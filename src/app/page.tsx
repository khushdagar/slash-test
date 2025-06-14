// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to Our Website!</h1>
      <nav>
        <ul>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </main>
  );
}
