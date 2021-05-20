import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Score.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  onMinus: PropTypes.func,
  onPlus: PropTypes.func,
}

export default function Score({ name, score, onMinus, onPlus }) {
  return (
    <PlayerWrapper>
      {name}
      <div>
        <ButtonMinus onClick={onMinus}>-</ButtonMinus> <output>{score}</output>
        <ButtonPlus onClick={onPlus}>+</ButtonPlus>
      </div>
    </PlayerWrapper>
  )
}

const PlayerWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  font-family: Arial, Helvetica, sans-serif;

  output {
    width: 3ch;
    text-align: right;
    background: greenyellow;
    font-family: Arial, Helvetica, sans-serif;
  }
`
const ButtonMinus = styled.button`
  margin-right: 15px;
  margin-left: 5px;
  background: steelblue;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 5px;

  &:hover {
    background: red;
  }
`

const ButtonPlus = styled.button`
  margin-right: 5px;
  margin-left: 15px;
  background: steelblue;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 5px;

  &:hover {
    background: green;
  }
`
