// ImageUpload.stories.ts

import type { Meta, StoryObj } from '@storybook/react';

import ImageUpload from '../components/ImageUpload';

const meta: Meta<typeof ImageUpload> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Image Upload',
  component: ImageUpload,
};

export default meta;
type Story = StoryObj<typeof ImageUpload>;

export const Primary: Story = {
  args: {
    round: true,
    aspect: 1,
    color: "red",
  },
};