<template>
    <div class="body">
        <div class="main-body">
            <!--公告栏-->
            <div class="body-box1">
                <div style="margin: 20px;text-align: left;">
                    <div style="font-weight: bolder;">项目结构:IndexPage(主页),PhotoPage(图片详细界面),AuthorPage(作者详细页面)</div>
                    <div>
                        项目组件:Comment(评论区),DropDownTagTmp(首页下拉列表),ImgItem(画作展示盒),ImgTmp(画作悬停显示),MainFooter(底部栏),MainHeader(头部导航栏)
                    </div>
                    <div>待实现功能:点击作者名字跳转作者详细页面,作者详细页面可以展示和打开画作;发送评论,点赞;主页切换画作和作者</div>
                    <div>可能实现的功能:全局搜索框,登录注册</div>
                </div>
            </div>
            <!--画作展示栏-->
            <div class="body-box2">
                <div class="body-leftmargin">
                    <div class="body-nav">
                        <div class="body-nav-item text2">
                            作品
                        </div>
                        <div class="body-nav-item text2" @click="$event =>gotoAuthorPage()">
                            作者
                        </div>
                        <div class="body-nav-item text2">
                            最喜欢的作者
                        </div>
                        <div class="body-nav-item text2">
                            受欢迎的作者
                        </div>
                    </div>
                    <hr color="#e6ecf0">
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
            image: [
                {
                    no: 1,
                    name: "nacho1",
                    author: "甘城なつき",
                    price: 1000,
                    time: "2023-06-09",
                    url: require(`@/assets/1.png`),
                    type: "animation",
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
        };

    },
    //在创建实例前设置body样式
    beforeCreate() {
        document.querySelector('body').setAttribute('style', 'margin: 0;padding: 0')
    },
    methods: {
        gotoPhotoPage(img) {
            // console.log(img);
            this.$store.commit("setPhotoPageImgData", img)
            this.$router.push(`/PhotoPage/${img.no}`)
        },
        gotoAuthorPage(author) {
            this.$store.commit("setPhotoPageImgData", author)
            this.$router.push(`/AuthorPage/`)
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
    /* border: 1px solid #000; */
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
}
</style>