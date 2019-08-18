import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
 children = 'Button', 
 className, 
 href,
 onClick, 
 disabled = false, 
 type, 
 ...props 
} = {}) => {
 let buttonTag = null

 className = `${className} button` || 'button'
  
 const attributes = {
  className,
  children,
  disabled,
  onClick,
  href
 }

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

 if(!href || disabled) {
  buttonTag = (
   <button {...attributes} {...props}>
    {children}
   </button>
  )
 } else {
  buttonTag = (
   <button {...attributes} {...props}>
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

Button.propTypes = {
 children: PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node
 ]),
 type: PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.string),
  PropTypes.string
 ]),
 disable: PropTypes.bool,
 type: PropTypes.string,
 className: PropTypes.string,
 onClick: PropTypes.func
}

export default Button