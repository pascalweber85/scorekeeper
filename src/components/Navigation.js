import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from './Button'

Navigation.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, path: PropTypes.string })
  ),
}

export default function Navigation({ pages }) {
  return (
    <Nav>
      {pages.map(({ name, path }) => (
        <Link key={name} to={path}>
          {name}
        </Link>
      ))}
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  button {
    width: 50%;
  

  &:hover {
    background: grey;
  }
`
const NavButton = styled(Button)`
  border-radius: 0;
  width: 100%;
`
