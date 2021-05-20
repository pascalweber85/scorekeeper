import { useState } from 'react'
import styled from 'styled-components/macro'
// import Heading from './components/Header'
// import Button from './components/Button'
import Navigation from './components/Navigation'
// import PlayerWrapper from './components/Player'
// import PlayerForm from './components/PlayerForm'
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
      {currentPageId === 'create' && (
        <CreatePage onNavigate={setCurrentPageId} onSubmit={handleSubmit} />
      )}
      {currentPageId === 'game' && (
        <GamePage
          onResetScores={resetScores}
          onEndGame={handleEndGame}
          onPlayerUpdate={updateScore}
          nameOfGame={nameOfGame}
          players={players}
        />
      )}
      {currentPageId === 'history' && (
        <HistoryPage games={history} onNavigate={setCurrentPageId} />
      )}
      {currentPageId !== 'game' && (
        <Navigation
          currentPageId={currentPageId}
          onNavigate={setCurrentPageId}
          pages={[
            { title: 'Create', id: 'create' },
            { title: 'History', id: 'history' },
          ]}
        />
      )}
      <div style={{ backgroundImage: `url(${background})` }}></div>
    </AppGrid>
  )

  function handleEndGame() {
    setCurrentPageId('history')
    setHistory([{ players, nameOfGame }, ...history])
  }

  function handleSubmit({ players, nameOfGame }) {
    setPlayers(players)
    setNameOfGame(nameOfGame)
    setCurrentPageId('game')
  }

  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function updateScore(index, value) {
    const playerToUpdate = players[index]

    setPlayers([
      ...players.slice(0, index),
      { ...playerToUpdate, score: playerToUpdate.score + value },
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
