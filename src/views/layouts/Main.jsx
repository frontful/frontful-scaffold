import React from 'react'
import {style} from 'frontful-style'

@style(require('./Main.style'))
class Main extends React.PureComponent {
  render() {
    const {style, children} = this.props

    return (
      <div className={style.css('main')}>
        {children}
      </div>
    )
  }
}

export default Main
