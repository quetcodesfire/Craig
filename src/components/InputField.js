import React from 'react'
import PropTypes from 'prop-types'  
import ReactHelmet from 'react-helmet'

const InputFields = ({children, placeholder}) => {
  // need a select, text area, and input field
  // make sure the field turns red when there is inproper input

  return (
    <>
      <div className={className}>
        {placeholder}
      </div>
    </>
  )
}

InputFields.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  placeholder: PropTypes.string
}

export default InputFields