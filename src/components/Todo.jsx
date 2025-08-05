import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { Check, Edit, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-xl flex-col mx-auto mt-8 px-4">
      <ul className="space-y-4 my-5">
        <AnimatePresence>
          {todos.map((todo) => (
            <motion.li
              key={todo.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-900 rounded-lg px-4 py-3 flex justify-between items-center shadow-md border border-gray-700"
            >
              <span className="text-white text-base">{todo.text}</span>
              <div className="space-x-4">
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-red-400 hover:text-red-600 transition-colors duration-200"
                  aria-label={`Remove ${todo.text}`}
                >
                  <X className="w-5 h-5" />
                </button>
                <button
                  onClick={() => dispatch(markAsCompleted(todo.id))}
                  className="text-red-400 hover:text-red-600 transition-colors duration-200"
                  aria-label={`Completed ${todo.text}`}
                >
                  <Check className="w-5 h-5" />
                </button>
                <button
                  // onClick={() => dispatch(updateTodo(todo.id, todo.text))}
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
      <div>
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
