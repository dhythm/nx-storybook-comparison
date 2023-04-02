import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import App from './app';

export default {
  title: 'Admin/App',
  component: App,
};

const Template: Story<ComponentProps<typeof App>> = () => {
  return <App />;
};

export const $App = Template.bind({});
