import React from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div>
      <h1>Learn About Redux Toolkit</h1>
      <AddTodo />
      <Todo />
    </div>
  );
};

export default App;
