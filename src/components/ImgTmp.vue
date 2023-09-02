<template>
    <div class="img-item" @click="outerClick">
        <!--悬停窗口-->
        <div @mouseenter="isHovered = 1" @mouseleave="isHovered = 0">
            <div class="body-content" :class="bodyContentClass[isHovered]">
                <div class="body-content-text">
                    <div v-if="name">
                        名字：{{ this.name }}
                    </div>
                    <div v-if="author">
                        作者：{{ this.author }}
                    </div>
                    <div v-if="time">
                        时间：{{ this.time }}
                    </div>
                </div>
            </div>
            <img :src="this.value" alt="" class="body-img">
        </div>
    </div>
</template>

<script>
export default {
    props: ['value', 'name', 'author', 'time'],
    data: () => {
        return {
            isHovered: 0,
            bodyContentClass: ['on-body-content-hide', 'on-body-content-show'],
        }
    },
    methods: {
        outerClick(e) {
            //用于触发外部点击事件，并通过 $emit 方法将事件传递给父组件。
            this.$emit("click", e)
        }
    }
}
</script>

<style>
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

/*页面主体图片样式*/
.body-img {
    width: 200px;
    height: 200px;
    object-fit: cover;

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
</style>