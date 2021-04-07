import styled from "styled-components";

export const StyledList = styled.ul`
  list-style: none;
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;
  padding: 0;
`;

export const StyledItem = styled.li`
  margin: 1rem 0;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledButton = styled.button`
  background: #50005a;
  border: 1px solid #50005a;
  color: white;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover,
  &:active {
    background: #6a0a77;
    border-color: #6a0a77;
  }
`;
