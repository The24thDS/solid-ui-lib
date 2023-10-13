import type { JSX, Component } from 'solid-js';

interface ButtonProps {
  children: JSX.Element;
}

export const Button = (props: ButtonProps): JSX.Element => {
  return <button>{props.children}</button>;
}