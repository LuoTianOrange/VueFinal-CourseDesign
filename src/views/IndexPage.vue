<template>
    <div class="body">
        <div class="main-body">
            <!--公告栏-->
            <div class="body-box1"></div>
            <!--画作展示栏-->
            <div class="body-box2">
                <div class="body-leftmargin">
                    <div class="body-nav">
                        <div class="body-nav-item text2">
                            新到货的作品
                        </div>
                        <div class="body-nav-item text2">
                            你所关注的作者的新作品
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
                                    v-show="photo.type === attr.tagKey">
                                </img-item>
                            </div>
                        </div>
                    </drop-down-tag>
                </div>
            </div>
        </div>
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
                            author: "nacho",
                            price: 1000,
                            time: "2023-06-09",
                            url: require(`@/assets/1.png`),
                            type: "animation"
                        },
                        {
                            no: 2,
                            name: "nacho2",
                            author: "nacho",
                            price: 1000,
                            time: "2023-06-09",
                            url: require(`@/assets/2.png`),
                            type: "animation"
                        },
                        {
                            no: 3,
                            name: "nacho3",
                            author: "nacho",
                            price: 1000,
                            time: "2023-06-09",
                            url: require(`@/assets/3.png`),
                            type: "animation"
                        },
                        {
                            no: 4,
                            name: "nacho4",
                            author: "nacho",
                            price: 1000,
                            time: "2023-06-09",
                            url: require(`@/assets/4.png`),
                            type: "animation"
                        },
                        {
                            no: 5,
                            name: "nacho5",
                            author: "nacho",
                            price: 1000,
                            time: "2023-06-09",
                            url: require(`@/assets/5.png`),
                            type: "animation"
                        },
                        {
                            no: 6,
                            name: "nacho6",
                            author: "nacho",
                            price: 1000,
                            time: "2023-06-09",
                            url: require(`@/assets/6.png`),
                            type: "animation"
                        },
                        {
                            no: 7,
                            name: "nacho7",
                            author: "nacho",
                            price: 1000,
                            time: "2023-06-09",
                            url: require(`@/assets/7.png`),
                            type: "animation"
                        },
                        {
                            no: 8,
                            name: "nacho8",
                            author: "nacho",
                            price: 1000,
                            time: "2023-06-09",
                            url: require(`@/assets/8.png`),
                            type: "animation"
                        },
                        {
                            no: 9,
                            name: "Spring",
                            author: "XingJianhua",
                            price: 1000,
                            time: "2023-06-10",
                            url: require(`@/assets/12.png`),
                            type: "ChinesepPainting"
                        },
                    ],
                    // author:[],
                    // price:[],

                };
    }
}
</script>

<style>
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