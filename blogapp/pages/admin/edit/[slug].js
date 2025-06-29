import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RichTextEditor } from "@mantine/rte";

export default function EditPostPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [formData, setFormData] = useState({ title: "", content: "" });

  useEffect(() => {
    if (slug) {
      fetch(`/api/posts/${slug}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setFormData({
              title: data.post.title,
              content: data.post.content,
            });
          }
        });
    }
  }, [slug]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/posts/${slug}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.success) {
      alert("Post updated!");
      router.push("/admin/posts");
    } else {
      alert("Update failed");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Edit Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full p-2 mb-4 border rounded"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />

        <RichTextEditor
          value={formData.content}
          onChange={(val) => setFormData({ ...formData, content: val })}
          style={{ marginBottom: "1rem" }}
        />

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
}
