import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import React from 'react'

// import './Button.css'
// import PropTypes from 'prop-types'

// Button.propTypes = {
//   isActive: PropTypes.bool,
//   onClick: PropTypes.func,
//   children: PropTypes.node,
// }

// export default function Button({ children, isActive, onClick }) {
//   return (
//     <button onClick={onClick} className={isActive ? 'Button active' : 'Button'}>
//       {children}
//     </button>
//   )
// }

const Button = styled.button`
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
export default Button
