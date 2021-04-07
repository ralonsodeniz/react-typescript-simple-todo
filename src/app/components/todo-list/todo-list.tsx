import React from "react";
import { ITodoListProps } from "./model";
import { StyledItem, StyledList, StyledButton } from "./todo-list.styled";

const TodoList: React.FC<ITodoListProps> = ({ items, onRemoveTodo }) => (
  <StyledList>
    {items.map((item) => {
      const { text, id } = item;
      return (
        <StyledItem key={id}>
          <span>{text}</span>
          {/*<button type={"button"} onClick={() => onRemoveTodo(id)}> */}
          <StyledButton type={"button"} onClick={onRemoveTodo.bind(null, id)}>
            Remove
          </StyledButton>
        </StyledItem>
      );
    })}
  </StyledList>
);
export default TodoList;
