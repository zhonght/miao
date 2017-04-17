<template>
    <div class="login">
        <div class="row">
            <input type="text" name="userName" placeholder="用户名"/>
        </div>
        <div class="row">
            <input type="text" name="passWord" placeholder="密码"/>
        </div>
        <div class="row login-button">
            <button v-on:click="login()">登录</button>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data () {
            return {

            }
        },
        methods: {
            login: function () {
                sessionStorage.user = {userId:1,nickname:"南瓜",avatar: "https://avatar.tower.im/ce836fbba993437daf263d885878d618"};
//                require('../index/index.vue');
            }
        },
        mounted(){
            $(function () {

            });
        },
    }
</script>

<style>
    .login{
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        background: #ffffff;
        z-index: 1;
    }
    .login .row{

    }
    .login .row input{
        border: 1px solid #C2ECFF;
        padding: 10px 20px;
        border-radius: 20px;
        width: 60%;
    }
    .login .row button{
        background: #66CEFF;
        padding: 10px 20px;
        border: 0;
        width: 60%;
        color: #ffffff;
        border-radius: 20px;
    }
    .login  .login-button{

    }
</style>