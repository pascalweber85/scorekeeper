import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Button.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default function Button(props) {
  return <ButtonStyled {...props} />
}

const ButtonStyled = styled.button`
  padding: 10px;
  border: none;
  background: ${props => (props.isActive ? 'green' : 'steelblue')};
  color: ${props => props.color};
  border-radius: 5px;
  margin: 10px;

  &:hover {
    background: orange;
  }
`
