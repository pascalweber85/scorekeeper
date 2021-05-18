import React from 'react'
import Player from './Player'

export default {
  title: 'Player',
  component: Player,
}

const Template = args => <Player {...args} />

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
