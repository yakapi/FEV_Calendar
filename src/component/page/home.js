import React from 'react'

class Home extends React.Component{
  render() {
    return (
      <div>
        <h1>Page Home Test ENV VAR</h1>
        <p>{process.env.API_KEY} </p>
      </div>
    );
  }
}
export default Home
