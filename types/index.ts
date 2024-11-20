export interface TodoItemsProps {
  todos: string[];
  onDone: (id: number) => void;
  onDelete: (id: number, type: "todos" | "doneTasks") => void;
}
export interface TodoItemProps {
  todo: string;
  onDone: (id: number) => void;
  id: number;
  onDelete: (id: number, type: string) => void;
}
export interface DoneTodosProps {
  doneTodos: string[];
  onRevert: (id: number) => void;
  onDelete: (id: number, type: "todos" | "doneTasks") => void;
}

export interface InputFieldProps {
  onSubmit: () => void;
  onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  enteredValue: string;
}
