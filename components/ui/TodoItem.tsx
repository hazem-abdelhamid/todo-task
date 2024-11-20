"use client";
import { TodoItemProps } from "@/types";
import { MdDone } from "react-icons/md";
import { RxTrash } from "react-icons/rx";

import Modal from "../Modal";
const TodoItem = ({ todo, onDone, id, onDelete }: TodoItemProps) => {
  return (
    <div className="flex flex-row justify-between items-center bg-custom-bg w-[432px] h-[75px] rounded-xl ml-[56px]">
      <h3 className="text-border-color ml-5">{todo} </h3>
      <div className="flex mr-5 gap-2">
        <MdDone
          className="text-border-color text-2xl"
          onClick={() => {
            onDone(id);
          }}
        />
        <Modal
          handleDelete={() => onDelete(id, "todos")}
          trigger={<RxTrash className="text-border-color text-2xl" />}
        />
      </div>
    </div>
  );
};

export default TodoItem;

// This component need to recieve handle done with id

{
  /* <Popover open={isOpen} onOpenChange={setIsOpen}>
<PopoverTrigger>
  <RxTrash className="text-border-color text-2xl" />
</PopoverTrigger>
<PopoverContent>
  <p className="mb-2">Are you sure you want to delete this item?</p>
  <button style={{ marginRight: "2rem" }} onClick={handleClose}>
    Close
  </button>
  <button onClick={handleOpen}>Continue</button>
</PopoverContent>
</Popover> */
}
