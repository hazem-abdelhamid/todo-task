import { DoneTodosProps } from "@/types";

import { GrRevert } from "react-icons/gr";

import { RxTrash } from "react-icons/rx";
import Modal from "../Modal";
const DoneTasks = ({ doneTodos, onRevert, onDelete }: DoneTodosProps) => {
  // console.log(Popover);

  return (
    <>
      <h2 className="text-white text-[16px] ml-[57px] mb-4">
        Done - {doneTodos.length}
      </h2>
      {doneTodos.map((todo, id) => (
        <div
          key={id}
          className="flex flex-row justify-between items-center bg-custom-bg w-[432px] h-[75px] rounded-xl ml-[56px] gap-3 "
        >
          <h3 className="text-done-color ml-5 line-through">{todo}</h3>
          <div className="flex mr-5 gap-2">
            <GrRevert
              className="text-border-color text-2xl"
              onClick={() => onRevert(id)}
            />
            <Modal
              handleDelete={() => onDelete(id, "doneTasks")}
              trigger={<RxTrash className="text-border-color text-2xl" />}
            ></Modal>
          </div>
        </div>
      ))}
    </>
  );
};

export default DoneTasks;

// this component need doneTasks array length
// each done task
