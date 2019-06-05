import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  children = 'Button', 
  className, 
  to, 
  onClick, 
  disabled = false, 
  type, 
  buttonTag,
  ...props 
} = {}) => {

  className = `${className}-button` || 'button'
  
  const attributes = {
    children,
    disabled,
    onClick,
    to
  };

  if(disabled) {
    className += ' disabled-button'
    disabled = true
  }

  if(type) {
    if(typeof type === 'string') {
      type = [type]
    }
    type.forEach(t => {
      className += ` ${t}-button`
    })
  }

  if(!to || disabled) {
    buttonTag = (
      <button {...attributes} {...props}>
        {children}
      </button>
    )
  } else {
    buttonTag = (
      <button href={to} {...attributes} {...props}>
        {children}
      </button>
    )
  }

  return (
    <span className={className}>
      {buttonTag}
    </span>
  )
}

export default Button