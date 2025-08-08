import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  removeAllTodos,
  removeTodo,
  markAsCompleted,
} from "../features/todo/todoSlice";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Edit, X } from "lucide-react";

function Todo() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const todos = useSelector((state) => state.todos);
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
    const confirmed = confirm("Are you sure you want to delete all the Todos?");
    if (confirmed) {
      dispatch(removeAllTodos());
      setInput("");
      setError("");
    }
  };

  const handleRemoveTodo = (id) => {
    const confirmed = confirm("Are you sure you want to delete this todo?");
    if (confirmed) {
      dispatch(removeTodo(id));
      setInput("");
      setError("");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      {/* Add Todo Form */}
      <motion.form
        onSubmit={addTodoHandler}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 70 }}
        className="flex flex-col gap-3 sm:flex-row sm:items-center"
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
      </motion.form>

      {error && (
        <p className="text-red-400 text-sm text-center sm:text-left mt-2">
          {error}
        </p>
      )}

      {/* Todo List */}
      <div className="w-full max-w-xl flex-col mx-auto mt-8">
        <ul className="space-y-4 my-5">
          <AnimatePresence>
            {[...todos].reverse().map((todo) => (
              <motion.li
                key={todo.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.2 }}
                className={`${
                  todo.isCompleted ? "line-through" : ""
                } bg-gray-900 rounded-lg px-4 py-3 flex justify-between items-center shadow-md border border-gray-700`}
              >
                <span className="text-white text-base">{todo.text}</span>
                <div className="space-x-4">
                  <button
                    onClick={() => dispatch(() => handleRemoveTodo(todo.id))}
                    className="text-red-400 hover:text-red-600 transition-colors duration-200"
                    aria-label={`Remove ${todo.text}`}
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => dispatch(markAsCompleted(todo.id))}
                    className="text-green-400 hover:text-green-600 transition-colors duration-200"
                    aria-label={`Completed ${todo.text}`}
                  >
                    <Check className="w-5 h-5" />
                  </button>
                  <button
                    className="text-blue-400 hover:text-blue-600 transition-colors duration-200"
                    aria-label={`Update ${todo.text}`}
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
        {todos.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-400 mt-8"
          >
            No todos yet. Start by adding one above!
          </motion.p>
        )}
      </div>
    </div>
  );
}

export default Todo;
