import Link from "next/link";

export default function About() {
  return (
    <main>
      <h1>About Us</h1>
      <p>We are a small company providing excellent services.</p>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </main>
  );
}
