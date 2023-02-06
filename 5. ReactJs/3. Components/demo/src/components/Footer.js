import React from "react";
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: 'martin'}
  }
  render() {
    return (
      <div>
        Hello {this.props.user}
        <div>
          {this.props?.columns?.map((ele) => {
            return <span>{ele}</span>;
          })}
        </div>
        <div> The current user is {this.state.user}</div>
      </div>
    );
  }
}

export default Footer;
