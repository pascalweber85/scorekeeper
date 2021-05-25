import HistoryPage from './HistoryPage'
import { render } from '@testing-library/react'

describe('HistoryPage', () => {
  it('should render a list of played games', () => {
    render(
      <HistoryPage
        games={[
          {
            id: 1,
            gameName: 'Schach',
            players: [
              { name: 'Jane', score: 10 },
              { name: 'John', score: 20 },
            ],
            date: '12.May.2021, 10:39',
          },
        ]}
      />
    )
  })
})
