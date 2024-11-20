import TodoItem from "./TodoItem";
import { TodoItemsProps } from "@/types";
const TodoItems = ({ todos, onDone, onDelete }: TodoItemsProps) => {
  return (
    <section className="mt-[56px] mb-12 max-h-[300px] overflow-auto">
      <h2 className="text-white text-[16px] ml-[57px] mb-4">
        Tasks todo - {todos.length}
      </h2>
      {/* container hold all todos */}
      <div className="flex flex-col gap-4">
        {todos.map((todo, id) => (
          <TodoItem
            todo={todo}
            key={id}
            onDone={onDone}
            id={id}
            onDelete={() => onDelete(id, "todos")}
          />
        ))}
      </div>
    </section>
  );
};

export default TodoItems;

{
  /* <div className="flex flex-row justify-between items-center bg-custom-bg w-[432px] h-[75px] rounded-xl ml-[56px]">
<h3 className="text-border-color ml-5">Learn React fundementals </h3>
<div className="flex mr-5 gap-2">
  <MdDone className="text-border-color text-2xl" />
  <RxTrash className="text-border-color text-2xl" />
</div>
</div> */
}
