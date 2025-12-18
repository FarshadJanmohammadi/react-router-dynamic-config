import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router";
import type { IPost } from "../index";

const HeroPost = () => {
  const queryClient = useQueryClient();

  const postsData = queryClient.getQueryData(["posts", "getPosts"]) as IPost[]; // Cache

  console.log(postsData, "postData");

  return (
    <div>
      {postsData?.map((post) => (
        <li key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.id}
            {post.title}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default HeroPost;
