map = require("lodash/map")

module.exports = abstractAdapter =
  genericSelectName: (item) ->
    value: item.id
    displayName: item.name

  genericDropDown: (data, blank = true) ->
    if data.data
      data = data.data
    options = map data, abstractAdapter.genericSelectName
    if blank
      options.unshift {value: '', displayName: ''}
    options
