import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from '../components/Button'
import LabeledInput from '../components/LabeledInput'
import background from '../components/basketball.jpg'

CreatePage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default function CreatePage({ onSubmit }) {
  return (
    <Grid>
      <Form
        aria-label="Create Game"
        style={{ backgroundImage: `url(${background})` }}
        onSubmit={handleSubmit}
      >
        <LabeledInput
          label="Name of game:"
          name="name"
          placeholder="e.g. Carcassonne"
          type="text"
          required
        />
        <LabeledInput
          label="Player names:"
          name="players"
          placeholder="e.g. Jane, John"
          type="text"
          required
        />

        <Button>Create Game</Button>
      </Form>
    </Grid>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const nameInput = form.elements.name
    const playersInput = form.elements.players
    const nameOfGame = nameInput.value
    const players = playersInput.value
      .split(',')
      .map(name => ({ name: name.trim(), score: 0 }))

    const game = {
      nameOfGame,
      players,
    }

    onSubmit(game)
  }
}

const Grid = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`

const Form = styled.form`
  display: grid;
  gap: 50px;
  label {
    display: grid;
    gap: 4px;
    padding: 10px;
  }
  input {
    padding: 4px;
  }
`
