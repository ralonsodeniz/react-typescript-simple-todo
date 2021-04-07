export type TTodoText = string;

export type TTodoId = string | number;

export interface ITodo {
  id: TTodoId;
  text: TTodoText;
}
