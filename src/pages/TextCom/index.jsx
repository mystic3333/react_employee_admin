import React from 'react'

export default class TextCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000) 
    }

    render() {
        return (
            <div>
                count: { this.state.count }
                <button></button>
            </div>
        )
    }
}