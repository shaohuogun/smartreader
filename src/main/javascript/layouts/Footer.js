import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {GridList, GridTile} from 'material-ui/GridList'

const footerStyle = {
  marginTop: '15px',
  textAlign: 'center',
  fontSize: '12px',
  backgroundColor: '#fafafa',
}

export default class Footer extends Component {
  render() {
    return (
      <GridList
      cols={5}
      cellHeight={200}
      padding={15}
      style={footerStyle}
      {...this.props}
      >
      <GridTile
      key='profile'
      cols={1}
      >
      <a href="/about/profile">网站简介</a>
      </GridTile>

      <GridTile
      key='contact'
      cols={1}
      >
      <a href="/about/contact">联系方式</a>
      </GridTile>

      <GridTile
      key='business'
      cols={1}
      >
      <a href="/about/profile">商务合作</a>
      </GridTile>

      <GridTile
      key='disclaimer'
      cols={1}
      >
      <a href="/about/disclaimer">免责声明</a>
      </GridTile>

      <GridTile
      key='suggest'
      cols={1}
      >
      <a href="/about/contact">建议反馈</a>
      </GridTile>
      </GridList>
    )
  }
}

Footer.propTypes = {
}