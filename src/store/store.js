import { createStore } from 'vuex'
import subStore from './subStore'

const store = createStore({
  modules: {
    subStore
  }
})

export default store