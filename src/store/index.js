import Vue from 'vue'
import Vuex from 'vuex'
import createPersist from 'vuex-localstorage'
import * as actions from './actions'
import * as getters from './getters'
import hub from './modules/hub'
import user from './modules/user'
import post from './modules/post'
import page from './modules/page'
import categories from './modules/categories'
import album from './modules/album'
import musicsheet from './modules/musicsheet'
import gallery from './modules/gallery'
import show from './modules/show'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

let localStorage = createPersist({
    namespace: 'YOUR_APP_NAMESPACE',
    initialState: {},
    expires: 1.21e+9 // Two Weeks
})

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    hub,
    user,
    post,
    page,
    categories,
    album,
    musicsheet,
    gallery,
    show,
  },
  strict: debug,
  plugins: [localStorage]
})
