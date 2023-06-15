<template>
    <div>
        <div class="drop-down-tag" @click="isClicked = !isClicked">
            <div class="tag-bar">
                <div class="drop-down-arrow" v-if="isClicked">▼</div>
                <div class="drop-down-arrow" v-else>▶</div>
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
            isClicked: true,
        }
    }
}
</script>

<style>
</style>