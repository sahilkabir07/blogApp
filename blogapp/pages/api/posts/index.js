import dbConnect from "@/lib/dbConnect";
import Post from "@/models/Post";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  try {
    await dbConnect();
    const posts = await Post.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, posts });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
}
