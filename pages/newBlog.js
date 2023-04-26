import { useRouter } from "next/router";
import React from "react";
import NewBlogForm from "../components/blogs/NewBlogForm";

export default function NewBlog() {
  const router = useRouter();

  async function addBlogHandler(enteredBlogData) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(enteredBlogData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    router.push("/");
  }

  return (
    <>
      <NewBlogForm onAddBlog={addBlogHandler} />
    </>
  );
}
