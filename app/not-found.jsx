import Link from "next/link";

export default async function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <p>Go back home</p>
      </Link>
    </div>
  );
}
