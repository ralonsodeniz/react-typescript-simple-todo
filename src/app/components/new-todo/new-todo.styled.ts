import styled, { css } from "styled-components";

const sharedInputStyles = css`
  display: block;
  width: 100%;
`;

export const StyledForm = styled.form`
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;
`;

export const FormControl = styled.div`
  margin-bottom: 1rem;
`;

export const StyledLabel = styled.label`
  font-weight: bold;
  ${sharedInputStyles};
`;

export const StyledInput = styled.input`
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.25rem;
  ${sharedInputStyles};
  &:focus {
    outline: none;
    border-color: #50005a;
  }
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
