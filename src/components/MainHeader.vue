<template>
    <!-- 头部导航栏 -->
    <div class="head">
        <div class="main-header">
            <router-link to="/" style="display: flex;align-items: center;">
                <div class="head-item" style="margin-left: 60px;">
                    <img src="../assets/OrangeLogo.png" alt="logo" width="40px">
                </div>
                <div class="head-item header-logo-text">
                    <div class="header-text1">
                        橘橘画廊</div>
                </div>
            </router-link>
            <div class="head-item" style="flex: 1;">
                <div class="head-search">
                    <img src="../assets/serach-logo.png" alt="search" class="logo-search">
                    <form style="flex: 1;">
                        <!--搜索输入框-->
                        <input class="head-search-input" type="text" title="1" v-model="searchKeyword" @click="SearchEnter"
                            @focus.prevent="SearchEnter" style="min-width: 200px;">
                    </form>
                    <div v-if="searchKeyword?.length" @click="CleanInput"><svg class="s2-svg2" width="16" height="16"
                            viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 8L40 40" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8 40L40 8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                <!--搜索结果-->
                <div class="search-box" v-show="isSearchClick == true" @mouseleave="SearchLeave">
                    <div v-show="filteredImages?.length" class="header-box header-font"
                        style="position: sticky; top: 0; z-index: 10;">作品</div>
                    <div v-for="i in filteredImages" :key="i.no">
                        <div class="header-box box-hover header-font2" @click="gotoPhotoPage(i)">
                            <img :src="i.url" style="width: 30px;height: 30px;object-fit: cover;">
                            <div style="margin: 0 10px;">{{ i.name }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="head-item">
                <a href="">
                    <!--头像-->
                    <img src="../assets/3.png" alt="" style="width: 40px;border-radius: 50%;border: 1px solid #777777;">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

//字符串预处理
const utilsMap = {
    tag: (tag, keyword) => JSON.stringify(tag).toLowerCase().includes(keyword)
}

const search = (image, keyword, searchKeys) => searchKeys.some((v) => {
    if (utilsMap[v]) {
        return image[v] && utilsMap[v](image[v], keyword)
    }
    else {
        return image[v]?.toLowerCase().includes(keyword)
    }
})

export default {
    data() {
        return {
            searchKeyword: "",
            isSearchClick: false,
        }
    },
    methods: {
        CleanInput() {
            this.searchKeyword = "";
        },
        gotoPhotoPage(img) {
            //发送点击图片的页面到vuex，创建缓存
            this.$store.commit("setPhotoPageImgData", img)
            this.$router.push(`/PhotoPage/${img.no}`)
            //刷新页面
            location.reload();
        },
        SearchEnter() {
            this.isSearchClick = true;
        },
        SearchLeave() {
            this.isSearchClick = false;
        }
    },
    computed: {
        ...mapState(["image"]),
        filteredImages() {
            if (this.searchKeyword.length === 0) return []
            const keys = ["name", "author", "tag"]
            return this.image.filter((image) => search(image, this.searchKeyword.toLowerCase(), keys));
        },
    },
}
</script>

<style scoped>
@media screen and (width < 600px){
    .header-logo-text{
        display: none;
    }
}

.head {
    height: 55px;
    width: 100%;
}

.header-text1 {
    font-size: 22px;
    font-family: 仓耳渔阳体;
    /* font-weight: bolder; */
    color: #000;
}

.header-text1:hover {
    color: #eead6d;
}

.main-header {
    height: 100%;
    width: 100%;
    /* margin: 3px 0; */
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
}

.head-item {
    position: relative;
    margin: 0 10px;
}

.head-search {
    border: 2px solid #eeeeee;
    border-radius: 20px;
    height: 35px;
    min-width: 200px;
    display: flex;
}

.head-search:hover {
    border: 2px solid #bdbdbd;
}

.head-search-input {
    width: calc(100% - 25px);
    height: 27px;
    border: 0;
    outline: none;
    margin-top: 4px;
    font-size: 16px;
}

.logo-search {
    margin-top: 8px;
    width: 20px;
    height: 20px;
    margin-left: 8px;
}

.user-head {
    width: 40px;
    border-radius: 50%;
    border: 1px solid #777777;
    position: relative;

}

.s2-svg2 {
    margin: 10px 15px 0 0px;
    stroke: #000;
}

.header-font {
    font-size: 14px;
}

.header-font2 {
    font-size: 15px;
    font-weight: bolder;
}

.header-box {
    height: 30px;
    min-width: 95%;
    background-color: #fff;
    border: none;
    position: relative;
    padding: 10px;
    text-align: left;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
}

.search-box {
    position: absolute;
    top: 47px;
    width: 100%;
    max-height: 400px;
    overflow: overlay;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 0 0 8px 8px;
}

.box-hover:hover {
    background-color: #eeeeee;
}</style>