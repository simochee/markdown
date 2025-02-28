import type { Meta, StoryObj } from "@storybook/react";
import { Markdown } from ".";

const meta = {
	title: "Markdown",
	component: Markdown,
} satisfies Meta<typeof Markdown>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
