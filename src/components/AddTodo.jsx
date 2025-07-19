import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { motion } from "framer-motion";

function AddTodo() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      setError("Please enter a todo item.");
      return;
    }
    dispatch(addTodo(input.trim()));
    setInput("");
    setError("");
  };

  return (
    <motion.form
      onSubmit={addTodoHandler}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 70 }}
      className="w-full max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-3 px-4"
      aria-label="Add Todo Form"
    >
      <input
        className="flex-1 w-full px-4 py-3 rounded-lg border border-gray-400 bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
        type="text"
        placeholder="What do you want to do?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        aria-label="Todo input"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all duration-200 w-full sm:w-auto"
        aria-label="Add Todo Button"
      >
        Add Todo
      </button>
      {error && (
        <p className="w-full text-red-400 text-sm mt-2 text-center sm:text-left">{error}</p>
      )}
    </motion.form>
  );
}

export default AddTodo;
