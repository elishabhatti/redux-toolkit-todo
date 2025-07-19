import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { X } from "lucide-react";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <ul className="list-numbered">
        {todos.map((todo) => (
          <div>
            <li
              className="mt-2 flex justify-between items-center py-2"
              key={todo.id}
            >
              <div className="text-white">{todo.text}</div>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white cursor-pointer py-1 px-4"
              >
                <X />
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
