import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import { Button, ButtonProps } from '../components/Button/button';


export default {
  title: 'ship-ui/Button',
  component: Button,
  argTypes: {
    // style: { control: 'color' }
    // backgroundColor: { control: 'color' },
  },
} as Meta;

// const styles: React.CSSProperties = {
//   textAlign: 'center'
// }

const defauleButton: Story<ButtonProps> = (args) => <Button onClick={action('clicked')} {...args}>{args.children || 'buttom'}</Button>

export const Default = defauleButton.bind({});
Default.args = {

};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
