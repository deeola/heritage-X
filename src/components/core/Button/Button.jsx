import React from 'react'
import PropTypes from 'prop-types'

const Button = ({className, onClick, text }) => {
  return (
    <button className={className} onClick={onClick}>{text }</button>
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