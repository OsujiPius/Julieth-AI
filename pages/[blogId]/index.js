import React from "react";

export default function BlogDetails(props) {
  return (
    <div>
      <h1 className="mt-10 text-3xl font-semibold text-center">
        {props?.blogData?.title}
      </h1>
      <p className="text-center max-w-[90%] mx-auto">{props?.blogData?.body}</p>
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
