import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Editblog(props) {
  const router = useRouter();
  const [titleValue, setTitleValue] = useState(props.blogData.title);
  const [idValue, setIdValue] = useState(props.blogData.userId);
  const [bodyValue, setBodyValue] = useState(props.blogData.body);

  const handleTitleChange = (event) => {
    setTitleValue(event.target.value);
  };

  const handleIdChange = (event) => {
    setIdValue(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBodyValue(event.target.value);
  };

  const editedData = {
    id: props.blogData.id,
    title: titleValue,
    userId: idValue,
    body: bodyValue,
  };

  async function updateBlogHandler() {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${props.blogData.id}`,
        {
          method: "PUT",
          body: JSON.stringify(editedData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      toast.success("Post updated!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      toast.error("An error occured!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log(error.message);
    }

    router.push("/");
  }

  return (
    <div>
      <h1 className="mt-10 -mb-5 text-3xl font-semibold text-center">
        Edit blog post!
      </h1>
      <div className="flex items-center justify-center h-screen -mt-20">
        <div className="block md:w-2/5 w-[90%] h-auto rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <form onSubmit={updateBlogHandler}>
            <label>Title</label>
            <div className="relative mb-5">
              <input
                value={titleValue}
                onChange={handleTitleChange}
                type="text"
                id="title"
                className="peer block min-h-[auto] w-full rounded border border-gray-400 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear  focus:border-[#0A4D68]"
              />
            </div>
            <div>
              <label htmlFor="image">User Id</label>
              <input
                value={idValue}
                onChange={handleIdChange}
                type="text"
                id="image"
                className="peer block min-h-[auto] w-full rounded border border-gray-400 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-[#0A4D68]"
              />
            </div>
            <div className="mt-5">
              <label htmlFor="description">Body</label>
              <textarea
                value={bodyValue}
                onChange={handleBodyChange}
                id="description"
                rows="5"
                className="peer block min-h-[auto] w-full rounded border border-gray-400 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-[#0A4D68]"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]  focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 bg-[#0A4D68] mt-5"
              >
                Edit Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    fallback: false,
    paths: data.map((blog) => ({ params: { blogId: blog.id.toString() } })),
  };
}

export async function getStaticProps(context) {
  // fetch data
  try {
    const blogId = context.params.blogId;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${blogId}`
    );
    const data = await response.json();

    return {
      props: {
        blogData: data,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.log(error.message);
  }
}
