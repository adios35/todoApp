import React, { useRef, useState } from "react";
import InputField from "./InputField";
import { activity } from "./modal";
import "./style.css";
import TodoList from "./TodoList";

const Taskify: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<activity[]>([]);
  const inputRef = useRef<any>(null);
  const d = new Date();
  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!todo.trim()) return;
    setTodos((prev) => {
      return [...prev, { id: d.getTime(), todo: todo, complete: false }];
    });
    localStorage.clear();
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  //handleComplete
  function handleComplete(id: number) {
    setTodos((pre) => {
      return pre.map((target) => {
        if (target.id === id) {
          return { ...target, complete: !target.complete };
        } else return target;
      });
    });
  }
  //handleEdit
  function handleEdit(id: number, text: string) {
    handleDelete(id);
    setTodo(text);
    inputRef.current.focus();
  }
  //handle delete
  function handleDelete(id: number) {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  }
  // const input = useRef<HTMLInputElement>(null);

  return (
    <div className="wrapper container max-w-md space-y-2 mx-auto pt-10 justify-center">
      <InputField
        inputRef={inputRef}
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
      />
      {todos.length > 0 && (
        <div className="collapse border-[1px] border-gray-500 rounded-md">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            show activity
          </div>
          <ul className="collapse-content space-y-2">
            <TodoList
              todos={todos}
              handleComplete={handleComplete}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </ul>
        </div>
      )}
    </div>
  );
};

export default Taskify;
