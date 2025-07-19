import React from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-lg">
        Todo Horizon
      </h1>
      <div className="w-full max-w-2xl">
        <AddTodo />
        <Todo />
      </div>
    </div>
  );
};

export default App;