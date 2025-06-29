import dbConnect from "@/lib/dbConnect";
import Post from "@/models/Post";
import slugify from "slugify";

export default async function handler(req, res) {
  await dbConnect();
  const { slug } = req.query;

  if (req.method === "GET") {
    try {
      const post = await Post.findOne({ slug });

      if (!post) {
        return res
          .status(404)
          .json({ success: false, message: "Post not found" });
      }

      return res.status(200).json({ success: true, post });
    } catch (err) {
      return res.status(500).json({ success: false, message: "Server error" });
    }
  }

  if (req.method === "PUT") {
    const { title, content } = req.body;

    try {
      const updated = await Post.findOneAndUpdate(
        { slug },
        {
          title,
          content,
          slug: slugify(title, { lower: true }),
          updatedAt: Date.now(),
        },
        { new: true }
      );

      return res.status(200).json({ success: true, post: updated });
    } catch (err) {
      return res.status(500).json({ success: false, message: "Update failed" });
    }
  }

  if (req.method === "DELETE") {
    try {
      await Post.findOneAndDelete({ slug });
      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(500).json({ success: false, message: "Delete failed" });
    }
  }

  res.status(405).json({ success: false, message: "Method not allowed" });
}
