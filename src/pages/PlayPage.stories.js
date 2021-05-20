import React from 'react'
import Navigation from '.components/Navigation'

export default {
  title: 'Pages/PlayPage',
  components: PlayPage,
}

const Template = args => <PlayPage {...args} />

export const DefaultPlayPage = Template.bind({})
DefaultPlayPage.args = {}
