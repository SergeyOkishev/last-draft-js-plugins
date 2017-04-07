/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
 * Copyright (c) 2016, Nik Graf (https://www.draft-js-plugins.com)
 *
 * License: MIT
 */

import {colors} from './colors'
import Picker from './Picker'

const styleMap = {}
colors.map((c, i) => {
  styleMap[`color-${c.replace('#', '')}`] = { color: c }
})

module.exports = {
  Picker: Picker,
  colorStyleMap: styleMap
}
