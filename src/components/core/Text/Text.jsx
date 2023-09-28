import React from 'react'
import PropTypes from 'prop-types'

export const Text = ({ className, text })=> {
  return (
    <p className={className} >{ text }</p>
  )
}

Text.propTypes = {
text : PropTypes.string
}

Text.defaultProps = {
text: ''
}