/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
 *
 * License: MIT
 */

import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class extends Component {
  onClick (e) {
    e.preventDefault()
    ReactDOM.findDOMNode(this.refs.fileInput).click()
  }

  inputChange (e) {
    const file = e.target.files[0]
    this.props.uploadFile(file)
  }

  render () {
    return (
      <div>
        <svg width='24' onClick={::this.onClick} height='24' viewBox='0 0 24 24' className='ld-button-image'>
          <path d='M18.222 6H5.778C4.8 6 4 6.6 4 7.333v9.334C4 17.4 4.8 18 5.778 18h12.444C19.2 18 20 17.4 20 16.667V7.333C20 6.6 19.2 6 18.222 6zm-4.084 4l-3 4.51L9 11.503 6 16h12l-3.862-6z' fill='currentColor' fillRule='evenodd' />
        </svg>
        <input
          type='file'
          ref='fileInput'
          onChange={::this.inputChange}
          style={{ display: 'none' }} />
      </div>
    )
  }
}
