'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">방문객 관리 시스템</h1>
        <div className="flex flex-row items-center justify-center w-2/6 mt-10">
          <button type="button" className="w-80 h-12 rounded-md bg-lime-300 text-lg mr-5">
            <Link href="/host">호스트</Link>
          </button>
          <button type="button" className="w-80 h-12 rounded-md bg-emerald-300 text-lg">
            <Link href="/guest">게스트</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
