import React from "react"
import PropTypes from "prop-types"
import "./button.style.scss"

const Button = ({buttonText, emitEvent}) => {

  const clickHandler = () => {
    emitEvent && emitEvent()
  }

  return (
    <button className="button" data-test="buttonComponent" onClick={clickHandler}>{buttonText}</button>
  )
}
Button.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
}

export default Button;