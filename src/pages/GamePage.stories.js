import React from 'react'
import GamePage from './GamePage'

export default {
  title: 'Pages/GamePage',
  components: GamePage,
}

const Template = args => <GamePage {...args} />

export const DefaultGamePage = Template.bind({})
DefaultGamePage.args = {}
