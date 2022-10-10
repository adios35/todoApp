import React from "react";
import { FiCheck, FiEdit, FiTrash } from "react-icons/fi";
import { activity } from "./modal";
interface props {
  todos: activity[];
  handleComplete: (id: number) => void;
  handleEdit: (id: number, text: string) => void;
  handleDelete: (id: number) => void;
}
const TodoList: React.FC<props> = ({
  todos,
  handleComplete,
  handleEdit,
  handleDelete,
}: props) => {
  return (
    <>
      {todos?.map((list) => {
        return (
          <li
            key={list.id}
            className="p-2 border-[1px] flex justify-between rounded-md items-center border-gray-500"
          >
            <span
              style={{
                textDecoration: list.complete ? "line-through" : "none",
              }}
            >
              {list.todo}
            </span>{" "}
            <div className="cta flex gap-2  [&>*]:cursor-pointer">
              <FiEdit onClick={() => handleEdit(list.id, list.todo)} />
              <FiTrash onClick={() => handleDelete(list.id)} />
              <FiCheck
                style={{ opacity: list.complete ? 0.4 : 1 }}
                onClick={() => handleComplete(list.id)}
              />
            </div>
          </li>
        );
      })}
    </>
  );
};

export default TodoList;
