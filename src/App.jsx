import React from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const App = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-50 flex flex-col items-center pt-15 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-10"
      >
        Todo Horizon
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
        className="w-full max-w-2xl"
      >
        <div className="flex flex-col">
          <div className="flex justify-end mb-2 mr-5 font-bold text-lg">Total Todos: {todos.length}</div>
          <div>
            <AddTodo />
            <Todo />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default App;
