import React, { useCallback, useState } from "react";
import TodoList from "./components/todo-list";
import NewTodo from "./components/new-todo";
import { ITodo, TTodoId, TTodoText } from "./models/todo-model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const handleAddTodo = useCallback(
    (text: TTodoText) =>
      setTodos((prevState) => [
        ...prevState,
        { id: prevState.length + 1, text },
      ]),
    []
  );
  const handleRemoveTodo = useCallback(
    (id: TTodoId) =>
      setTodos((prevState) => prevState.filter((todo) => todo.id !== id)),
    []
  );

  return (
    <div className="App">
      <NewTodo onAddToDo={handleAddTodo} />
      <TodoList items={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
};

export default App;
