import type { Meta, StoryObj } from "@storybook/react";
import { Markdown } from ".";
import basic from "../../fixtures/basic.md?raw";
import special from "../../fixtures/special.md?raw";

const meta = {
	title: "Markdown",
	component: Markdown,
	decorators: [
		(Story) => (
			<div className="mx-auto max-w-screen-sm px-4 py-5">
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof Markdown>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: {
		children: basic,
	},
};

export const Special_Syntaxes: Story = {
	args: {
		children: special,
	},
};
