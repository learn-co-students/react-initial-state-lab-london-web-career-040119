// your Bomb code here! 
import React, { Component } from 'react'
class Bomb extends Component {

  state = {
      secondsLeft: this.props.initialCount
  }

  countDown = () => {
      const element = this.state.secondsLeft > 0 ? <div>{this.state.secondsLeft} seconds left before I go boom!</div> : <div>Boom!</div>
      return element
  }

  render() {
      // console.log(this.props.initialCount)
      return <div>{this.countDown()}</div>
  }
}

export default Bomb;