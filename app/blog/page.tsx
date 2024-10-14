import React from "react";
import { GetStaticProps } from "next";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });
  return response.json();
}

export default async function Blog() {
  const posts = await getData();

  return (
    <div>
      <h1>Blog</h1>
      <ul className="posts">
        {posts.map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id}>
            <li> {post.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
