import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      PhotoPageImgData: JSON.parse(localStorage.getItem("PhotoPageImgData")) ?? null,
      user: [
        // userid(用户ID),username(用户名),userinfo(用户简介),userheader(用户头像),userbackgroud(用户背景)
        {
          userid: "1",
          username: "甘城なつき",
          userinfo: "甘城（あましろ）なつきです。 Nachoneko desu.",
          userheader: "",
          userbackgroud: "../assets/19.png"
        },
        {
          userid: "2",
          username: "XingJianhua",
          userinfo: "",
          userheader: "",
          userbackgroud: ""
        },
        {
          userid: "3",
          username: "fangao",
          userinfo: "",
          userheader: "",
          userbackgroud: ""
        },
      ],
      keyNames: [
        { tagText: '动漫', tagKey: 'animation' },
        { tagText: '国画', tagKey: 'ChinesepPainting' },
        { tagText: '油画', tagKey: 'canvas' }
      ],
      image: [
        {
          no: 1,
          name: "nacho1",
          author: "甘城なつき",
          authorid:"1",
          price: 1000,
          time: "2023-06-09",
          url: require(`@/assets/1.png`),
          type: "animation",
          tag: [
          {tno:1,tname:"2 girls"}, 
          {tno:2,tname:"swimsuit"}, 
          {tno:3,tname:"icecream"}
          ],
          intrduce: `夏コミで出すB2タペストリーの絵柄です!
                       なちょ猫と雫ちゃん一緒に描けてよかった (Ｕ＞△＜Ｕ)
                       -----
                       C96日曜日西地区“め”ブロック一19b です:3
                       ウェブカタログ ⇒ https://webcatalog-free.circle.ms/Circle/14510520`
        },
        {
          no: 2,
          name: "nacho2",
          author: "甘城なつき",
          authorid:"1",
          price: 1000,
          time: "2023-06-09",
          url: require(`@/assets/2.png`),
          type: "animation",
          intrduce: `无`
        },
        {
          no: 3,
          name: "nacho3",
          author: "甘城なつき",
          authorid:"1",
          price: 1000,
          time: "2023-06-09",
          url: require(`@/assets/3.png`),
          type: "animation",
          intrduce: `无`
        },
        {
          no: 4,
          name: "nacho4",
          author: "甘城なつき",
          authorid:"1",
          price: 1000,
          time: "2023-06-09",
          url: require(`@/assets/4.png`),
          type: "animation",
          intrduce: `无`
        },
        {
          no: 5,
          name: "nacho5",
          author: "甘城なつき",
          authorid:"1",
          price: 1000,
          time: "2023-06-09",
          url: require(`@/assets/5.png`),
          type: "animation",
          intrduce: `无`
        },
        {
          no: 6,
          name: "nacho6",
          author: "甘城なつき",
          authorid:"1",
          price: 1000,
          time: "2023-06-09",
          url: require(`@/assets/6.png`),
          type: "animation",
          intrduce: `无`
        },
        {
          no: 7,
          name: "nacho7",
          author: "甘城なつき",
          authorid:"1",
          price: 1000,
          time: "2023-06-09",
          url: require(`@/assets/7.png`),
          type: "animation",
          intrduce: `无`
        },
        {
          no: 8,
          name: "nacho8",
          author: "甘城なつき",
          authorid:"1",
          price: 1000,
          time: "2023-06-09",
          url: require(`@/assets/8.png`),
          type: "animation",
          intrduce: `无`
        },
        {
          no: 9,
          name: "Spring",
          author: "XingJianhua",
          authorid:"2",
          price: 1000,
          time: "2023-06-10",
          url: require(`@/assets/12.png`),
          type: "ChinesepPainting",
          intrduce: `无`
        },
        {
          no: 10,
          name: "live-Grove-Orange-Sky_m",
          author: "fangao",
          authorid:"3",
          price: 1000,
          time: "2023-06-11",
          url: require(`@/assets/13.png`),
          type: "canvas",
          intrduce: `无`
        },
        {
          no: 11,
          name: "んにゃ",
          author: "甘城なつき",
          authorid:"1",
          price: 1000,
          time: "2020-12-07",
          url: require(`@/assets/14.png`),
          type: "animation",
          intrduce: `:3`,
        },
        {
          no: 18,
          name: "ohayo nachoneko T",
          author: "甘城なつき",
          authorid:"1",
          price: 1000,
          time: "2020-12-07",
          url: require(`@/assets/18.png`),
          type: "animation",
          intrduce: `新しいTシャツ販売開始しました!
                    [ https://nanyanostore.com/products/oha-nacho ]
                    なちょ猫がいつも身につけているヘアクリップも同時に販売しています！
                    よかったら見てみてね！[ https://nanyanostore.com ]
                    `,
        },

      ],
      
    }
  },
  getters: {

  },
  mutations: {
    setPhotoPageImgData(state, data) {
      state.PhotoPageImgData = data
      if (data) localStorage.setItem("PhotoPageImgData",JSON.stringify(data))
    }
  },
  actions: {
  },
  modules: {
  }
})
