import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Field, reduxForm} from 'redux-form'
import {TextField} from 'redux-form-material-ui'

export const fields = ['bookName']

// Validation Functions
const required = value => (value == null ? '必填属性，请填写！' : undefined)

class MessageFirstForm extends Component {
  componentDidMount() {
    this.refs.bookName // the Field
    .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
    .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
    .focus() // on TextField
  }

  render() {
    const {
      fields: {bookName},
      handleSubmit
    } = this.props
    return (
      <form onSubmit={handleSubmit}>
      <Field
      name="bookName"
      component={TextField}
      hintText="请填写书籍的名称！"
      floatingLabelText="书籍名称"
      fullWidth={true}
      validate={required}
      ref="bookName"
      withRef
      />

      </form>
    )
  }
}

MessageFirstForm.propTypes = {
  fields: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'readingItemForm',
  fields,
  destroyOnUnmount: false
})(MessageFirstForm)