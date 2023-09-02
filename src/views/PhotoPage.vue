<template>
    <div class="body">
        <div class="body-main">
            <div class="margin-twin">
                <div class="body-left">
                    <img :src="img.url" alt="" class="body-img"> <!--图片展示区-->
                </div>
                <div class="body-right">
                    <div class="body-right-item">
                        <div class="item-box">
                            <div class="item-box-info">
                                <div class="body-text1" @click="$event => gotoAuthorPage(img.authorid)">{{ img.author }}
                                </div><!--作者名字-->
                                <div class="body-text1">{{ img.name }}</div><!--画作名字-->
                                <div class="like-logo" v-show="isLiked == false" @click="cilckLike"></div><!--喜欢-->
                                <div class="dislike-logo" v-show="isLiked == true" @click="cilckDisLike" style="color: red;"></div>
                            </div>
                        </div>
                        <hr style="margin: 0;">
                        <div class="item-box">
                            <div style="margin: 0 20px;">
                                <div class="body-text2" style="font-weight: bolder;">简介</div><!--作品简介-->
                                <div class="body-text2">{{ img.intrduce }}</div>
                            </div>
                        </div>
                        <hr style="margin: 0;">
                        <div class="item-box">
                            <div style="margin: 0 20px;">
                                <div class="body-text2" style="font-weight: bolder;">时间</div>
                                <div class="body-text2">{{ img.time }}</div><!--时间-->
                            </div>
                        </div>
                    </div>
                    <div class="body-right-item">
                        <div class="item-box">
                            <div style="margin: 0 20px;">
                                <div class="body-text1">标签</div>
                                <div class="tag-item">
                                    <div class="tag" v-for="imgtag in img.tag" :key="imgtag.tno">{{ imgtag.tname }}</div>
                                    <div class="tag" style="background-color: #fb7299;">pink</div>
                                    <div class="tag" style="background-color: #dd001b;">red</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="body-main">
            <div class="comment-postion">
                <Comment></Comment><!--评论区-->
            </div>
        </div>
    </div>
</template>

<script>
import Comment from '@/components/CommentItem.vue'

export default {
    components: { Comment },
    data() {
        return {
            img: {},
            isLiked: false
        }
    },
    mounted() {
         // 获取图片信息，并设置isLiked值
        this.$data.img = this.$store.state.PhotoPageImgData ?? JSON.parse(localStorage.getItem("PhotoPageImgData") ?? {})
        this.isLiked = this.$store.state.isLikedGroup.indexOf(parseInt(this.$route.params.id)) !== -1
    },
    computed:{
        image() {
            return this.$store.state.image
        }
    },
    methods: {
        gotoAuthorPage(authorid) {
            //根据作者id创建作者页面
            this.$router.push(`/AuthorPage/${authorid}`)
        },
        cilckLike(){
             // 提交点赞状态到store
            this.isLiked = true
            this.$store.commit("setPhotoLike",{
                no: this.img.no,
                isLiked: true
            })
        },
        cilckDisLike(){
             // 提交取消点赞状态到store
            this.isLiked = false
            this.$store.commit("setPhotoLike",{
                no: this.img.no,
                isLiked: false
            })
        }
    },

}
</script>

<style scoped>
.body-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
}

.body-left {
    display: flex;
    flex-direction: column;
    margin: 0 15px 15px 15px;
    align-items: center;
    /* width: 60%; */
}

@media screen and (width >=1385px) {
    .body-right {
        width: 500px;

    }
}

@media screen and (width < 1385px){
    .body-right {
        width: 800px;

    }
}

/* @media screen and (width < 840px) {
    .body-right {
        width: 97%;

    }
} */

@media screen and (width >=1385px) {
    .comment-postion {
        position: relative;
        right: 250px;
    }

}
@media screen and (width < 1385px) {
    .comment-postion {
        position: relative;
    }

}

.margin-twin {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

.body-img {
    width: 800px;
    height: auto;
    margin-bottom: 15px;
}

.body-right-item {
    width: 100%;
    min-height: 100px;
    margin-top: 20px;
    background-color: white;
    border-radius: 6px;
    overflow: hidden;
}

.item-box {
    width: 100%;
    min-height: 80px;
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.item-box-info {
    margin: 0 20px;
    width: calc(100% - 40px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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

.like-logo {
    width: 20px;
    height: 20px;
    text-align: left;
    font-size: 27px;
    margin-top: 10px;
    background-image: url("../assets/like-logo.png");
    background-size: cover;
}
.dislike-logo {
    width: 20px;
    height: 20px;
    text-align: left;
    font-size: 27px;
    margin-top: 10px;
    background-image: url("../assets/liked-logo.png");
    background-size: cover;
}

/*评论区*/
.comment-box {
    width: 800px;
    min-height: 300px;
    background-color: white;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.comment-input-border {
    width: 600px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid #bdbdbd;
}

.comment-item {
    min-width: 600px;
    min-height: 100px;
}

.comment-input {
    width: calc(100% - 30px);
    height: 35px;
    border: 0;
    outline: none;
    margin-top: 2px;
}

.comment-btn {
    width: 76px;
    height: 40px;
    background-color: #0096fa;
    border-radius: 20px;
    color: white;
    font-size: 15px;
    font-weight: bolder;
    border-style: none;
    margin: 0 10px;
}

.tag-item {
    display: flex;
    flex-wrap: wrap;
}

.tag {
    color: white;
    background-color: yellowgreen;
    padding: 4px 10px;
    border-radius: 6px;
    margin: 5px 5px 0 0;
}
</style>