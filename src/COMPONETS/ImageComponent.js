import React, { Component } from 'react'

class ImageComponent extends Component {
  render() {
    const { src, alt, height } = this.props
    return <img src={src} alt={alt} style={{ height: height }} />
  }
}

export default ImageComponent
