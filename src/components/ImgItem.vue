<template>
    <!-- 图片展示框 -->
    <router-link to="/PhotoPage">
        <div class="img-item">
            <img :src="$attrs.url" alt="" class="body-img">
        </div>
    </router-link>
</template>
<script>
// import PhotoPage from '@/views/PhotoPage.vue';

export default {
    data: function() {
        return {

        };
    },
    mounted() {
    }
}
</script>
<style>
.body-img {
    width: 200px;
}

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
</style>