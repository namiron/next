import React from "react";
import Link from "next/link";
import { Post } from "./types/IBlogTypes";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
}

export default async function Blog() {
  const posts: Post[] = await getData();

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
