<template>
    <div class="comment-box"><!--评论区-->
        <div style="margin-top: 20px;">
            <div class="body-text1">评论</div>
            <div style="display: flex;">
                <div class="comment-input-border">
                    <input class="comment-input" placeholder="发表评论" />
                </div>
                <button class="comment-btn">发送</button>
            </div>
            <div class="comment-item"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["avatar", "name", "content", "date"]
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

.body-text1 {
    text-align: left;
    font-size: 20px;
    font-weight: bolder;
    line-break: anywhere;
}
</style>