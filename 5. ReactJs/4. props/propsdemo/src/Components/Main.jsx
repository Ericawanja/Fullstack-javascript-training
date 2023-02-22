import React from "react";

function Main({userdata = {username: 'User', userID: 'N/A', profession:"N/A"}, greetings = 'Welcome back'}) {
//  console.log(props, "From the main componnent");

  return (
    <div>
        <h1>Hello {userdata.username}</h1>
        <h2>{greetings}</h2>
     {/* <h1>Hello {props.userdata.username}</h1> */}
     {/* <h2>{props.greetings}</h2> */}
    </div>
  );
}

export default Main;
