import Link from "next/link";

export default function Contact() {
  return (
    <main>
      <h1 className="mt-3">Contact Us</h1>
      <p>If you have any questions, feel free to reach out!</p>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
        </ul>
      </nav>
    </main>
  );
}
