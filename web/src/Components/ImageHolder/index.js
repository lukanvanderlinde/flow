import React from 'react'

function ImageHolder({ image, alt }) {
  const logoStyle = {
    height: '90%',
    width: '90%',
    margin: '1rem 1rem 1rem 1rem',
    pointerEvents: 'none'
  }

  if (alt === null) {
    alt = ' '
  }

  return <img style={logoStyle} src={image} alt={alt} />
}

export default ImageHolder
