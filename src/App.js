import { useState } from 'react'
import styled from 'styled-components/macro'
import Heading from './components/Header'
import Button from './components/Button'
import Navigation from './components/Navigation'
import PlayerWrapper from './components/Player'
import PlayerForm from './components/PlayerForm'
import background from './components/basketball.jpg'
import CreatePage from './pages/CreatePage'
import GamePage from './pages/GamePage'
import HistoryPage from './pages/HistoryPage'

export default function App() {
  const [currentPageId, setCurrentPageId] = useState('create')
  const [history, setHistory] = useState([])
  const [players, setPlayers] = useState([])
  const [nameOfGame, setNameOfGame] = useState('')
  /*{ name: 'Pascal', score: 20 }*/

  return (
    <AppGrid>
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
        </div>
      </div>
      <Navigation
        currentPageId={currentPageId}
        onNavigate={setCurrentPageId}
        pages={[
          { title: 'Create', id: 'create' },
          { title: 'History', id: 'history' },
        ]}
      />
    </AppGrid>
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

const AppGrid = styled.section`
  display: grid;
  grid-template-rows: auto min-content;
  height: 100vh;
  padding: 12px;
  gap: 20px;
`
