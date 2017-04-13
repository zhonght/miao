<template>
    <div id="app">
        <div id="loading">
            <img src="./assets/images/loading.gif">
        </div>
        <router-view></router-view>
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
    import  './assets/js/jquery.js';
    import  './assets/js/LazyLoad.js';
    import  './assets/js/functions.js';


    export default {
        name: 'app',
        data () {
            return {
            }
        },
        components: {},
        created: function () {
            $(function(){
                $("#loading").fadeOut();
            });
        },
        methods:{
        }
    }
</script>

<style lang="scss">
    @import './assets/iconfont/iconfont.css';
    @import './assets/css/common.css';
</style>
