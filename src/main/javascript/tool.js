import React from 'react'
import PropTypes from 'prop-types'
import {render} from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {Provider} from 'react-redux'
import {createBrowserHistory} from 'history'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router} from 'react-router-dom'

import configureStore from './store/configureStore'
import storeProvider from './store/storeProvider'

import ToolLayout from './components/layout/ToolLayout'
import routes from './routes/tool'

// Needed for onTouchTap
injectTapEventPlugin();

const layoutStyle = {
  margin: '0 auto',
  backgroundColor: '#f5f5f5',
}

const Tool = ({store, history}) => (
  <Provider key="provider" store={store}>
  <Router key="router" history={history} >
  <ToolLayout style={layoutStyle}>
  {routes}
  </ToolLayout>
  </Router>
  </Provider>
)

Tool.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

storeProvider.init(configureStore({
  readingLists: [],
  readingItem: {},
  catalogs: [],
  message: {},
  channel: {},
  progress: {pickingMessage: 0, generatingEbook: 0},
  pagination: {}
}))

const store = storeProvider.getStore()
const history = syncHistoryWithStore(createBrowserHistory(), store)

render(
  <Tool store={store} history={history} />,
  document.getElementById('root')
)
