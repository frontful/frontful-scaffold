import React from 'react'
import {Model} from '../../models/Model'
import {Api} from '../../models/Api'
import {resolver} from 'frontful-resolver'
import {style} from 'frontful-style'

@resolver.define(({models}) => ({
  model: models.global(Model),
  api: models.global(Api),
}))
@resolver((resolve) => {
  resolve(({model}) => ({
    value: model.value,
  }))
  resolve(({model, api}) => ({
    data: api.getSample(),
    changeValue: (event) => {
      model.value = event.target.value
    },
  }))
})
@style(require('./Component.style'))
class Component extends React.PureComponent {
  render() {
    const {style, value, changeValue, data} = this.props

    return (
      <div className={style.css('component')}>
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
        <input value={value} onChange={changeValue}></input>
      </div>
    )
  }
}

export default Component
