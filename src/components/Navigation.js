import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

Navigation.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string,
      isActive: PropTypes.bool,
    })
  ),
}

export default function Navigation({ pages }) {
  return (
    <Nav>
      {pages.map(({ name, path }) => (
        <NavButton key={name} to={path} activeStyle={{ background: 'orange' }}>
          {name}
        </NavButton>
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
const NavButton = styled(NavLink)`
  border-radius: 15px;
  width: 100%;
  padding: 10px;
  text-align: center;
  color: white;
  border: none;
  cursor: pointer;
  text-decoration: none;
  background: steelblue;

  &:hover {
    background: grey;
  }
`
