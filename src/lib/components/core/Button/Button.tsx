import type { JSX } from "solid-js";

import classes from "./Button.module.css";

export type ButtonVariant =
  | "filled"
  | "light"
  | "outline"
  | "transparent"
  | "white"
  | "subtle"
  | "default"
  | "gradient";

export interface ButtonProps {
  children: JSX.Element;
  variant?: ButtonVariant;
  color?: string;
}

export const Button = (props: ButtonProps): JSX.Element => {
  return (
    <button
      class={classes.root}
      data-variant={props.variant ?? "filled"}
      style={{
        "--_button-color": props.color,
      }}
    >
      <span class={classes.inner}>
        <span class={classes.label}>{props.children}</span>
      </span>
    </button>
  );
};

Button.classes = classes;
