import React from "react"

class MouseCounter extends React.Component{
    constructor(props){
        super(props)
        this.state = {hover:0}
    }
    handleHover = ()=>{
        this.setState(prev=>{
            return {hover: prev.hover + 1}
        })
    }
    render(){
        return(
            <div onMouseOver={this.handleHover}>
                You have hovered over {this.state.hover} times
                You clicked the counter {this.props.counter} times
            </div>
        )

        
    }
}
export default MouseCounter