import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <ul className="list-numbered">
        {todos.map((todo) => (
          <div>
            <li
              className="mt-4 flex justify-between items-center px-4 py-2"
              key={todo.id}
            >
              <div className="text-white">{todo.text}</div>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
              </button>
            </li>
            <hr />
          </div>
        ))}
      </ul>
    </>
  );
}

export default Todo;
