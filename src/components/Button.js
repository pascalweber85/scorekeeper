import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const ButtonStyled = styled.Styled`
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

Button.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
}

function Button(props) {
  return <ButtonStyled {...props} />
}
export default Button
