import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-800">
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Blog CMS for Truly IAS
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700">
          A full-featured blogging platform built with Next.js, MongoDB, and
          React. Designed for managing rich, SEO-optimized content efficiently.
        </p>
        <div className="mt-8 flex justify-center gap-6">
          <Link href="/admin/posts">
            <button className="bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-xl shadow-md transition duration-300">
              🛠 Admin Panel
            </button>
          </Link>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              title: "🚀 Rich Text Editor",
              desc: "Use a modern WYSIWYG editor to craft beautifully formatted content and store clean HTML to MongoDB.",
            },
            {
              title: "🔗 SEO-Friendly URLs",
              desc: "Each post automatically gets a clean, readable slug like `/posts/my-title` to boost search visibility.",
            },
            {
              title: "🛠️ Admin Dashboard",
              desc: "Easily manage blog posts with a responsive and intuitive dashboard for CRUD operations.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl shadow-lg border border-gray-200 hover:scale-[1.02] transition"
            >
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Blog CMS | Built for Truly IAS Internship
        💼
      </footer>
    </main>
  );
}
