import BoardPost from "@/component/board/board-post";
import {useEffect, useRef, useState} from "react";
import {BoardApi} from "@/pages/api/_api";

export default function Board({data}) {

  const [contentInput, setContentInput] = useState("");

  const handleContentChange = (event) => {
    setContentInput(event.target.value);
  }

  const [postList, setPostList] = useState(data);

  const addPost = () => {

    const newBoard = {content: contentInput}

    BoardApi
      .registerBoard(newBoard)
      .then((res) => res.json())
      .then((resJson) => {
        setPostList([...postList, {
          content: contentInput
        }]);
      });

    setContentInput("");
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      addPost();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    }
  }, [contentInput]);

  return (
    <main>
      <h1
        className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">자동차
        게시판</h1>
      <div className="mx-2 mb-6">
        <label htmlFor="textEditor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">글을 작성하여
          주세요.</label>
        <input value={contentInput} onChange={handleContentChange} type="text" id="textEditor"
               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
               placeholder="기다리고 있었소" required/>
      </div>
      <div className="mx-2 flex justify-end mb-6">
        <button onClick={addPost}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">작성
        </button>
      </div>
      <div className="flex flex-col">
        <BoardPost boardPostDataList={postList}/>
      </div>
    </main>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/board/car`)
  const data = await res.json()

  // Pass data to the page via props
  return {props: {data}}
}