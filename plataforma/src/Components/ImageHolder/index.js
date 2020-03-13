import React from 'react'

function ImageHolder({ image, alt, url }) {
  const logoStyle = {
    height: '86%',
    width: '86%',
    padding: '1rem 1rem 1rem 1rem',
    pointerEvents: 'none'
  }

  if (alt === null) {
    alt = ' '
  }

  if (url) {
    return <img style={logoStyle} src={url} alt={alt} />
  } else {
    return <img style={logoStyle} src={image} alt={alt} />
  }
}

export default ImageHolder
