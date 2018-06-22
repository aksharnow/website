import React, { Component } from 'react'

class App extends React.Component{
  render(){
    return(
      <div className="products">
        <div className="product">
          <h1>Akshar Now</h1>
          <p> The new training sessions will start on June 29th </p>
          <p> Please reach out to <a href={"mailto:aksharnow@gmail.com?subject=More details about the training&body=Hello, %0D%0A I'm interested in the training, please let me know more details"}>aksharnow@gmail.com</a> for more details </p>
        </div>
      </div>
    );
  }

}

export default App
