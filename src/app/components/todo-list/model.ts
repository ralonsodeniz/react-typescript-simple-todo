import { ITodo, TTodoId } from "../../models/todo-model";

export interface ITodoListProps {
  items: ITodo[];
  onRemoveTodo: (id: TTodoId) => void;
}
