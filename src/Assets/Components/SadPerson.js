import React from 'react'
import Sad from 'Assets/Images/Sad.svg'

const SadPerson = () => {
  const style = {
    height: '240px',
    marginBottom: '1rem',
    pointerEvents: 'none'
  }

  return <img style={style} src={Sad} alt=' ' />
}

export default SadPerson
