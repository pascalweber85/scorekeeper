// import PropTypes from 'prop-types'
// import styled from 'styled-components/macro'
// import Button from './components/Button'
// import Navigation from './components/Navigation'

// PlayPage.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   onNavigate: PropTypes.func.isRequired,
// }

// export default function PlayPage() {
//   return (
//     <Grid>
//       <Form onSubmit={onSubmit}>
//         <label className="Playerform">
//           Name of Game:
//           <input name="name" type="text" placeholder="z.B. TweentyOne" />
//         </label>
//         <label className="Playerform">
//           Player Names:
//           <input name="name" type="text" placeholder="z.B. Lenny" />
//         </label>
//         <Button>Create Game</Button>
//       </Form>
//       <Navigation
//         currentPageId="play"
//         onNavigate={onNavigate}
//         pages={[
//           { title: 'Play', id: 'play' },
//           { title: 'History', id: 'history' },
//         ]}
//       >
//         PlayPage
//       </Navigation>
//     </Grid>
//   )

//   function handleSubmit(event) {
//       event.preventDefault()
//       const form = event.target
//       const nameInput = form.elements.name
//       const playersInput = form.elements.players

//       const game ={
//           nameOfGame: nameInput.value
//           players: players.Input.value.split(',').map(name => name.trim())

//           const game = {
//               nameOfGame,
//               players,
//           }
//           onSubmit(game)
//       }

//   }
// }

// const Grid = styled.section`
//   display: grid;
//   gap: 20px;
// `

// const Form = styled.form`
//   display: grid;
//   gap: 10px;

//   label {
//   }
// `
