import browserConfig from 'frontful-config/browser'
import {dao} from 'frontful-dao'

@dao(() => ({
  url: `${browserConfig.url.self}/api`,
}))
class Api {
  get todoId() {
    return this.router.params.todoId || ''
  }

  getSample() {
    return this.get('/sample').then((sample) => {
      return sample
    })
  }
}

export {Api}
