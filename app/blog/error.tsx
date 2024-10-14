"use client";
import React from "react";

const PostError = ({ error }: { error: Error }) => {
  return <div>Opps {error.message}</div>;
};

export default PostError;
