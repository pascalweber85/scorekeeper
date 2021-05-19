import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Navigation.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default function Navigation({}) {
  return (
    <NavigationWrapper>
      <NavButton>Play</NavButton>
      <NavButton>History</NavButton>
    </NavigationWrapper>
  )
}

const NavigationWrapper = styled.navigation`
  display: flex;
  padding: 5px;
`
const NavButton = styled.navbutton`
  padding: 10px;
  border: none;
  background: ${props => (props.isActive ? 'green' : 'steelblue')};
  color: whitesmoke;
  border-radius: 5px;
  margin: 10px;

  &:hover {
    background: orange;
  }
`
export default NavButton
