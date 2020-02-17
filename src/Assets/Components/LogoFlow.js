import React from 'react'
import Logo from 'Assets/Images/Logo.svg'

const LogoFlow = ({ logoHeight }) => {
  const logoStyle = {
    height: '120px',
    marginBottom: '1rem',
    pointerEvents: 'none'
  }

  return (
    <img style={logoStyle} src={Logo} className='App-logo' alt='Vai de Flow' />
  )
}

export default LogoFlow
