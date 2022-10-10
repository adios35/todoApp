import React from "react";
export interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
  inputRef: any;
}
const InputField: React.FC<props> = ({
  todo,
  setTodo,
  handleAdd,
  inputRef,
}: props) => {
  return (
    <form
      onSubmit={(e) => {
        handleAdd(e);
        setTodo("");
      }}
      className="input-group min-w-full"
    >
      <input
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="buiat aktivitas..."
        className="input input-bordered w-full border-gray-500"
      />
      <button style={{ width: 80 }} className="btn btn-square px-2">
        create
      </button>
    </form>
  );
};

export default InputField;
