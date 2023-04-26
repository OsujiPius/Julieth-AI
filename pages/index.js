import Head from "next/head";
import BlogList from "../components/blogs/blogList";

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>Julieth blog</title>
      </Head>
      <BlogList blogs={props.blogs} />
    </>
  );
}

export async function getStaticProps() {
  // fetch data
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return {
      props: {
        blogs: data,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.log(error.message);
  }
}
