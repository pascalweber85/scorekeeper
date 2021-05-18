import React from 'react'
import './Score.css'
import PropTypes from 'prop-types'

Score.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  onMinus: PropTypes.func,
  onPlus: PropTypes.func,
}

export default function Score({ name, score, onMinus, onPlus }) {
  return (
    <section className="Score">
      {name}
      <div className="Score__container">
        <button className="Score__button" onClick={onMinus}>
          -
        </button>
        {score}
        <button className="Score__button" onClick={onPlus}>
          +
        </button>
      </div>
    </section>
  )
}
