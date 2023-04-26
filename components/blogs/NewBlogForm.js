import { useRef } from "react";

function NewBlogForm(props) {
  const titleInputRef = useRef();
  const idInputRef = useRef();
  const bodyInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredId = idInputRef.current.value;
    const enteredBody = bodyInputRef.current.value;

    const blogData = {
      title: enteredTitle,
      userId: enteredId,
      body: enteredBody,
    };

    props.onAddBlog(blogData);
  }

  return (
    <>
      <h1 className="mt-10 -mb-5 text-3xl font-semibold text-center">
        Create a blog post!
      </h1>
      <div className="flex items-center justify-center h-screen -mt-20">
        <div className="block md:w-2/5 w-[90%] h-auto rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <form onSubmit={submitHandler}>
            <label>Title</label>
            <div className="relative mb-5">
              <input
                type="text"
                required
                id="title"
                ref={titleInputRef}
                className="peer block min-h-[auto] w-full rounded border border-gray-400 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear  focus:border-[#0A4D68]"
              />
            </div>
            <div>
              <label htmlFor="image">User Id</label>
              <input
                type="text"
                required
                id="image"
                ref={idInputRef}
                className="peer block min-h-[auto] w-full rounded border border-gray-400 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-[#0A4D68]"
              />
            </div>
            <div className="mt-5">
              <label htmlFor="description">Body</label>
              <textarea
                id="description"
                required
                rows="5"
                ref={bodyInputRef}
                className="peer block min-h-[auto] w-full rounded border border-gray-400 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-[#0A4D68]"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]  focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 bg-[#0A4D68] mt-5"
              >
                Add Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewBlogForm;
