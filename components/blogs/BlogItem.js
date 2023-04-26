import React from "react";
import { Router, useRouter } from "next/router";
import { toast } from "react-toastify";

function BlogItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/" + props.id);
  }

  function editHandler() {
    router.push("/" + props.id + "/edit");
  }

  async function deleteBlogHandler() {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${props.id}`,
        {
          method: "DELETE",
        }
      );
      toast.success("Post deleted successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      toast.error("An error occured", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log(error.message);
    }
  }

  return (
    <div className="relative w-3/4 max-w-sm p-6 mx-auto my-4 bg-white border border-gray-200 rounded-lg shadow h-72 dark:bg-gray-500 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props?.title}
      </h5>

      <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
        {props?.body?.length > 50
          ? `${props?.body.substring(0, 50)}...`
          : props?.body}
      </p>
      <div className="absolute bottom-[5%] flex items-center justify-between w-[85%]">
        <button
          onClick={showDetailsHandler}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#0A4D68] rounded-lg hover:bg-[#088395] focus:ring-4 focus:outline-none"
        >
          Read more
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="flex items-center gap-3">
          <button
            className="bg-[#7DB9B6] text-white px-2 py-1 rounded-lg"
            onClick={editHandler}
          >
            <svg
              width="24"
              stroke-width="1.5"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M20 12V5.74853C20 5.5894 19.9368 5.43679 19.8243 5.32426L16.6757 2.17574C16.5632 2.06321 16.4106 2 16.2515 2H4.6C4.26863 2 4 2.26863 4 2.6V21.4C4 21.7314 4.26863 22 4.6 22H11"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
              <path
                d="M8 10H16M8 6H12M8 14H11"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
              <path
                d="M16 5.4V2.35355C16 2.15829 16.1583 2 16.3536 2C16.4473 2 16.5372 2.03725 16.6036 2.10355L19.8964 5.39645C19.9628 5.46275 20 5.55268 20 5.64645C20 5.84171 19.8417 6 19.6464 6H16.6C16.2686 6 16 5.73137 16 5.4Z"
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
              <path
                d="M17.9541 16.9394L18.9541 15.9394C19.392 15.5015 20.102 15.5015 20.5399 15.9394V15.9394C20.9778 16.3773 20.9778 17.0873 20.5399 17.5252L19.5399 18.5252M17.9541 16.9394L14.963 19.9305C14.8131 20.0804 14.7147 20.2741 14.6821 20.4835L14.4394 22.0399L15.9957 21.7973C16.2052 21.7646 16.3988 21.6662 16.5487 21.5163L19.5399 18.5252M17.9541 16.9394L19.5399 18.5252"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
            </svg>
          </button>
          <button
            onClick={deleteBlogHandler}
            className="text-white bg-[#E49393] px-3 py-2 rounded-lg hover:bg-[#EA5455]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />{" "}
              <path
                fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />{" "}
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
