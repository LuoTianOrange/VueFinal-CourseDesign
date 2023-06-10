<template>
    <div class="img-item">
        <!--悬停窗口-->
        <div @mouseenter="isHovered = 1" @mouseleave="isHovered = 0">
            <div class="body-content" :class="bodyContentClass[isHovered]">
                <div class="body-content-text">
                    <div>
                        名字：{{ this.name }}
                    </div>
                    <div>
                        作者：{{ this.author }}
                    </div>
                    <div>
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
}
</script>

<style></style>