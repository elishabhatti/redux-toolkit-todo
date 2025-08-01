import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, removeAllTodos } from "../features/todo/todoSlice";
import { motion } from "framer-motion";

function AddTodo() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (trimmed === "") {
      setError("Please enter a todo item.");
      return;
    }

    try {
      dispatch(addTodo(trimmed));
      setInput("");
      setError("");
    } catch (err) {
      setError(err.message || "Something went wrong.");
    }
  };

  const handleRemoveAllTodos = () => {
    dispatch(removeAllTodos());
    setInput("");
    setError("");
  };

  return (
    <motion.form
      onSubmit={addTodoHandler}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 70 }}
      className="w-full max-w-2xl mx-auto flex flex-col gap-3 sm:flex-row sm:items-center px-4"
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

      <button
        type="button"
        onClick={handleRemoveAllTodos}
        className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all duration-200 w-full sm:w-auto"
        aria-label="Remove All Todos Button"
      >
        Remove All Todos
      </button>

      {error && (
        <p className="w-full text-red-400 text-sm text-center sm:text-left">
          {error}
        </p>
      )}
    </motion.form>
  );
}

export default AddTodo;
