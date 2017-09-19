import {dao} from 'frontful-dao'
import {isBrowser} from 'frontful-utils'

@dao(() => ({
  url: isBrowser() ? `/api` : `http://${process.env.HOST || 'localhost'}:${process.env.PORT || '80'}/api`,
}))
export class Api {
  get todoId() {
    return this.router.params.todoId || ''
  }

  getSample() {
    return this.get('/sample').then((sample) => {
      return sample
    })
  }
}
