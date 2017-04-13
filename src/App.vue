<template>
  <div id="app">
      <div id="loading" v-if="is_loading">
          <img src="./assets/images/loading.gif">
      </div>
        <router-view ></router-view>
      <div class="menu">
        <router-link to="/index"  class="active">
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

export default {
  name: 'app',
  data () {
    return {
      msg: '2',
      is_loading:'1',
    }
  },
  created: function() {
  var _self  = this;
//          $.ajax({
//            type :'GET',
//            url: 'https://www.baidu.com',
//            success: function(data) {
//        _self .is_loading = 0;
//            },
//            error:function(){
        _self .is_loading = 0;
//            }
//          })
    },
//   components: { firstcomponent }
}
</script>

<style lang="scss">
[v-cloak]{display:black}
@import './assets/iconfont/iconfont.css';
@import './assets/css/common.css';
</style>
