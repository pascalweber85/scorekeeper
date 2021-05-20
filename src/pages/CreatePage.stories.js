import React from 'react'
import CreatePage from './CreatePage'

export default {
  title: 'Pages/CreatePage',
  components: CreatePage,
}

const Template = args => <CreatePage {...args} />

export const Default = Template.bind({})
Default.args = {}
