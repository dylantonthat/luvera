import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import RoutineGenerator from "../components/RoutineGenerator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex flex-col items-center justify-center min-h-screen bg-black text-white p-8`}
    >
      <header className="text-center mb-10">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center font-[family-name:var(--font-geist-mono)] mt-4">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/pages/index.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
      </header>

      {/* 🚀 Routine Generator Section */}
      <RoutineGenerator />

      <footer className="flex gap-4 mt-10">
        <a
          className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full hover:bg-gray-300"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          Deploy now
        </a>
        <a
          className="flex items-center gap-2 border border-gray-500 px-5 py-2 rounded-full hover:bg-gray-800"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read our docs
        </a>
      </footer>
    </div>
  );
}
