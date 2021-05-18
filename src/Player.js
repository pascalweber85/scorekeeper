import React from 'react'
import './Player.css'
import PropTypes from 'prop-types'

Score.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  onMinus: PropTypes.func,
  onPlus: PropTypes.func,
}

export default function Score({ name, score, onMinus, onPlus }) {
  return (
    <section className="Player">
      {name}
      <div className="Player__container">
        <button className="Player__button" onClick={onMinus}>
          -
        </button>{' '}
        {score}
        <button className="Player__button" onClick={onPlus}>
          +
        </button>
      </div>
    </section>
  )
}