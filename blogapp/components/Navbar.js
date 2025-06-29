import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Truly Blog CMS
        </Link>

        {/* Links */}
        <div className="space-x-4 text-sm md:text-base">
          <Link
            href="/admin/posts"
            className="inline-block px-3 py-1 rounded hover:bg-purple-600 hover:text-white transform hover:scale-105 transition-all duration-200"
          >
            🛠 Admin
          </Link>
          <Link
            href="/admin/create-post"
            className="inline-block px-3 py-1 rounded hover:bg-green-600 hover:text-white transform hover:scale-105 transition-all duration-200"
          >
            ✍️ Create
          </Link>
        </div>
      </div>
    </nav>
  );
}
