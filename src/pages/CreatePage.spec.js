import CreatePage from './CreatePage'
import { render, screen } from '@testing-library/react'

describe('CreatePage', () => {
  it('should render a form with 2 inputs and a button', () => {
    render(<CreatePage onSubmit={jest.fn()} />)

    expect(
      screen.getByRole('form', { name: 'Create game' })
    ).toBeInTheDocument()

    expect(screen.getAllByRole('textbox')).toHaveLength(2)
    expect(screen.getAllByRole('button')).toBeInTheDocument()
  })
})
