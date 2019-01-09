import style from './index.style'

import Main from './layouts/Main'
import React from 'react'
import Home from './pages/Home'
import {Router} from 'frontful-router'
import {resolver} from 'frontful-resolver'

@resolver((resolve) => {
  resolve(() => ({
    View:
      <Router>
        <Main>
          <Home pattern="/" />
        </Main>
      </Router>
  }))
})
@style
class Index extends React.PureComponent {
  render() {
    const {View} = this.props
    return <View />
  }
}

export default Index
