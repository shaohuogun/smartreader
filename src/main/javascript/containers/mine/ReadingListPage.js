import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import ReadingListForm from '../../components/read/ReadingListForm'
import ReadingListTabs from '../../components/read/ReadingListTabs'

const pageStyle = {
  width: 685,
  marginTop: 15,
  marginLeft: 15,
  float: 'left',
  display: 'inline-block',
}

const tabsStyle = {
  marginTop: 15,
}

export default class ReadingListPage extends Component {
  static propTypes = {
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div style={pageStyle}>
      <ReadingListForm />
      <ReadingListTabs style={tabsStyle} />
      </div>
      </MuiThemeProvider>
    )
  }
}