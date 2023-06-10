<template>
    <!-- 图片展示框 -->
    <a :href="PhotoPage">
        <div class="img-item">
            <img :src="url" alt="" class="body-img">
        </div>
    </a>
</template>
<script>
import PhotoPage from '@/views/PhotoPage.vue';

export default {
    data: {
        image: [
            {
                no: 1,
                name: "nacho1",
                author: "nacho",
                price: 1000,
                time: "2023-06-09",
                url: "../assets/1.png"
            },
            {
                no: 2,
                name: "nacho2",
                author: "nacho",
                price: 1000,
                time: "2023-06-09",
                url: "../assets/2.png"
            },

        ]
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