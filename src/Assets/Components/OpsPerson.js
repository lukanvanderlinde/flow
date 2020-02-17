import React from 'react'
import Ops from 'Assets/Images/Ops.svg'

const OpsPerson = () => {
  const style = {
    height: '240px',
    marginBottom: '1rem',
    pointerEvents: 'none'
  }

  return <img style={style} src={Ops} alt=' ' />
}

export default OpsPerson
