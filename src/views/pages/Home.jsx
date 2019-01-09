import Component from '../components/Component'
import React from 'react'
import {resolver} from 'frontful-resolver'
import {style} from 'frontful-style'

@resolver((resolve) => {
  resolve(() => ({
    Component: <Component />,
  }))
})
@style(require('./Home.style'))
class Home extends React.PureComponent {
  render() {
    const {style, Component} = this.props

    return (
      <div className={style.css('home')}>
        <Component />
      </div>
    )
  }
}

export default Home
