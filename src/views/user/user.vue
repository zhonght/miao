<template>
    <div>
        <div class="user-info">
            <div class="user-info-bg"></div>
            <div class="user-info-avatar">
                <img v-bind:data-original=avatar class="imgLoadingLater "/>
            </div>
            <span  class=" user-info-nickname"> {{ nickname }} </span>
        </div>
        <div class="row user-info-nav">
            <router-link to="/order">
                <span>我的订单</span>
            </router-link>
        </div>
        <div class="row user-menu">
            <ul>
                <li>
                    <span><i class="iconfont">&#xe669;</i>待付款</span>
                </li>
                <li>
                    <span><i class="iconfont">&#xe669;</i>待发货</span>
                </li>
                <li>
                    <span><i class="iconfont">&#xe669;</i>已发货</span>
                </li>
                <li>
                    <span><i class="iconfont">&#xe669;</i>代付款</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data () {
            return {
                nickname:"南瓜",
//                avatar:""
                avatar:"https://avatar.tower.im/ce836fbba993437daf263d885878d618"
            }
        },
        mounted(){
            var _self = this;
            $(function () {
                var user = sessionStorage.getItem('user');
//
//                router.go({name: '_login'});
                if (user) {
                    this.nickname = user.nickname;
                    this.avatar = user.avatar;
                }else{
                    router.go({name: '_login'});
                }
                $("img.imgLoadingLater").lazyload({
                    threshold: 100,
                    effect: "fadeIn"
                });
            });
        },
    }
</script>

<style>
    @import '../../assets/css/user.css';

    .user-info {
        width: 100%;
    }

    .user-info-bg {
        background: #C2ECFF;
        height: 100px;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        /*border-bottom: 50px solid #ffffff;*/
        -webkit-filter: blur(10px); /* Chrome, Opera */
        -moz-filter: blur(10px);
        -ms-filter: blur(10px);
        filter: blur(10px);
    }

    .user-info-avatar {
        width: 100%;
        height: 82px;
        text-align: center;
        margin-top:20px;
    }

    .user-info-avatar img {
        height: 80px;
        width: 80px;
        border:3px #ffffff solid;
        background: #f5f5f5;
        border-radius: 50%;
    }

    .user-info-nickname {
        text-align: center;
        line-height: 24px;
        display: block;
    }

    .user-menu{
        width: 100%;
        margin-top: 10px;
        background: #ffffff;
        overflow: hidden;
    }

    .user-info-nav{
        background: #ffffff;
        line-height: 40px;
        height: 40px;
    }

</style>