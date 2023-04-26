import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#0A4D68] h-[70px] w-full px-10 py-5">
      <div className="flex justify-between">
        <Link href="/" passHref>
          <h2 className="text-2xl font-semibold text-gray-50">Julieth blog</h2>
        </Link>
        <Link href="/createblog" className="pt-1 text-gray-300">
          Create Post
        </Link>
      </div>
    </header>
  );
}
