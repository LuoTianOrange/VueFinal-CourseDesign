import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import images from './images'
import user from './user'
Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      isLikedGroup: [],
      PhotoPageImgData: JSON.parse(localStorage.getItem("PhotoPageImgData")) ?? null,
      user: [
        ...user,
      ],
      keyNames: [
        { tagText: '动漫', tagKey: 'animation' },
        { tagText: '国画', tagKey: 'ChinesepPainting' },
        { tagText: '油画', tagKey: 'canvas' }
      ],
      image: [
        ...images,
      ],
      CommentSection: {
        1: [
          {
            id: 1,
            name: "User",
            avatar: "../",
            text: "test",
            time: ""
          }
        ],
        2: [
          {
            id: 1,
            name: "test",
            avatar: "../",
            text: "test1",
            time: ""
          }
        ],
        3: [
        ],
        4: [
        ],
        5: [
        ],
        6: [
        ],
        7: [
        ],
        8: [
        ],
        9: [
        ],
        10: [
        ],
        11: [
        ],
        12: [
        ],
        13: [
        ],
        14: [
        ],
        15: [
        ],
        16: [
        ],

      }
    }
  },
  getters: {

  },
  mutations: {
    // 设置图片详细页面的图片数据
    setPhotoPageImgData(state, data) {
      state.PhotoPageImgData = data
      if (data) localStorage.setItem("PhotoPageImgData", JSON.stringify(data))
    },
    setPhotoLike(state, {no, isLiked}) {
       // 设置图片点赞状态
      if (isLiked) {
        // 若未点赞，则添加到点赞列表中
        if (state.isLikedGroup.indexOf(no) === -1) state.isLikedGroup.push(no)
      }
      else {
        // 若已点赞，则从点赞列表中移除
        state.isLikedGroup = state.isLikedGroup.filter((v) => v != no)
      }
    },
     // 设置点赞列表数据
    setIsLikedGroup(state, data) {
      state.isLikedGroup = data ?? []
    },
     // 设置评论数据
    setComments(state, {id, list}) {
      state.CommentSection[id] = list
    }
  },
  actions: {
    // 异步获取点赞列表数据
    fetchIsLikedGroup(ctx) {
      axios.get("/api/isLikedGroup.json").then(({data}) => {
        ctx.commit("setIsLikedGroup", data)
      })
    }
  },
  modules: {
  }
})
