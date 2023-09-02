<template>
    <div>

        <div class="drop-down-tag" @click="isClicked = !isClicked">
            <div class="tag-bar">
                <transition name="optChange" mode="in-out">
                    <div class="drop-down-arrow" v-if="isClicked">▼</div>
                    <div class="drop-down-arrow" v-else>▶</div>
                </transition>
                <div class="body-nav-item text3">{{ tagName }}</div>
            </div>
        </div>

        <slot v-if="isClicked">
        </slot>
        <hr color="#e6ecf0" style="margin-top: 20px;">
    </div>
</template>

<script>
export default {
    props: ["tagName"],
    data: () => {
        return {
            //默认是否展开
            isClicked: true,
        }
    }
}
</script>

<style>
.optChange-enter,
.optChange-leace-to {
    opacity: 0;
}

.optChange-enter-to,
.optChange-leace {
    opacity: 1;
}

.optChange-leave-active {
    transform: opacity 1s;
}

.optChange-enter-active {
    transform: opacity 1s;
}
</style>