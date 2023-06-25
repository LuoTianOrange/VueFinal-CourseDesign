<template>
    <div class="comment-box"><!--评论区-->
        <div style="margin-top: 20px;">
            <div class="body-text1">评论</div>
            <div style="display: flex;">
                <form @submit.prevent="addComment" style="display: flex;">
                    <div class="comment-input-border">
                        <input class="comment-input" placeholder="发表评论" maxlength="80" v-model="newComment" />
                    </div>
                    <button class="comment-btn" type="submit">发送</button>
                </form>
            </div>
            <div class="comment-item" v-for="comment in commentList" :key="comment.id">
                <div class="comment-item-box">
                    <div class="comment-user-header"></div>
                    <div>
                        <div class="comment-text1">{{ comment.name }}</div>
                        <div class="comment-text2">{{ comment.text }}</div>
                        <div class="comment-text3">{{ comment.time }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ["avatar", "name", "content", "date"],

    data() {
        return {
            commentList: [],// 评论列表
            trim: "",// 评论内容去除空格
            newComment: ""// 新评论内容
        }
    },
    mounted() {
        // 获取对应页面的评论列表
        this.commentList = this.$store.state.CommentSection[this.$route.params.id]
    },
    methods: {
        //添加新评论
        addComment() {
            if (this.newComment !== '') {
                const newId = this.commentList.length + 1;
                this.commentList.push({ id: newId, text: this.newComment, name: "user" });
                this.$store.commit("setComments", {
                    id: this.$route.params.id,
                    list: this.commentList
                })
                //发送评论后清空评论发送框内容
                this.newComment = '';
            } else {
                alert("评论不能为空！")
            }
        }
    }
}
</script>

<style>
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
    margin-top: 10px;
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
    margin: 10px 0px 0 20px;
}

.body-text1 {
    text-align: left;
    font-size: 20px;
    font-weight: bolder;
    line-break: anywhere;
}

.comment-item {
    min-width: 600px;
    min-height: 80px;
    margin-top: 20px;
}

.comment-item-box {
    display: flex;
    margin: 20px 10px;
}

.comment-user-header {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    box-sizing: inherit;
    background-size: cover;
    background-image: url(../assets/00.png);
    margin-right: 20px;
}

.comment-text1 {
    text-align: left;
    font-size: 16px;
    font-weight: bolder;
    color: #000;
}

.comment-text2 {
    text-align: left;
    font-size: 15px;
    font-weight: normal;
    color: #000;
    margin: 5px 0;
}

.comment-text3 {
    text-align: left;
    font-size: 15px;
    font-weight: normal;
    color: #999999;
}
</style>