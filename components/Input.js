import React, { forwardRef } from 'react'

const Input = forwardRef((props,ref) => {
  return (
        <div className="form-group">
            <label>{props.label}</label>
            <input defaultValue={props.value} ref={ref} type={props.type} name={props.name} placeholder={props.placeholder} required={props.required} />
        </div>
  )
})

export default Input