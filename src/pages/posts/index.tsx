import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link } from "react-router";

export interface IPost {
  id: string;
  userId: string;
  title: string;
  body: string;
}

const PostsPage = () => {
  const { data: postsData } = useQuery({
    queryKey: ["posts", "getPosts"],
    queryFn: async () => {
      const { data } = await axios.get<IPost[]>(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return data;
    },
  });

  return (
    <ul>
      {postsData?.map((post) => (
        <li key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.id}
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostsPage;
