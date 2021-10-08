import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Input } from '../components/Input';
import { InputProps } from '../components/Input/Input.props';

export default {
  component: Input,
  title: 'Components/Input',
} as Meta;

// const TemplateInput: Story<InputProps> = (args: InputProps) => <Input {...args} />;

export const Placeholder: React.VFC<{}> = () => <Input placeholder="Placeholder" onChange={() => console.log()} />;
export const Value: React.VFC<{}> = () => <Input placeholder="Placeholder" value="Some text" onChange={() => console.log()} />;
