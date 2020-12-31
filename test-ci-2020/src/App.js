import React from 'react'
import Test12 from '../src/Components/Test12'
import Test3 from '../src/Components/Test3'
import '../src/assets/App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  

  render() {
    return(
      <>
      <div className="task12">
        <h3> Problem Solving </h3>
      <Test12/>
      </div>
      
      <div className="task3">
        <h1> QUIZ FOR FUN</h1>
      <Test3/>
      </div>
      
      </>
    )
  }
}

export default App;