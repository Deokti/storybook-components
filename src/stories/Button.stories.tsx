import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from '../components/Button';
import { ButtonProps } from '../components/Button/Button.props';

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

const TemplateButton: Story<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

export const Primary = TemplateButton.bind({});
export const Secondary = TemplateButton.bind({});
export const Succsess = TemplateButton.bind({});
export const Warning = TemplateButton.bind({});
export const Danger = TemplateButton.bind({});
export const Info = TemplateButton.bind({});
export const Icon = TemplateButton.bind({});
export const Loading = TemplateButton.bind({});
export const Disable = TemplateButton.bind({});

Primary.args = {
  children: 'Кнопка',
  disabled: false,
  loading: false,
  color: 'primary',
  type: 'button',
}

Secondary.args = {
  children: 'Кнопка',
  disabled: false,
  loading: false,
  color: 'secondary',
  type: 'button',
}

Succsess.args = {
  children: 'Кнопка',
  disabled: false,
  loading: false,
  color: 'succsess',
  type: 'button',
}

Warning.args = {
  children: 'Кнопка',
  disabled: false,
  loading: false,
  color: 'warning',
  type: 'button',
}

Danger.args = {
  children: 'Кнопка',
  disabled: false,
  loading: false,
  color: 'danger',
  type: 'button',
}

Info.args = {
  children: 'Кнопка',
  disabled: false,
  loading: false,
  color: 'info',
  type: 'button',
}

Icon.args = {
  children: '',
  disabled: false,
  loading: false,
  color: 'info',
  type: 'icon',
}

Loading.args = {
  children: 'Кнопка',
  loading: true,
}

Disable.args = {
  children: 'Кнопка',
  disabled: true,
}