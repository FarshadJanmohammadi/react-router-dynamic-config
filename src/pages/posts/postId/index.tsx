import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import type { IPost } from "..";

const PostDetails = () => {
  const { postId } = useParams();

  const { data: postData } = useQuery({
    queryKey: [`post${postId}`],
    queryFn: async () => {
      const { data } = await axios.get<IPost>(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      return data;
    },
  });

  return (
    <div>
      <h2>{postData?.title}</h2>
      <p>{postData?.body}</p>
    </div>
  );
};

export default PostDetails;
