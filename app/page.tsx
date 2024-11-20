"use client";
import InputField from "@/components/ui/InputField";
import { useState, useEffect } from "react";
import DoneTasks from "@/components/ui/DoneTasks";
import TodoItems from "@/components/ui/TodoItems";

export default function Home() {
  const [doneTasks, setDoneTasks] = useState<string[]>([]);
  const [todos, setTodos] = useState<string[]>([]);
  const [enteredValue, setEnteredValue] = useState<string>("");
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    const storedDoneTasks = localStorage.getItem("doneTasks");
    if (storedTodos) setTodos(JSON.parse(storedTodos));
    if (storedDoneTasks) setDoneTasks(JSON.parse(storedDoneTasks));
  }, []);

  // Save todos and doneTasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
  }, [doneTasks]);
  // Hydration
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true); // Set to true after the first render
  }, []);
  // Handle text
  function handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEnteredValue(e.target.value);
  }
  // done logic - This function need to update
  function handleDone(id: number): void {
    let doneTask = todos[id];
    // delete donetask from todos
    setTodos(todos.filter((todo) => todo !== doneTask));

    // add donetask
    setDoneTasks((prevDoneTasks) => [...prevDoneTasks, doneTask]);
  }
  // Handle revert
  function handleRevert(id: number): void {
    let revertedTask = doneTasks[id];
    setTodos((prevTodos) => [...prevTodos, revertedTask]);
    setDoneTasks(doneTasks.filter((task) => task !== revertedTask));
  }
  // Handle Delete
  function handleDelete(id: number, type: "todos" | "doneTasks"): void {
    if (type === "todos") {
      setTodos(todos.filter((_, index) => index !== id));
    } else if (type === "doneTasks") {
      setDoneTasks(doneTasks.filter((_, index) => index !== id));
    }
  }
  // Handle submit
  function handleSubmit(): void {
    if (enteredValue.trim()) {
      setTodos([...todos, enteredValue]);
      setEnteredValue("");
    }
  }

  if (!isClient) return null; //This prevents rendering the component until the client-side render.
  return (
    <div className="flex justify-center items-center h-screen overflow-auto">
      <div className="w-[583px] h-[85%] bg-form-bg rounded-3xl">
        <InputField
          onSubmit={handleSubmit}
          onTextChange={handleTextChange}
          enteredValue={enteredValue}
        />
        <TodoItems todos={todos} onDone={handleDone} onDelete={handleDelete} />
        <DoneTasks
          doneTodos={doneTasks}
          onRevert={handleRevert}
          onDelete={handleDelete}
        />
      </div>
      {/* <Modal></Modal> */}
    </div>
  );
}

// Handle delete todos
// function handleDeleteTodos(id: number) {
//   let deletedTask = todos[id];
//   let filteredTodos = todos.filter((todo) => todo !== deletedTask);
//   setTodos(filteredTodos);
// }
// // handle delete done todos
// function handleDeleteDoneTodos(id: number) {
//   let deletedTask = doneTasks[id];
//   let filteredDoneTodos = doneTasks.filter((task) => task !== deletedTask);
//   setDoneTasks(filteredDoneTodos);
// }

// https://github.com/hazem-abdelhamid/todo-task.git
