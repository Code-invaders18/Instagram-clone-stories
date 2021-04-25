import React, { Component } from 'react'

import Stories from 'react-insta-stories'

class App extends Component {
  render () {
    return (
      <Stories 
        stories={stories}
        defaultInterval={1500}
        width={432}
        height={768}
      />
    )
  }
}
const stories = ['http://res.cloudinary.com/vmcloud18/image/upload/v1616219839/o98t8hau48v2l0vwhgwq.jpg',
'http://res.cloudinary.com/vmcloud18/image/upload/v1610424783/vjtndcpbz2rkiwteodft.jpg']
export default App;