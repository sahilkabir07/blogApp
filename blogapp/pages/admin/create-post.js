import { useState } from "react";
import dynamic from "next/dynamic";

const RichTextEditor = dynamic(
  () => import("@mantine/rte").then((mod) => mod.RichTextEditor),
  { ssr: false }
);

export default function CreatePost() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/posts/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Blog created successfully!");
        setFormData({ title: "", content: "" });
      } else {
        alert("Failed to create post");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto", padding: "1rem" }}>
      <h2 style={{ marginBottom: "1rem" }}>Create New Blog Post</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          style={{ width: "100%", padding: "10px", marginBottom: "1rem" }}
          required
        />

        <RichTextEditor
          value={formData.content}
          onChange={(value) => setFormData({ ...formData, content: value })}
          style={{ marginBottom: "1rem" }}
        />

        <button type="submit" style={{ padding: "10px 20px" }}>
          Create Post
        </button>
      </form>
    </div>
  );
}
