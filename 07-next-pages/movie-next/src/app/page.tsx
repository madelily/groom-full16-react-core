import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Next.js 영화 앱</h1>

      <Link href="/movies">
        영화 목록 보러 가기 →
      </Link>
    </main>
  );
}

