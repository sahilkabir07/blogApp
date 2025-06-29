import dbConnect from "@/lib/dbConnect";
import Post from "@/models/Post";
import slugify from "slugify";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Only POST requests allowed" });
  }

  try {
    await dbConnect();

    const { title, content } = req.body;

    if (!title || !content) {
      return res
        .status(400)
        .json({ success: false, message: "Title and content are required" });
    }

    const slug = slugify(title, { lower: true });

    const newPost = await Post.create({ title, content, slug });

    res.status(201).json({ success: true, post: newPost });
  } catch (error) {
    console.error("POST /api/posts/create error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
}
