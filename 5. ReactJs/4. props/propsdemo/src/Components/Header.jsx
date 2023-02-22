import React, { Component } from 'react'

export class Header extends Component {
    constructor(props){
        super(props)
        // console.log(props)
    }
  render() {
    return (
      <div>
        <span>{this.props.menu[0]}</span>
      </div>
    )
  }
}

export default Header