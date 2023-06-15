<template>
    <div class="comment-item">
        <div class="comment-item-box">
            <div class="comment-user-header"></div>
            <div>
                <div class="comment-text1">名字</div>
                <div class="comment-text2">我是留言</div>
                <div class="comment-text3">2023-06-15</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:["userid","username","userheader"]
}
</script>

<style>
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