import React from 'react'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

const Template = args => <Button {...args} />

export const defaultButton = Template.bind({})
defaultButton.args = {
  children: 'Hello',
  isActive: false,
}

export const activeButton = Template.bind({})
activeButton.args = {
  children: 'Goodbye',
  isActive: true,
}
