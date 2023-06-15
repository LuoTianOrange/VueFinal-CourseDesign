<template>
    <div class="comment-box"><!--评论区-->
        <div style="margin-top: 20px;">
            <div class="body-text1">评论</div>
            <div style="display: flex;">
                <div class="comment-input-border">
                    <input class="comment-input" placeholder="发表评论" maxlength="80" />
                </div>
                <form @submit.prevent="addComment">
                    <button class="comment-btn" type="submit">发送</button>
                </form>
            </div>
            <div class="comment-item" v-for="comment in commentsList" :key="comment.id">
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
            commentList: []
        }
    },
    mounted() {
        this.commentList = this.$store.state.CommentSection[this.$route.params.id]
    },
    methods: {
        addComment() {
            if (this.newComment.trim() !== '') {
                const newId = this.comments.length + 1;
                this.comments.push({ id: newId, text: this.newComment });
                this.newComment = '';
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
    min-height: 100px;
    margin-top: 20px;
}

.comment-item-box {
    display: flex;
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