import BlogItem from "./BlogItem";

function BlogList(props) {
  return (
    <div className="grid content-end grid-cols-1 md:grid-cols-2">
      {props.blogs.length > 0 ? (
        props?.blogs.map((blog) => (
          <BlogItem
            key={blog.id}
            id={blog.id}
            body={blog.body}
            title={blog.title}
          />
        ))
      ) : (
        <div>
          <h1 className="mt-10 text-3xl font-semibold text-center">
            No blog posts avaliable
          </h1>
        </div>
      )}
    </div>
  );
}

export default BlogList;
