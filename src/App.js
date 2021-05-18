import Button from './components/Button'
import Player from './components/Player'
import PlayerForm from './components/PlayerForm'
import { useState } from 'react'
import './App.css'

export default function App() {
  const [players, setPlayers] = useState([{ name: 'Pascal', score: 20 }])

  return (
    <div className="App">
      {players.map((player, index) => (
        <Player
          onMinus={() => countMinus(index)}
          onPlus={() => countPlus(index)}
          key={player.name}
          name={player.name}
          score={player.score}
        />
      ))}
      <div className="Buttons">
        <Button onClick={resetScores}>Reset Score</Button>
        <Button onClick={resetAll}>Reset All</Button>
      </div>
      <PlayerForm onSubmit={createPlayer} />
    </div>
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
