<template>
    <div class="body">
        <div class="main-body">
            <!--公告栏-->
            <div class="body-box1">
                <div style="margin: 20px;text-align: left;">
                    <div style="font-weight: bolder;">项目结构:IndexPage(主页),PhotoPage(图片详细界面),AuthorPage(作者详细页面)</div>
                    <div>
                        项目组件:CommentItem(评论区),DropDownTagTmp(首页下拉列表),ImgItem(画作展示盒),ImgTmp(画作悬停显示),MainFooter(底部栏),MainHeader(头部导航栏)
                    </div>
                    <div>可能实现的功能:全局搜索框,登录注册,根据标签名字匹配标签颜色,点击标签自动将标签置入搜索框搜索对应关键词</div>
                </div>
            </div>
            <!--画作展示栏-->
            <div class="body-box2">
                <div class="body-leftmargin">
                    <div class="body-nav">
                        <div class="body-nav-item text2" @click="switchAuthor(false)">
                            作品
                        </div>
                        <div class="body-nav-item text2" @click="switchAuthor(true)">
                            作者
                        </div>
                    </div>
                    <hr color="#e6ecf0">
                    <div v-show="showAuthor == false">
                        <drop-down-tag v-for="attr in keyNames" :tagName="attr.tagText" :key="attr.tagKey">
                            <div class="body-leftmargin">
                                <div style="display: flex;flex-wrap: wrap;">
                                    <img-item class="body-item" v-for="photo in image" :key="photo.no" :value="photo.url"
                                        :name="photo.name" :author="photo.author" :time="photo.time"
                                        v-show="photo.type === attr.tagKey" @click="gotoPhotoPage(photo)">
                                    </img-item>
                                </div>
                            </div>
                        </drop-down-tag>
                    </div>
                    <div v-show="showAuthor == true">
                        <div class="body-leftmargin">
                            <div style="display: flex;flex-wrap: wrap;">
                                <img-item class="body-item" v-for="users in user"
                                    :key="users.userid"
                                    :value="users.userheader"
                                    :author="users.username"
                                    @click="gotoAuthorPage(users)">
                                </img-item>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="width: 100%;height: 40px;"></div>
    </div>
</template>

<script>
import DropDownTag from '@/components/DropDownTagTmp.vue';
import ImgItem from '@/components/ImgTmp.vue';

export default {
    components: {
        DropDownTag,
        ImgItem
    },
    data() {

        return {
            showAuthor: false,
            isHovered: false,
            activePhoto: "display: none",
            // animation 动漫
            // ChinesepPainting 国画
            // canvas 油画
            keyNames: [
                { tagText: '动漫', tagKey: 'animation' },
                { tagText: '国画', tagKey: 'ChinesepPainting' },
                { tagText: '油画', tagKey: 'canvas' }
            ],
            image: this.$store.state.image,
            user: this.$store.state.user
        };

    },
    //在创建实例前设置body样式
    beforeCreate() {
        document.querySelector('body').setAttribute('style', 'margin: 0;padding: 0')
    },
    methods: {
        gotoPhotoPage(img) {
            //发送点击图片的页面到vuex，创建缓存
            this.$store.commit("setPhotoPageImgData", img)
            this.$router.push(`/PhotoPage/${img.no}`)
        },
         // 跳转到作者详细页面
        gotoAuthorPage(author) {
            this.$router.push(`/AuthorPage/${author.userid}`)
        },
        // 切换作品和作者展示
        switchAuthor(choose) {
            this.showAuthor = choose
        }
    }
}
</script>

<style>
.body head {
    margin: 0;
    padding: 0;
}

.body {
    width: 100%;
    min-height: 1000px;
    background-color: #e6ecf0;
}

/*页面主体样式*/
.main-body {
    display: flex;
    flex-direction: column;
    align-items: center;
}

/*页面主体公告栏样式*/
.body-box1 {
    width: 90%;
    min-height: 150px;
    background-color: white;
    border-radius: 6px;
    margin-top: 60px;
}

/*页面主体画作展示样式*/
.body-box2 {
    width: 90%;
    min-height: 600px;
    background-color: white;
    border-radius: 6px;
    margin-top: 60px;
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
    color: #777;
    /* border: 1px solid #000; */
}

.body-nav-item:hover {
    color: #eead6d;
}

/*页面主体内容样式*/
.body-item {
    display: flex;
    flex-wrap: warp;
}

/*页面主体图片样式*/
.body-img {
    width: 200px;
    height: 200px;
    object-fit: cover;

}

/*页面主体图片盒子样式*/
.img-item {
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 12px;
    border: 2px solid #eb972a;
    box-shadow: 0 0 5px #eb972a;
    margin-left: 20px;
    margin-top: 20px;
}

/*头部导航栏文字*/
.text1 {
    font-size: 20px;
    font-weight: bolder;
    color: #000;
}

/*主体导航栏文字*/
.text2 {
    font-size: 18px;
    font-family: 微软雅黑;
    color: #777777;
}

.text3 {
    font-size: 22px;
    font-family: 微软雅黑;
    font-weight: bolder;
    color: #000;
}

.foot-body {}

.hover-div {
    background-color: #ccc;
    padding: 10px;
    position: absolute;
    top: 20px;
    left: 20px;
}

/*页面主体悬浮菜单样式*/
.body-content {
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 12px;
    z-index: 2;
    background-color: white;
    opacity: 0.8;
}

/*页面主体悬浮菜单文字样式*/
.body-content-text {
    margin: 2px;
    color: #fb7299;
    font-size: 16px;
    font-weight: bold;
}

.on-body-content-show {
    display: flex;
    align-items: center;
    justify-content: center;
}

.on-body-content-hide {
    display: none;
}

.drop-down-arrow {
    font-size: 14px;
    margin-left: 10px;
}

.drop-down-tag {
    display: flex;
    min-height: 60px;
    flex-direction: column;
    justify-content: center;
}

.tag-bar {
    display: flex;
    align-items: center;
    margin: 15px 0;
}</style>