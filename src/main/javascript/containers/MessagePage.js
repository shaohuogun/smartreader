import $ from "jquery";
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router-dom';
import {Tabs, Tab} from 'material-ui/Tabs';

import ChannelInfo from '../components/channel/ChannelInfo';
import MessageList from '../components/message/MessageList';
import EbookTable from '../components/ebook/EbookTable';

const pageStyle = {
  width: 800,
  marginTop: 20,
  marginLeft: 20,
  marginBottom: 20,
  float: 'left',
  display: 'inline-block',
};

const tabStyle = {
  marginTop: 20,
};

export default class MessagePage extends React.Component {
  render() {
    var channelId = this.props.match.params.channelId
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div style={pageStyle}>
      <ChannelInfo channelId={channelId} />
      <Tabs style={tabStyle}>
        <Tab label="消息列表">
          <MessageList channelId={channelId} />
        </Tab>
        <Tab label="电子书籍">
          <EbookTable channelId={channelId} />
        </Tab>
      </Tabs>
      </div>
      </MuiThemeProvider>
    );
  }

};

MessagePage.propTypes = {
};
