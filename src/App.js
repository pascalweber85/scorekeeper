import Heading from './components/Header'
import Button from './components/Button'
import PlayerWrapper from './components/Player'
import PlayerForm from './components/PlayerForm'
import Nav from './components/Navigation'
import { useState } from 'react'
import background from './components/basketball.jpg'
import styled from 'styled-components'

export default function App() {
  const [players, setPlayers] = useState([
    /*{ name: 'Pascal', score: 20 }*/
  ])

  return (
    <Wrapper>
      <div>
        <Heading> TwentyOne - Basketball </Heading>
        <div className="App" style={{ backgroundImage: `url(${background})` }}>
          {players.map((player, index) => (
            <PlayerWrapper
              onMinus={() => countMinus(index)}
              onPlus={() => countPlus(index)}
              key={player.name}
              name={player.name}
              score={player.score}
            />
          ))}
          <div className="Buttons">
            <Button color="white" isActive onClick={resetScores}>
              Reset Score
            </Button>
            <Button onClick={resetAll}>Reset All</Button>
          </div>
          <PlayerForm onSubmit={createPlayer} />
          <Nav />
        </div>
      </div>
    </Wrapper>
  )

  function createPlayer(name) {
    setPlayers([...players, { name, score: 0 }])
  }

  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function resetAll() {
    setPlayers([])
  }

  function countMinus(index) {
    const playerToUpdate = players[index]

    setPlayers([
      ...players.slice(0, index),
      { ...playerToUpdate, score: playerToUpdate.score - 1 },
      ...players.slice(index + 1),
    ])
  }

  function countPlus(index) {
    const playerToUpdate = players[index]

    setPlayers([
      ...players.slice(0, index),
      { ...playerToUpdate, score: playerToUpdate.score + 1 },
      ...players.slice(index + 1),
    ])
  }
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
  margin-top: 0px;
  margin-bottom: 20px;
`
