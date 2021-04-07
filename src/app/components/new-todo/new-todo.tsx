import React, { useRef } from "react";
import { INewTodoProps } from "./model";
import {
  FormControl,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "./new-todo.styled";

const NewTodo: React.FC<INewTodoProps> = ({ onAddToDo }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputRef.current?.value) {
      // we can also do inputRef.current!.value to tell ts we are sure current is going to have a value but that cannot be true so optional chaining is a better solution
      const { value } = inputRef.current;
      onAddToDo(value);
      inputRef.current.value = "";
    }
    // onAddToDo(inputRef.current?.value); // we can also do inputRef.current!.value to tell ts we are sure current is going to have a value but that cannot be true so optional chaining is a better solution
    // inputRef.current!.value = ""; // here we cannot use the optional chaining because we want to overwrite the value of the input
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormControl>
        <StyledLabel htmlFor={"todo-text"}>Todo Text</StyledLabel>
        <StyledInput type="text" id={"todo-text"} ref={inputRef} />
      </FormControl>
      <StyledButton type={"submit"}>Add ToDo</StyledButton>
    </StyledForm>
  );
};

export default NewTodo;
