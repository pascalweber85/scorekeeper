import React from 'react'
import Score from './Score'

export default {
  title: 'Score',
  component: Score,
}

const Template = args => <Score {...args} />

export const DefaultScoreboard = Template.bind({})
DefaultScoreboard.args = {
  name: 'default',
  score: 10,
}

export const OtherScoreboard = Template.bind({})
OtherScoreboard.args = {
  name: 'Passi',
  score: 20,
}
