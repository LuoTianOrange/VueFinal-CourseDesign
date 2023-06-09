<template>
    <!-- 头部导航栏 -->
    <div class="main-header">
        <div class="head-item" style="margin-left: 60px;">
            <img src="../assets/logo.png" alt="logo" width="40px">
        </div>
        <div class="head-item">
            <div class="text1">橘橘画廊</div>
        </div>
        <div class="head-item" style="flex: 1;">
            <div class="head-search">
                <img src="../assets/serach-logo.png" alt="search" class="logo-search">
                <form style="flex: 1;">
                    <input class="head-search-input" type="text" title="1">
                </form>
            </div>
        </div>
        <div class="head-item">
            <a href="">
                <!--头像-->
                <img src="../assets/3.png" alt="" style="width: 40px;border-radius: 50%;border: 1px solid #777777;">
            </a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.main-header {
    height: 100%;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
}

.head-item {
    margin: 0 10px;
    overflow: hidden;
}

.head-search {
    border: 2px solid #bdbdbd;
    border-radius: 20px;
    height: 35px;
    min-width: 100px;
    display: flex;
}

.head-search-input {
    width: calc(100% - 20px);
    height: 25px;
    border: 0;
    outline: none;
    margin-top: 4px;
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
</style>