import React from "react";
import { IPostProps } from "./types/IPostProps";

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return response.json();
}

export const generateMetadata = async ({ params: { id } }: IPostProps) => {
  const post = await getData(id);
  return {
    title: post.title,
  };
};

export default async function Post({ params: { id } }: IPostProps) {
  const post = await getData(id);
  return (
    <>
      <div>{post.title}</div>
      <div className="body">{post.body}</div>
    </>
  );
}
