<template>
    <div>
        <!--<div class="row copyright">-->
            <!--<a href="http://www.baidu.com">-->
                <!--<span>钟瀚涛 @651799656</span>-->
            <!--</a>-->
        <!--</div>-->
        <div style="height: 45px; clear: both;"></div>
        <div class="menu">
            <router-link to="/index">
                <i class="iconfont">&#xe6b8;</i>
            </router-link>
            <router-link to="/list">
                <i class="iconfont">&#xe676;</i>
            </router-link>
            <router-link to="/cart">
                <i class="iconfont">&#xe6af;</i>
            </router-link>
            <router-link to="/user">
                <i class="iconfont">&#xe78b;</i>
            </router-link>
        </div>
    </div>
</template>
<script>
</script>

<style lang="scss">
    .copyright span{
        color:#66CEFF;
        font-size: 12px;
    }
</style>
