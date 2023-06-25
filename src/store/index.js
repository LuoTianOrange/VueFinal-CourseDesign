import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      isLikedGroup: [],
      PhotoPageImgData: JSON.parse(localStorage.getItem("PhotoPageImgData")) ?? null,
      user: [
        // userid(用户ID),username(用户名),userinfo(用户简介),userheader(用户头像),userbackgroud(用户背景)
        {
          userid: "1",
          username: "甘城なつき",
          userinfo: "甘城(あましろ)なつきです。 Nachoneko desu.",
          userheader: "/image/20.png",
          userbackgroud: "/image/19.png"
        },
        {
          userid: "2",
          username: "宁建华",
          userinfo: "宁建华,号山魂,生于1968年,河北省石家庄人,现为职业画家,河北省美协会员,自幼拜中国国画院著名画家高月冬为师,后又进修中央美院国画系深造,宁建华擅长山水画,经常独自云游写生,足迹名山大川,拜访多位名师,其作品气势宏伟,很有艺术价值,2014年创办太行画院,2016年参加(仁孝华夏情公益中国梦)画展获二等奖",
          userheader: "/image/23.png",
          userbackgroud: "/image/12.png"
        },
        {
          userid: "3",
          username: "梵高",
          userinfo: "文森特·威廉·梵高(Vincent Willem van Gogh,1853年3月30日—1890年7月29日),荷兰后印象派画家。代表作有《星月夜》、自画像系列、向日葵系列等。",
          userheader: "/image/22.png",
          userbackgroud: "/image/21.png"
        },
        {
          userid: "4",
          username: "しらたま❄",
          userinfo: "イラストレーター・原画家です。コメントなどありがとうございます！『星空鉄道とシロの旅』『あまいろショコラータ』『しゅがてん』 『アズールレーン』文月・長月 『にじさんじ』えま★おうがすと 各種キャラクターデザイン、原画、描き下ろしなど",
          userheader: "/image/25.png",
          userbackgroud: "/image/24.png"
        },
        {
          userid: "5",
          username: "HOJI",
          userinfo: "ご連絡、お仕事ご相談は hooooooooji9999@gmail.com まで",
          userheader: "/image/30.png",
          userbackgroud: "/image/31.jpg"
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
          authorid: "1",
          price: 1000,
          time: "2023-06-09",
          url: require(`@/assets/1.png`),
          type: "animation",
          tag: [
            { tno: 1, tname: "2 girls" },
            { tno: 2, tname: "swimsuit" },
            { tno: 3, tname: "棒アイス" }
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
          authorid: "1",
          price: 1000,
          time: "2023-06-09",
          url: require(`@/assets/2.png`),
          type: "animation",
          tag: [
            { tno: 1, tname: "猫耳" },
            { tno: 2, tname: "Nachoneko" },
            { tno: 3, tname: "なちょ猫" }
          ],

          intrduce: `无`
        },
        {
          no: 3,
          name: "nacho3",
          author: "甘城なつき",
          authorid: "1",
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
          authorid: "1",
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
          authorid: "1",
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
          authorid: "1",
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
          authorid: "1",
          price: 1000,
          time: "2023-06-09",
          url: require(`@/assets/7.png`),
          type: "animation",

          intrduce: `无`
        },
        {
          no: 9,
          name: "Spring",
          author: "宁建华",
          authorid: "2",
          price: 1000,
          time: "2023-06-10",
          url: require(`@/assets/12.png`),
          type: "ChinesepPainting",

          intrduce: `无`
        },
        {
          no: 10,
          name: "live-Grove-Orange-Sky_m",
          author: "梵高",
          authorid: "3",
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
          authorid: "1",
          price: 1000,
          time: "2020-12-07",
          url: require(`@/assets/14.png`),
          type: "animation",

          intrduce: `:3`,
        },
        {
          no: 12,
          name: "ohayo nachoneko T",
          author: "甘城なつき",
          authorid: "1",
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
        {
          no: 13,
          name: "✯ ✰ ✮",
          author: "しらたま❄",
          authorid: "4",
          price: 1000,
          time: "2021-12-09",
          url: require(`@/assets/26.png`),
          type: "animation",
          tag: [
            { tno: 1, tname: "原创" },
            { tno: 2, tname: "しろいいぬ" },
            { tno: 3, tname: "原创7500收藏" }
          ],

          intrduce: `リクエストで描かせていただきました、ありがとうございました✯`,
        },
        {
          no: 14,
          name: "🎀",
          author: "しらたま❄",
          authorid: "4",
          price: 1000,
          time: "2022-01-10",
          url: require(`@/assets/27.png`),
          type: "animation",
          tag: [
            { tno: 1, tname: "猫耳" },
            { tno: 2, tname: "headdress" },
            { tno: 3, tname: "オリジナル10000users入り" }
          ],

          intrduce: `イラストレーター・月見先生のお誕生日に月見先生のオリジナルキャラクターを描かせていただきました！`,
        },
        {
          no: 15,
          name: "ハコイリムスメ",
          author: "HOJI",
          authorid: "5",
          price: 1000,
          time: "2022-01-10",
          url: require(`@/assets/28.jpg`),
          type: "animation",
          tag: [
            { tno: 1, tname: "猫耳" },
            { tno: 2, tname: "銀髪" },
            { tno: 3, tname: "房间" }
          ],

          intrduce: `无`,
        },
        {
          no: 16,
          name: "秘密基地",
          author: "HOJI",
          authorid: "5",
          price: 1000,
          time: "2021-03-20",
          url: require(`@/assets/29.jpg`),
          type: "animation",
          tag: [
            { tno: 1, tname: "猫耳" },
            { tno: 2, tname: "废墟" },
            { tno: 3, tname: "房间" }
          ],

          intrduce: `无`,
        },
        {
          no: 17,
          name: "「GG~ありがと〜！」",
          author: "HOJI",
          authorid: "5",
          price: 1000,
          time: "2021-03-20",
          url: require(`@/assets/31.jpg`),
          type: "animation",
          tag: [
            { tno: 1, tname: "猫耳" },
            { tno: 2, tname: "銀髪" },
            { tno: 3, tname: "房间" }
          ],

          intrduce: `无`,
        },

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
