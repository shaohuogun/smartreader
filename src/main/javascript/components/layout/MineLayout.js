import React from 'react'
import PropTypes from 'prop-types'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'

import Header from './Header'
import Footer from './Footer'
import MineNavigator from './MineNavigator'

const headerStyle = {
  backgroundColor: '#eeeeee',
}

const contentStyle = {
  margin: '0 auto',
}

const navigatorStyle = {
  backgroundColor: '#fff',
}

const sidebarStyle = {
  width: 300,
  marginTop: 15,
  float: 'left',
  display: 'inline-block',
}

const footerStyle = {
  marginTop: '15px',
  textAlign: 'center',
  fontSize: '12px',
  backgroundColor: '#fafafa'
}

const theme = createMuiTheme()

const MineLayout = (props) => (
  <div>
  <MuiThemeProvider theme={theme}>
  <Header style={headerStyle} />
  </MuiThemeProvider>

  <div style={contentStyle}>
  <MuiThemeProvider theme={theme}>
  <div style={sidebarStyle}>
  <MineNavigator style={navigatorStyle} />
  <Footer style={footerStyle} />
  </div>
  </MuiThemeProvider>
  {props.children}
  </div>
  </div>
)

MineLayout.propTypes = {
}

export default MineLayout
