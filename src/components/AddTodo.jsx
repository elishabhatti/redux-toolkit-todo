import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="w-full flex justify-center items-center space-x-2 mt-12"
    >
      <input
        className="w-[80%] px-4 py-2 border border-gray-300 outline-none text-white"
        type="text"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="w-[20%] px-4 py-2 bg-white text-black" type="submit">
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
