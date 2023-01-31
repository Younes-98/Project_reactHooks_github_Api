import React from 'react'
import './Spinner.css'

const Spinner = ({classname}) => {
  return (
    <div  className={classname}>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
    
  )
}

export default Spinner