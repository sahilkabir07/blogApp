import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function PostPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [post, setPost] = useState(null);

  useEffect(() => {
    if (slug) {
      fetch(`/api/posts/${slug}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setPost(data.post);
          } else {
            router.push("/404");
          }
        });
    }
  }, [slug]);

  if (!post) return <p className="p-4">Loading...</p>;

  return (
    <>
      <Head>
        <title>{post.title} | Blog</title>
        <meta
          name="description"
          content={post.content.replace(/<[^>]*>?/gm, "").slice(0, 150)}
        />
      </Head>

      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div
          className="prose prose-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <p className="text-sm text-gray-400 mt-6">
          Published: {new Date(post.createdAt).toLocaleString()}
        </p>
      </div>
    </>
  );
}
