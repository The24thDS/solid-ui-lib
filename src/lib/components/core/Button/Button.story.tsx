import type { Meta, StoryObj } from "storybook-solidjs";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta = {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      description: "The content of the button.",
      control: {
        type: "text",
      },
    },
    variant: {
      description: "The variant of the button.",
      options: [
        "filled",
        "light",
        "outline",
        "transparent",
        "white",
        "subtle",
        "default",
        "gradient",
      ],
      control: { type: "select" },
    },
    color: {
      description: "The color of the button.",
      control: {
        type: "color",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Button",
  },
};
