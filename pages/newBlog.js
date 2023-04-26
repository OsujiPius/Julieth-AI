import { useRouter } from "next/router";
import React from "react";
import NewBlogForm from "../components/blogs/NewBlogForm";
import { toast } from "react-toastify";

export default function NewBlog() {
  const router = useRouter();

  async function addBlogHandler(enteredBlogData) {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify(enteredBlogData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      toast.success("New post created!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      toast.error("An error occured", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log(error.message);
    }

    router.push("/");
  }

  return (
    <>
      <NewBlogForm onAddBlog={addBlogHandler} />
    </>
  );
}
