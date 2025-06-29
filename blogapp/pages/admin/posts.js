import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminPostsPage() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/posts");
      const data = await res.json();

      if (data.success) {
        setPosts(data.posts);
      } else {
        alert("Failed to fetch posts");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (slug) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      const res = await fetch(`/api/posts/${slug}`, { method: "DELETE" });
      const data = await res.json();

      if (data.success) {
        alert("Post deleted successfully.");
        fetchPosts();
      } else {
        alert("Failed to delete post.");
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("Error deleting post.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">All Blog Posts</h2>

      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post._id} className="p-4 border rounded shadow">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-gray-500 text-sm">Slug: {post.slug}</p>
              <p className="text-gray-400 text-sm">
                Created: {new Date(post.createdAt).toLocaleString()}
              </p>

              <div className="mt-2 space-x-2">
                <Link href={`/posts/${post.slug}`}>
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">
                    View
                  </button>
                </Link>
                <Link href={`/admin/edit/${post.slug}`}>
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(post.slug)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
