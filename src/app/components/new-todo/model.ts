import {TTodoText} from "../../models/todo-model";

export interface INewTodoProps {
  onAddToDo: (text: TTodoText) => void;
}
