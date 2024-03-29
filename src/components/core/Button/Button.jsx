import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({ onClick, text }) => {
  return (
    <button className='button' onClick={onClick}>{text }</button>
  )
}

Button.propTypes = {
className: PropTypes.string,
text: PropTypes.string,
onClick : PropTypes.func
}

Button.defaultProps = {
    className: null,
    text: '',
    onClick : null
}

export default Button;