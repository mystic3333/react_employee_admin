import React from 'react'

// 组件
import AsideMenu from './AsideMenu'

import './style.less'

export default class Sider extends React.Component {
    render() {
        return (
            <div className="sider_container">
                <AsideMenu/>
            </div>
        )
    }
}