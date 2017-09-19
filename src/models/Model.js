import {Api} from './Api'
import {model} from 'frontful-model'

@model.define(({models}) => ({
  api: models.global(Api),
}))
@model({
  value: '',
})
export class Model {
}
