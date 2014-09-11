Controls = {

  Mixins: {
    DataSourced: require('./mixins/DataSourced'),
    DataTypeConversion: require('./mixins/DataTypeConversion'),
    DisableOnSubmit: require('./mixins/DisableOnSubmit'),
    Help: require('./mixins/Help'),
    SingleInput: require('./mixins/SingleInput'),
    StandardErrorDisplay: require('./mixins/StandardErrorDisplay'),
    Validation: require('./mixins/Validation'),
    Confirmation: require('./mixins/Confirmation')
  },

  Checkbox: require('./Checkbox'),
  Date: require('./Date'),
  DateTime: require('./DateTime'),
  Dropdown: require('./Dropdown'),
  File: require('./File'),
  Hidden: require('./Hidden'),
  MultiSelect: require('./MultiSelect'),
  Number: require('./Number'),
  Password: require('./Password'),
  RadioButtons: require('./RadioButtons'),
  TextArea: require('./TextArea'),
  Text: require('./Text'),
  MultiTypeAhead: require('./MultiTypeAhead'),
  TypeAhead: require('./TypeAhead'),
  Markdown: require('./Markdown')

}

module.exports = Controls;