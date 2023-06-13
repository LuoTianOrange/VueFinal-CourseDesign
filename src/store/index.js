import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state(){
    return {
      PhotoPageImgData: null
    }
  },
  getters: {

  },
  mutations: {
    setPhotoPageImgData(state, data) {
      state.PhotoPageImgData = data
    }
  },
  actions: {
  },
  modules: {
  }
})
