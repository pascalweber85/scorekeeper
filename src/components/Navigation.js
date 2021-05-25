import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from './Button'
import { Router, Route, Switch } from 'react-router'

Navigation.propTypes = {
  onNavigate: PropTypes.func.isRequired,
  pages: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, id: PropTypes.string })
  ),
  currentPAgeId: PropTypes.string,
}

export default function Navigation({ onNavigate, pages, currentPageId }) {
  return (
    <Nav>
      {pages.map(({ title, id }) => (
        <NavButton
          key={id}
          isActive={currentPageId === id}
          onClick={() => onNavigate(id)}
        >
          {title}
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
const NavButton = styled(Button)`
  border-radius: 0;
  width: 100%;
`
