import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link } from "react-router";
import HeroPost from "./UI/Hero";

export interface IPost {
  id: string;
  userId: string;
  title: string;
  body: string;
}

const PostsPage = () => {
  useQuery({
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
      <HeroPost />
    </ul>
  );
};

export default PostsPage;
