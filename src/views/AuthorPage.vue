<template>
  <div class="body">
    <div class="author">
      <div class="author-background" :style="{ backgroundImage: `url(${getAuthorBackgroundById(author.userid)})` }">
      </div>
      <div>
        <div class="author-info">
          <span class="author-header" :style="{ backgroundImage: `url(${getUserHeaderById(author.userid)})` }"></span>
          <div style="width: 800px;height: 100px;margin: 0 20px;">
            <div class="body-text1">{{ author.username }}</div>
            <div class="body-text2">{{ author.userinfo }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="img-show">
      <div class="img-show-body">
        <div class="body-leftmargin">
          <div class="body-nav">
            <div class="body-nav-item">作品</div>
          </div>
          <hr color="#e6ecf0">
          <div style="display: flex;flex-wrap: wrap;">
            <img-item class="body-item" v-for="photo in image" :key="photo.no" :value="photo.url" :name="photo.name"
              :author="photo.author" :time="photo.time" v-show="photo.authorid === $route.params.id"
              @click="gotoPhotoPage(photo)"><!--要改-->
            </img-item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImgItem from '@/components/ImgTmp.vue';

export default {
  components: {
    ImgItem
  },

  data() {
    return {
      author: {},
      image: [],
      setPhotoPageImgData: [],
    }
  },
  mounted() {
    const { id } = this.$route.params
    const image = this.$store.state.image
    const res = []
    for (const img of image) {
      if (img.authorid == id) {
        res.push(img)
      }//遍历image筛选出作者的作品图片
    }
    const user = this.$store.state.user
    //匹配userid和路由里面的id
    for (const i of user) {
      if (i.userid == id) {
        this.author = i
        break
      }
    }
    this.image = res
  },
  methods: {
    gotoPhotoPage(img) {
      // console.log(img);
      // 将图片数据存入 store
      this.$store.commit("setPhotoPageImgData", img)
      this.$router.push(`/PhotoPage/${img.no}`)
    },
    gotoAuthorPage(author) {
      // 将作者数据存入 store
      this.$store.commit("setPhotoPageImgData", author)
      this.$router.push()
    }
  },
  created() {
     // 将 store 中的 PhotoPageImgData 数据赋值给组件中的 setPhotoPageImgData 属性
    this.setPhotoPageImgData = this.$store.setPhotoPageImgData
  },
  computed: {
    getUserHeaderById() {
      //通过userid匹配userheader
      return (userid) => {
        const user = this.$store.state.user.find((u) => u.userid === userid);
        return user ? user.userheader : '';
      };
    },
    // 通过userid匹配userbackground
    getAuthorBackgroundById() {
      return (userid) => {
        const user = this.$store.state.user.find((u) => u.userid === userid);
        return user ? user.userbackgroud : '';
      };
    },
  },

}
</script>

<style scoped>
.body {
  width: 100%;
  min-height: 1000px;
  background-color: #e6ecf0;
}

/*页面主体两边间隔样式*/
.body-leftmargin {
  margin: 0 10px;
}

/*页面主体导航栏样式*/
.body-nav {
  width: 100%;
  height: 60px;
  margin: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

/*页面主体导航栏盒子样式*/
.body-nav-item {
  margin: 0 10px;
  overflow: hidden;
  /* border: 1px solid #000; */
}

.img-show {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

}

.img-show-body {
  width: 90%;
  min-height: 600px;
  background-color: white;
  border-radius: 6px;
  margin-top: 60px;
  margin-bottom: 60px;
}

/*页面主体内容样式*/
.body-item {
  display: flex;
  flex-wrap: warp;
}

/*作者头图*/
.author-background {
  width: 100%;
  height: 260px;
  box-sizing: initial;
  overflow: hidden;
  background-position: 50%;
  background-size: cover;
  /* background-image: url(../assets/19.png); */
}

/*作者简介*/
.author-info {
  width: 100%;
  height: 100px;
  background-color: white;
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
/*作者头像*/
@media screen and (width >= 1385px) {
  .author-header {
    display: block;
    width: 200px;
    height: 200px;
    box-sizing: inherit;
    background-size: cover;
    position: relative;
    top: -60px;
    right: 60px;
    border: 2px solid white;
    border-radius: 50%;
    /* background-position: 50%; */
    box-shadow: 0px 0px 10px rgb(0 0 0 / 10%);
  }
}

@media screen and (width < 1385px) {
  .author-header {
    display: block;
    width: 200px;
    height: 200px;
    box-sizing: inherit;
    background-size: cover;
    border: 2px solid white;
    border-radius: 50%;
    box-shadow: 0px 0px 10px rgb(0 0 0 / 10%);
    position: absolute;
    top: 8%;
  }
}


.body-text1 {
  text-align: left;
  font-size: 20px;
  font-weight: bolder;
  line-break: anywhere;
}

.body-text2 {
  text-align: left;
  font-weight: 100;
  font-size: 15px;
  font-family: 微软雅黑;
}
</style>