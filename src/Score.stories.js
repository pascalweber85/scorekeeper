import React from 'react'
import Score from './Score'

export default {
  title: 'Score',
  component: Score,
}

const Template = args => <Score {...args} />

export const DefaultScoreboard = Template.bind({})
DefaultScoreboard.args = {
  name: 'Till',
  score: 20,
}

export const OtherScoreboard = Template.bind({})
OtherScoreboard.args = {
  name: 'Pascal',
  score: 0,
}
