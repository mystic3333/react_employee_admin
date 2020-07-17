import React, { Fragment } from "react";

// icon
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons'

// css
import "./style.less";

export default class HeaderView extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      isCollapsed: props.isCollapsed
    }
  }

  onCollapseIconClick = () => {
    this.props.toggleCollapsed()
  }

  componentWillReceiveProps(props) {
    const {isCollapsed} = props
    this.setState({isCollapsed})
  }

  render() {
    const {isCollapsed} = this.state
    return (
      <div className="header_container">
        <div className={isCollapsed ? 'close' : 'logo'}>
          <div className="logo_img">logo</div>
        </div>
        <div className="header_content">
          {
            isCollapsed ? 
            <MenuUnfoldOutlined onClick={this.onCollapseIconClick} style={{fontSize: '24px', marginLeft: '10px'}}/>
            :
            <MenuFoldOutlined onClick={this.onCollapseIconClick} style={{fontSize: '24px', marginLeft: '10px'}}/>
          }
        </div>
      </div>
    );
  }
}
